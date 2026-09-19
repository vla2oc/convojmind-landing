import { Reveal, RevealItem } from "../_motion/Reveal";
import type { Copy } from "../_copy/types";

// S2. Текст — docs/COPY.md, раздел S2 (и «EN»).
// Три карточки: узнавание → цена. Без «отраслевых проблем» — его вечер по минутам (CLAUDE.md §5.3).
//
// Карточка — тёмная, с тонкой зелёной рамкой (--secondary); зелёный на странице
// только линия (владелец, 2026-09-19). Наведение и нажатие: рамка загорается акцентом
// (`hover:` и `data-pressed:` — флаг ставит RevealItem, не `:active`: на касании он у <li>
// не срабатывает), подъём на 3 px и сжатие на 2 % с пружиной — RevealItem hover.
const cardClass =
  "flex flex-col gap-5 rounded-2xl border border-secondary transition-[border-color] duration-300 ease-spring hover:border-primary data-pressed:border-primary p-6";

export function Problem({ copy }: { copy: Copy["problem"] }) {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal as="h2" className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          {copy.h2}
        </Reveal>

        <Reveal as="ul" stagger={0.1} className="mt-12 grid gap-5 sm:grid-cols-3">
          {copy.cards.map((card) => (
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
