// S2. Текст — docs/COPY.md, раздел S2.
// Цену бездействия называем один раз и спокойно: без красного, без нагнетания (CLAUDE.md §5.6).
const cards = [
  {
    scene: ["22:40. Dzwoni kierowca: na MOP-ie nie ma miejsc.", "Jedzie dalej. Szuka. W końcu staje."],
    cost: "Tej godziny nie odzyskasz. Czasu jazdy nie da się dokupić.",
  },
  {
    scene: [
      "Klient pyta, o której będzie towar.",
      "Podajesz okno z dwugodzinnym zapasem — bo dokładniej nie umiesz.",
    ],
    cost: "Ten zapas nie jest za darmo. Klient go pamięta.",
  },
  {
    scene: [
      "Naruszenie normy widzisz wtedy, kiedy jest już naruszeniem.",
      "Tachograf nie negocjuje.",
    ],
    cost: "Mandat to tylko rachunek za to, czego nie było widać wcześniej.",
  },
];

export function Problem() {
  return (
    <section className="border-t border-surface-2 bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Który z tych wieczorów znasz?
        </h2>

        <ul className="mt-12 grid gap-5 sm:grid-cols-3">
          {cards.map((card) => (
            <li
              key={card.cost}
              className="flex flex-col gap-5 rounded-2xl border border-surface-2 bg-bg p-6"
            >
              <p className="leading-relaxed text-text">
                {card.scene.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className="mt-auto border-t border-surface-2 pt-5 leading-relaxed text-text">
                {card.cost}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
