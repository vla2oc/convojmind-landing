"use client";

import { useActionState } from "react";
import { submitLead } from "../_lib/actions";
import { FIELD_EMAIL, FIELD_HONEYPOT, INITIAL_LEAD_STATE } from "../_lib/lead";

// S8, ФОРМА — СЕЙЧАС НЕ ПОДКЛЮЧЕНА К СТРАНИЦЕ. Живой вариант приёма заявок —
// Contact.tsx (mailto), решение владельца 2026-09-13: аккаунта Resend ещё нет,
// а форма без ключа отвечает «Nie udało się wysłać» и теряет человека.
//
// Что нужно, чтобы вернуть её на страницу (одна строка в app/_sections/Landing.tsx; текст формы пока только польский — при возврате переезжает в словарь):
// RESEND_API_KEY, RESEND_FROM, CONTACT_INBOX в переменных окружения Vercel.
// Код проверен 2026-09-13: обе ветки валидации и ветка отказа Resend работают,
// ключ в клиентский бандл не попадает. Не удалять и не переписывать заново.
//
// Текст — docs/COPY.md, раздел S8.
// Поле одно (решение владельца 2026-09-08): всё остальное спрашиваем в разговоре.
export function Contact() {
  const [state, formAction, pending] = useActionState(submitLead, INITIAL_LEAD_STATE);

  return (
    <section id="kontakt" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Umów rozmowę
        </h2>

        {state.status === "success" ? (
          // Успех встаёт на место формы, а не рядом с ней.
          <p className="mt-8 max-w-xl font-heading text-lg font-semibold leading-snug text-text">
            Dziękujemy. Odezwiemy się w ciągu jednego dnia roboczego.
          </p>
        ) : (
          <>
            <p className="mt-4 text-muted">Odpowiadamy w ciągu jednego dnia roboczego.</p>

            <form action={formAction} className="mt-8 max-w-xl">
              {/* Приманка для ботов. Человек её не видит и табом в неё не попадает. */}
              <input
                type="text"
                name={FIELD_HONEYPOT}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <label htmlFor={FIELD_EMAIL} className="block text-sm text-muted">
                E-mail
              </label>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input
                  id={FIELD_EMAIL}
                  name={FIELD_EMAIL}
                  type="email"
                  required
                  autoComplete="email"
                  aria-describedby={state.status === "error" ? "lead-error" : undefined}
                  className="min-w-0 flex-1 rounded-full border border-surface-2 bg-bg px-5 py-3 text-text placeholder:text-muted"
                />
                <button
                  type="submit"
                  disabled={pending}
                  className="shrink-0 rounded-full bg-primary px-7 py-3 font-heading text-base font-semibold text-on-primary disabled:opacity-60"
                >
                  {pending ? "wysyłanie…" : "Wyślij"}
                </button>
              </div>

              {/* Ошибка текстом под полем, не только цветом — LANDING_PLAN §6. */}
              <p id="lead-error" aria-live="polite" className="mt-3 text-sm text-danger">
                {state.status === "error" ? state.error : ""}
              </p>

              {/* Вместо чекбокса согласия — решение владельца 2026-09-08. */}
              <p className="mt-4 text-sm leading-relaxed text-muted">
                <span className="block">Zostawiasz adres — piszemy tylko w sprawie pilotażu.</span>
                <span className="block">Twój adres zostaje u nas.</span>
              </p>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
