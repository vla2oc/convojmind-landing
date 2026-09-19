import { Reveal } from "../_motion/Reveal";
import type { Copy } from "../_copy/types";
import { HowItWorksLive } from "./HowItWorksLive";

// S3. Текст — docs/COPY.md, раздел S3 (и «EN»). Каждый шаг: поднятая строка
// (Montserrat) и тихая — тот же ритм, что в S2/S4/S5.
export function HowItWorks({ id, copy }: { id: string; copy: Copy["how"] }) {
  return (
    <section id={id} className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        {/* Заголовок совпадает со ссылкой в шапке и в hero: она ведёт сюда. */}
        <Reveal as="h2" className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          {copy.h2}
        </Reveal>

        {/* Шаги и схема живут в одном клиентском компоненте: номера загораются в такт схеме. */}
        <HowItWorksLive steps={copy.steps} labels={copy.diagram} />
      </div>
    </section>
  );
}
