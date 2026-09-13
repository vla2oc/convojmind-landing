import { CtaLink } from "../_motion/CtaLink";
import { NavLink } from "../_motion/NavLink";

// S0. Текст — docs/COPY.md, раздел S0.
export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-surface-2 bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <a href="#top" className="font-heading text-lg font-bold tracking-tight text-text">
          Convoy<span className="text-primary">Mind</span>
        </a>

        {/* На мобильном скрыто: остаются только логотип и кнопка — LANDING_PLAN §5 S0 */}
        <nav className="hidden gap-7 text-sm sm:flex">
          <NavLink href="#jak-to-dziala">Jak to działa</NavLink>
          <NavLink href="#pilotaz">Pilotaż</NavLink>
        </nav>

        <CtaLink
          href="#kontakt"
          className="shrink-0 rounded-full bg-primary px-5 py-2 font-heading text-sm font-semibold text-on-primary"
        >
          Umów rozmowę
        </CtaLink>
      </div>
    </header>
  );
}
