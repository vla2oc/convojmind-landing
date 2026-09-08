// S7. Текст — docs/COPY.md, раздел S7.
// Место выбрано по вопросу читателя: он только что прочитал «дай пять своих рейсов»
// и следующим спрашивает, кто мы такие. Фото не ставим (DECISIONS.md, 2026-09-08).
const people = [
  {
    name: "Maksym Kurochka",
    role: "badania i algorytmy",
    bio: [
      "Inżynier transportu. Pisze algorytmy, które liczą,",
      "kiedy kierowca musi stanąć i gdzie zdąży.",
    ],
  },
  {
    name: "Mykyta Rakhmanyi",
    role: "backend i architektura",
    bio: ["Buduje backend platformy: logikę wyznaczania tras", "i przetwarzanie danych."],
  },
  {
    name: "Vladyslav Kurochka",
    role: "produkt i strategia",
    bio: [
      "Wcześniej doradzał firmom z przemysłu ciężkiego i budownictwa:",
      "cykle operacyjne, utrzymanie klienta. Rozmawia z przewoźnikami",
      "i decyduje, co trafia do produktu.",
    ],
  },
];

export function Team() {
  return (
    <section className="border-t border-surface-2">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Kto za tym stoi
        </h2>

        <ul className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-2">
              <h3 className="font-heading text-lg font-semibold text-text">{person.name}</h3>
              <p className="text-sm text-muted">{person.role}</p>
              <p className="mt-1 leading-relaxed text-text">{person.bio.join(" ")}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
