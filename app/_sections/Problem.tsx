import { Reveal, RevealItem } from "../_motion/Reveal";

// S2. Текст — docs/COPY.md, раздел S2.
// Цену бездействия называем один раз и спокойно: без красного, без нагнетания (CLAUDE.md §5.6).
//
// Три уровня в карточке, чтобы текст не слипался (COPY.md, «Ритм карточек»):
// хук — Montserrat, сцена — тише, цена — после разделителя, цветом текста.
const cards = [
  {
    hook: "22:40. Dzwoni kierowca: na MOP-ie nie ma miejsc.",
    scene: "Jedzie dalej. Szuka. W końcu staje.",
    cost: "Tej godziny jazdy nie odzyskasz.",
  },
  {
    hook: "Klient pyta, o której będzie towar.",
    scene: "Podajesz dwie godziny zapasu. Dokładniej nie wiesz.",
    cost: "Ten zapas kosztuje. Klient go pamięta.",
  },
  {
    hook: "Tachograf nie negocjuje.",
    scene: "Naruszenie widzisz dopiero po fakcie.",
    cost: "Mandat to rachunek za to, czego nie widziałeś.",
  },
];

// Карточка — тёмная, с тонкой зелёной рамкой (--secondary); зелёный на странице
// только линия (владелец, 2026-09-19). Наведение и нажатие: рамка загорается акцентом
// (`hover:` и `data-pressed:` — флаг ставит RevealItem, не `:active`: на касании он у <li>
// не срабатывает), подъём на 3 px и сжатие на 2 % с пружиной — RevealItem hover.
const cardClass =
  "flex flex-col gap-5 rounded-2xl border border-secondary transition-[border-color] duration-300 ease-spring hover:border-primary data-pressed:border-primary p-6";

export function Problem() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal as="h2" className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Który z tych wieczorów znasz?
        </Reveal>

        <Reveal as="ul" stagger={0.1} className="mt-12 grid gap-5 sm:grid-cols-3">
          {cards.map((card) => (
            <RevealItem as="li" hover key={card.hook} className={cardClass}>
              <div className="flex flex-col gap-3">
                <p className="font-heading text-lg font-semibold leading-snug text-text">
                  {card.hook}
                </p>
                <p className="leading-relaxed text-muted">{card.scene}</p>
              </div>
              <p className="mt-auto border-t border-surface-2 pt-5 leading-relaxed text-text">
                {card.cost}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
