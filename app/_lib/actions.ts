"use server";

import { headers } from "next/headers";
import { Resend } from "resend";
import {
  ERRORS,
  FIELD_EMAIL,
  FIELD_HONEYPOT,
  isValidEmail,
  normalizeEmail,
  type LeadState,
} from "./lead";

// Отсечение повторов с одного IP — LANDING_PLAN §6.
// Честно про предел: Map живёт в памяти одного процесса. На serverless инстансов
// несколько и после простоя они умирают, значит защита частичная. Настоящий барьер
// от ботов здесь — honeypot; этот счётчик спасает от двойного клика и от того,
// кто вручную жмёт «Wyślij» подряд.
const RECENT = new Map<string, number>();
const REPEAT_WINDOW_MS = 60_000;

function seenRecently(ip: string): boolean {
  const now = Date.now();
  for (const [key, at] of RECENT) {
    if (now - at > REPEAT_WINDOW_MS) RECENT.delete(key);
  }
  const last = RECENT.get(ip);
  RECENT.set(ip, now);
  return last !== undefined && now - last < REPEAT_WINDOW_MS;
}

async function clientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
}

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Приманка заполнена — это бот. Показываем ему успех и молча ничего не шлём:
  // видимая ошибка подсказала бы, что именно мы поймали.
  if (normalizeEmail(formData.get(FIELD_HONEYPOT)) !== "") {
    return { status: "success" };
  }

  const email = normalizeEmail(formData.get(FIELD_EMAIL));
  if (!isValidEmail(email)) {
    return { status: "error", error: ERRORS.email };
  }

  if (seenRecently(await clientIp())) {
    return { status: "success" };
  }

  // Ключ читается только здесь, на сервере. Префикса NEXT_PUBLIC_ у него нет и быть
  // не может: он вкомпилировал бы значение в клиентский бандл (CLAUDE.md §2).
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;
  const to = process.env.CONTACT_INBOX;

  if (!apiKey || !from || !to) {
    console.error("[lead] нет RESEND_API_KEY, RESEND_FROM или CONTACT_INBOX — письмо не отправлено");
    return { status: "error", error: ERRORS.send };
  }

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: email,
      subject: `ConvoyMind — zgłoszenie: ${email}`,
      text: `Nowe zgłoszenie z landing page.\n\nE-mail: ${email}\nData: ${new Date().toISOString()}\n`,
    });

    if (error) {
      console.error("[lead] Resend отказал:", error);
      return { status: "error", error: ERRORS.send };
    }
  } catch (cause) {
    console.error("[lead] запрос к Resend упал:", cause);
    return { status: "error", error: ERRORS.send };
  }

  return { status: "success" };
}
