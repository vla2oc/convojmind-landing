"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitLead } from "../_lib/actions";
import { FIELD_EMAIL, FIELD_HONEYPOT, INITIAL_LEAD_STATE } from "../_lib/lead";
import { track } from "../_lib/track";

// S8. Текст — docs/COPY.md, раздел S8.
// Поле одно (решение владельца 2026-09-08): всё остальное спрашиваем в разговоре.
export function Contact() {
  const [state, formAction, pending] = useActionState(submitLead, INITIAL_LEAD_STATE);
  const started = useRef(false);

  useEffect(() => {
    if (state.status === "success") track("form_submitted");
  }, [state.status]);

  return (
    <section id="kontakt" className="scroll-mt-16 border-t border-surface-2 bg-surface">
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
                  onFocus={() => {
                    if (started.current) return;
                    started.current = true;
                    track("form_start");
                  }}
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
