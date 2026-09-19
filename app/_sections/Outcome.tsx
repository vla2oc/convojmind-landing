import { Reveal, RevealItem } from "../_motion/Reveal";

// S5. Текст — docs/COPY.md, раздел S5.
// Три блока идут вертикально, не в ряд: ряд из трёх цифр обесценивает каждую (CLAUDE.md §5.4).
// В каждом блоке одна поднятая строка (Montserrat) и одна тихая (muted).
const blocks = [
  {
    // Единственное число на всей странице. Слово Cel стоит в самой фразе тем же кеглем (§5.4).
    lead: (
      <>
        Cel: podajesz okno <span className="text-primary">±30 minut</span> zamiast dwóch godzin
        zapasu.
      </>
    ),
    quiet: "To cel, nie wynik. Sprawdzisz go na pięciu swoich trasach.",
  },
  {
    // Диспетчер и водитель знают одно и то же до выезда (владелец, 2026-09-19).
    // Разговор не исчезает — он переезжает до выезда; 22:40 отсылает к S2.
    lead: "Kierowca wie, gdzie stanie, zanim wyjedzie.",
    quiet: "Rozmowę „gdzie mam stanąć” masz przed wyjazdem, nie o 22:40.",
  },
  {
    // Без числа, и стоит третьим: секция закрывается облегчением, а не цифрой.
    lead: "Konflikt z normą widzisz przed wyjazdem, nie po fakcie.",
    quiet: "Jeszcze da się przesunąć wyjazd, zmienić parking, uprzedzić klienta.",
  },
];

export function Outcome() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal as="h2" className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Co z tego masz
        </Reveal>

        <Reveal as="ul" stagger={0.12} className="mt-12 flex max-w-2xl flex-col">
          {blocks.map((b, i) => (
            <RevealItem
              as="li"
              key={b.quiet}
              className={
                i === 0 ? "pb-10 sm:pb-12" : "border-t border-surface-2 py-10 last:pb-0 sm:py-12"
              }
            >
              <p className="font-heading text-xl font-semibold leading-snug text-text sm:text-2xl">
                {b.lead}
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">{b.quiet}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
