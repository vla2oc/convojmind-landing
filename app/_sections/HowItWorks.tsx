import { Reveal } from "../_motion/Reveal";
import { HowItWorksLive } from "./HowItWorksLive";

// S3. Текст — docs/COPY.md, раздел S3.
const steps = [
  "Wpisujesz trasę: skąd, dokąd, o której wyjazd, ile zostało na tachografie.",
  "Dostajesz grafik: gdzie wypadają obowiązkowe przerwy, na których parkingach, o której.",
  "Jeśli grafik się nie spina, widzisz to teraz — razem z najbliższą alternatywą, na której jest miejsce.",
];

export function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="scroll-mt-16 border-t border-surface-2">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <Reveal as="h2" className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Trzy kroki
        </Reveal>

        {/* Шаги и схема живут в одном клиентском компоненте: номера загораются в такт схеме. */}
        <HowItWorksLive steps={steps} />
      </div>
    </section>
  );
}
