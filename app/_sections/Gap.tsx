// S4. Текст — docs/COPY.md, раздел S4.
// Имён конкурентов нет, только категории (DECISIONS.md, 2026-09-08).
const rows = [
  {
    before: "Kiedy kierowca ",
    accent: "musi",
    after: " stanąć",
    who: "planery tras, telematyka",
  },
  {
    before: "Czy jest ",
    accent: "gdzie",
    after: " stanąć o tej godzinie",
    who: "aplikacje parkingowe",
  },
  {
    before: "O której ",
    accent: "naprawdę",
    after: " tam będzie",
    who: "platformy ETA",
  },
];

const HEAD_LEFT = "Co musisz wiedzieć";
const HEAD_RIGHT = "Kto to dziś potrafi";

// Не <table>: на 360 px таблица либо ползёт вбок, либо сжимает колонки в столбик букв.
// Тот же смысл на grid — три карточки на мобильном, две колонки от sm (LANDING_PLAN §7).
export function Gap() {
  return (
    <section className="border-t border-surface-2 bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Czego brakuje w tym, co już masz
        </h2>

        <div className="mt-12">
          {/* Шапка колонок только от sm: на мобильном её роль играет подпись внутри карточки */}
          <div className="hidden gap-8 border-b border-surface-2 pb-3 text-sm text-muted sm:grid sm:grid-cols-[1fr_auto]">
            <span>{HEAD_LEFT}</span>
            <span className="text-right">{HEAD_RIGHT}</span>
          </div>

          <ul className="flex flex-col gap-4 sm:gap-0">
            {rows.map((row) => (
              <li
                key={row.accent}
                className="rounded-2xl border border-surface-2 bg-bg p-5 sm:grid sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8 sm:rounded-none sm:border-0 sm:border-b sm:border-surface-2 sm:bg-transparent sm:p-0 sm:py-6"
              >
                <p className="leading-relaxed text-text">
                  {row.before}
                  <strong className="font-semibold">{row.accent}</strong>
                  {row.after}
                </p>
                <p className="mt-3 text-sm text-muted sm:mt-0 sm:text-right">
                  <span className="mb-1 block sm:hidden">{HEAD_RIGHT}:</span>
                  {row.who}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 max-w-2xl leading-relaxed text-text">
          <span className="block">Każde z osobna ma dziś każdy. Razem — nikt.</span>
          <span className="mt-4 block">
            A grafik legalny na papierze, z odpoczynkiem w szczerym polu, i tak jest nie do
            wykonania.
          </span>
        </p>
      </div>
    </section>
  );
}
