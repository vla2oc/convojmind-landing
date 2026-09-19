import { CtaLink } from "../_motion/CtaLink";
import { Reveal } from "../_motion/Reveal";
import type { Copy } from "../_copy/types";

// S7. Текст — docs/COPY.md, раздел S7 (и «EN»).
// Пока не форма, а прямое письмо (решение владельца 2026-09-13): аккаунта Resend
// ещё нет, а форма без ключа отвечает отказом и теряет человека. Форма лежит
// готовая в ContactForm.tsx и возвращается одной строкой в Landing.tsx.
const EMAIL = "kurochka265@gmail.com";

export function Contact({ id, copy }: { id: string; copy: Copy["contact"] }) {
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(copy.subject)}`;

  return (
    <section id={id} className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">{copy.h2}</h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-text">{copy.ask}</p>
          <p className="mt-2 text-muted">{copy.reply}</p>
        </Reveal>

        <Reveal className="mt-8 flex flex-col items-start gap-4">
          <CtaLink
            href={href}
            className="rounded-full bg-primary px-7 py-3 font-heading text-base font-semibold text-on-primary"
          >
            {copy.cta}
          </CtaLink>

          {/* Адрес виден текстом рядом с кнопкой: на десктопе mailto нередко открывает
              пустоту, если почтовик не настроен, и тогда это единственный рабочий путь.
              Это единственный адрес на странице — из футера убран (DECISIONS.md, 2026-09-13). */}
          <p className="text-sm text-muted">
            {copy.orCopy}{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-text underline underline-offset-4 transition-colors duration-200 hover:text-primary"
            >
              {EMAIL}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
