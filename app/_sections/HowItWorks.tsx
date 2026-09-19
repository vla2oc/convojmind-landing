import { Reveal } from "../_motion/Reveal";
import { HowItWorksLive, type Step } from "./HowItWorksLive";

// S3. Текст — docs/COPY.md, раздел S3.
// Каждый шаг: поднятая строка (Montserrat) и тихая — тот же ритм, что в S2/S4/S5.
// Раньше шаг был одним длинным предложением (владелец 2026-09-19: «понятнее»).
const steps: Step[] = [
  {
    lead: "Wpisujesz trasę.",
    quiet: "Skąd, dokąd, o której wyjazd, ile zostało na tachografie.",
  },
  {
    lead: "Dostajesz grafik.",
    quiet: "Gdzie przerwy, na których parkingach, o której.",
  },
  {
    lead: "Nie spina się? Widzisz to teraz, nie w trasie.",
    quiet: "Od razu masz najbliższy parking, na którym jest miejsce.",
  },
];

export function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="scroll-mt-16">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        {/* Заголовок совпадает со ссылкой в шапке и в hero: «Zobacz, jak to działa» ведёт сюда. */}
        <Reveal as="h2" className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Jak to działa
        </Reveal>

        {/* Шаги и схема живут в одном клиентском компоненте: номера загораются в такт схеме. */}
        <HowItWorksLive steps={steps} />
      </div>
    </section>
  );
}
