import { CtaLink } from "../_motion/CtaLink";
import { NavLink } from "../_motion/NavLink";
import { PressLink } from "../_motion/PressLink";
import type { Copy } from "../_copy/types";
import { Logo } from "./Logo";

// Две страницы сайта; порядок пары в переключателе фиксированный, подсветка переезжает.
const LANGS: { code: string; lang: Copy["lang"]; href: string }[] = [
  { code: "PL", lang: "pl", href: "/" },
  { code: "EN", lang: "en", href: "/en" },
];

// S0. Текст — docs/COPY.md, раздел S0 (и «EN»).
export function Header({ lang, ids, copy }: { lang: Copy["lang"]; ids: Copy["ids"]; copy: Copy["header"] }) {
  return (
    <header className="sticky top-0 z-10 border-b border-surface-2 bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="inline-flex">
          <Logo compact />
        </a>

        {/* На мобильном скрыто: остаются знак, язык и кнопка — LANDING_PLAN §5 S0 */}
        <nav className="hidden gap-7 text-sm sm:flex">
          <NavLink href={`#${ids.how}`}>{copy.how}</NavLink>
          <NavLink href={`#${ids.pilot}`}>{copy.pilot}</NavLink>
        </nav>

        <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          {/* Переключатель языка (владелец, 2026-09-20): привычная пара PL | EN. Текущий —
              белый и не ссылка, другой — приглушённый, при наведении акцент, при нажатии
              пружина (PressLink). Переход между корневыми layout — полная загрузка, это
              нормально для смены языка (Next: route-groups, Caveats). */}
          <nav aria-label={copy.languageAria} className="flex items-center gap-2 font-heading text-sm font-semibold">
            {LANGS.map((l, i) => (
              <span key={l.lang} className="flex items-center gap-2">
                {i > 0 ? <span aria-hidden="true" className="h-3.5 w-px bg-muted/40" /> : null}
                {l.lang === lang ? (
                  <span aria-current="true" className="text-text">
                    {l.code}
                  </span>
                ) : (
                  <PressLink
                    href={l.href}
                    hrefLang={l.lang}
                    lang={l.lang}
                    className="text-muted transition-colors duration-200 hover:text-primary"
                  >
                    {l.code}
                  </PressLink>
                )}
              </span>
            ))}
          </nav>

          <CtaLink
            href={`#${ids.contact}`}
            className="shrink-0 rounded-full bg-primary px-5 py-2 font-heading text-sm font-semibold text-on-primary"
          >
            {copy.cta}
          </CtaLink>
        </div>
      </div>
    </header>
  );
}
