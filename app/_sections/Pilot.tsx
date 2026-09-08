// S6. Текст — docs/COPY.md, раздел S6.
// Снимает главный страх B2B до того, как он возник (CLAUDE.md §5.7):
// не «дорого», а «меня втянут во внедрение».
const steps = [
  "Rozmowa. Trzydzieści minut, bez prezentacji.",
  "Bierzemy pięć twoich prawdziwych tras — takich, które już przejechałeś.",
  "Pokazujemy grafik i okno przyjazdu dla każdej.",
  "Mówisz, czy zgadza się z tym, co było naprawdę.",
];

export function Pilot() {
  return (
    <section id="pilotaz" className="scroll-mt-16 border-t border-surface-2 bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Co się stanie, jeśli napiszesz
        </h2>

        <ol className="mt-12 flex max-w-2xl flex-col gap-6">
          {steps.map((step, i) => (
            <li key={step} className="flex gap-5">
              {/* Фиксированная ширина: у Montserrat цифры разной ширины, без неё текст
                  строк разъезжается по горизонтали. aria-hidden не ставим — preflight
                  Tailwind убирает маркеры <ol>, и номер остаётся единственным для скринридера. */}
              <span className="w-5 shrink-0 font-heading text-lg font-semibold text-primary">
                {i + 1}.
              </span>
              <p className="leading-relaxed text-text">{step}</p>
            </li>
          ))}
        </ol>

        {/* Последняя строка важнее остальных: она заранее разрешает ему сказать «нет». */}
        <div className="mt-12 max-w-2xl rounded-2xl border border-surface-2 bg-bg p-6">
          <p className="font-heading text-lg font-semibold leading-snug text-text">
            Bez instalacji. Bez integracji. Bez opłat.
          </p>
          <p className="mt-3 leading-relaxed text-text">
            Jeśli się nie zgadza — powiesz nam to i na tym koniec.
          </p>
        </div>
      </div>
    </section>
  );
}
