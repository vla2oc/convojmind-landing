// Валидация заявки. Один модуль на клиент и сервер — требование LANDING_PLAN §6
// («валидация одна и та же»). zod не ставим: поле одно, пакет не окупается.

// Тексты ошибок — docs/COPY.md, раздел S8.
export const ERRORS = {
  email: "Podaj poprawny adres e-mail.",
  send: "Nie udało się wysłać. Spróbuj jeszcze raz albo napisz na kurochka265@gmail.com.",
} as const;

export const FIELD_EMAIL = "email";

// Скрытое поле-приманка. Имя правдоподобное: бот заполняет всё, что видит,
// человек его не видит вообще. Капчу не ставим (DECISIONS.md, 2026-09-08).
export const FIELD_HONEYPOT = "firma";

// Намеренно нестрогая проверка. Задача — отсечь опечатку и мусор, а не подтвердить
// существование ящика: единственный настоящий тест адреса — дошедшее письмо.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizeEmail(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function isValidEmail(value: unknown): boolean {
  const email = normalizeEmail(value);
  return email.length <= 254 && EMAIL.test(email);
}

export type LeadState = {
  status: "idle" | "error" | "success";
  error?: string;
};

export const INITIAL_LEAD_STATE: LeadState = { status: "idle" };
