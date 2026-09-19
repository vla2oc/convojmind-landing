import { Reveal, RevealItem } from "../_motion/Reveal";
import type { Copy } from "../_copy/types";

// S5. Текст — docs/COPY.md, раздел S5 (и «EN»).
// Три блока идут вертикально, не в ряд: ряд из трёх цифр обесценивает каждую (CLAUDE.md §5.4).
// В каждом блоке одна поднятая строка (Montserrat) и одна тихая (muted).
// Первый блок — единственное число на странице; слово «Cel/Goal» стоит в самой
// фразе тем же кеглем (§5.4). Третий — без числа: секция закрывается облегчением.
export function Outcome({ copy }: { copy: Copy["outcome"] }) {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal as="h2" className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          {copy.h2}
        </Reveal>

        <Reveal as="ul" stagger={0.12} className="mt-12 flex max-w-2xl flex-col">
          {copy.blocks.map((b, i) => (
            <RevealItem
              as="li"
              key={b.quiet}
              className={
                i === 0 ? "pb-10 sm:pb-12" : "border-t border-surface-2 py-10 last:pb-0 sm:py-12"
              }
            >
              <p className="font-heading text-xl font-semibold leading-snug text-text sm:text-2xl">
                {typeof b.lead === "string" ? (
                  b.lead
                ) : (
                  <>
                    {b.lead.before}
                    <span className="text-primary">{b.lead.accent}</span>
                    {b.lead.after}
                  </>
                )}
              </p>
              <p className="mt-4 max-w-xl leading-relaxed text-muted">{b.quiet}</p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
