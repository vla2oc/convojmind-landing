import { Reveal, RevealItem } from "../_motion/Reveal";
import type { Copy } from "../_copy/types";

// S6. Текст — docs/COPY.md, раздел S6 (и «EN»).
// Снимает главный страх B2B до того, как он возник (CLAUDE.md §5.7):
// не «дорого», а «меня втянут во внедрение».
export function Pilot({ id, copy }: { id: string; copy: Copy["pilot"] }) {
  return (
    <section id={id} className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal as="h2" className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          {copy.h2}
        </Reveal>

        <Reveal as="ol" stagger={0.1} className="mt-12 flex max-w-2xl flex-col gap-6">
          {copy.steps.map((step, i) => (
            <RevealItem as="li" key={step} className="flex gap-5">
              {/* Фиксированная ширина: у Montserrat цифры разной ширины, без неё текст
                  строк разъезжается по горизонтали. aria-hidden не ставим — preflight
                  Tailwind убирает маркеры <ol>, и номер остаётся единственным для скринридера. */}
              <span className="w-5 shrink-0 font-heading text-lg font-semibold text-primary">
                {i + 1}.
              </span>
              <p className="leading-relaxed text-text">{step}</p>
            </RevealItem>
          ))}
        </Reveal>

        {/* Последняя строка важнее остальных: она заранее разрешает ему сказать «нет».
            Плашка — та же карточка, что в S2. */}
        <Reveal stagger={0.1} className="mt-12 max-w-2xl">
          <RevealItem
            hover
            className="rounded-2xl border border-secondary transition-[border-color] duration-300 ease-spring hover:border-primary data-pressed:border-primary p-6"
          >
            <p className="font-heading text-lg font-semibold leading-snug text-text">{copy.plate.lead}</p>
            <p className="mt-3 leading-relaxed text-text">{copy.plate.quiet}</p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
