import { Reveal, RevealItem } from "../_motion/Reveal";

// S4. Текст — docs/COPY.md, раздел S4.
// Имён конкурентов нет, только категории (DECISIONS.md, 2026-09-08).
const rows = [
  {
    before: "Kiedy kierowca ",
    accent: "musi",
    after: " stanąć",
    who: ["planery tras", "telematyka"],
  },
  {
    before: "Czy jest ",
    accent: "gdzie",
    after: " stanąć o tej godzinie",
    who: ["aplikacje parkingowe"],
  },
  {
    before: "O której ",
    accent: "naprawdę",
    after: " tam będzie",
    who: ["platformy ETA"],
  },
];

const HEAD_LEFT = "Co musisz wiedzieć";
const HEAD_RIGHT = "Kto to dziś potrafi";

// Не <table>: на 360 px таблица либо ползёт вбок, либо сжимает колонки в столбик букв.
// Тот же смысл на grid — три карточки на мобильном, две колонки от sm (LANDING_PLAN §7).
// Акцентное слово — --primary, «кто умеет» — плашки: раньше всё было одним серым текстом.
const rowClass =
  "rounded-2xl border border-surface-2 bg-bg p-5 transition-[border-color,background-color] duration-300 ease-spring hover:border-primary-line hover:bg-primary-soft sm:grid sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8 sm:rounded-xl sm:px-4 sm:py-5";

export function Gap() {
  return (
    <section className="border-t border-surface-2 bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal as="h2" className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Czego brakuje w tym, co już masz
        </Reveal>

        <div className="mt-12">
          {/* Шапка колонок только от sm: на мобильном её роль играет подпись внутри карточки */}
          <div className="hidden gap-8 px-4 pb-3 text-sm text-muted sm:grid sm:grid-cols-[1fr_auto]">
            <span>{HEAD_LEFT}</span>
            <span className="text-right">{HEAD_RIGHT}</span>
          </div>

          <Reveal as="ul" stagger={0.1} className="flex flex-col gap-4 sm:gap-3">
            {rows.map((row) => (
              <RevealItem as="li" hover key={row.accent} className={rowClass}>
                <p className="font-heading text-lg font-semibold leading-snug text-text">
                  {row.before}
                  <span className="text-primary">{row.accent}</span>
                  {row.after}
                </p>
                <div className="mt-3 flex flex-wrap gap-2 sm:mt-0 sm:justify-end">
                  <span className="sr-only">{HEAD_RIGHT}:</span>
                  {row.who.map((w) => (
                    <span
                      key={w}
                      className="rounded-full border border-surface-2 px-3 py-1 text-sm text-muted"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>

        {/* Первая строка — удар, заголовочным кеглем. Вторая — тише. */}
        <Reveal className="mt-12 max-w-2xl">
          <p className="font-heading text-xl font-semibold leading-snug text-text sm:text-2xl">
            Każde z osobna ma dziś każdy. Razem — <span className="text-primary">nikt</span>.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            <span className="block">Grafik może być legalny na papierze.</span>
            <span className="block">Z odpoczynkiem w szczerym polu i tak go nie wykonasz.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
