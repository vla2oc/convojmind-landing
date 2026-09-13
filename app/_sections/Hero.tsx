import type { CSSProperties } from "react";
import { CtaLink } from "../_motion/CtaLink";

// S1. Текст — docs/COPY.md, раздел S1.
//
// Вход — на CSS (.hero-word / .hero-in в globals.css), не на motion: h1 это
// LCP-элемент, начальное opacity:0 от motion ждало бы гидрации. Слова
// появляются по одному, шаг 45 мс — как будто с ним говорят, а не печатают.
//
// Заголовок несёт все три вещи сразу: обязанность, наличие места, время приезда.
// Каждая по отдельности есть у конкурентов, вместе — ни у кого. COPY.md, разбор в S1.
const lines: { words: string[]; accentFrom?: number; tail?: string }[] = [
  { words: ["Gdzie", "kierowca", "musi", "stanąć."] },
  { words: ["Czy", "będzie", "tam", "miejsce."] },
  { words: ["O", "której", "naprawdę", "dojedzie."] },
  // Акцентом --primary — «przed wyjazdem», одно словосочетание, не вся строка;
  // точка после него остаётся цветом текста.
  { words: ["Wiesz", "to", "przed", "wyjazdem"], accentFrom: 2, tail: "." },
];

function delay(seconds: number): CSSProperties {
  return { "--d": `${seconds}s` } as CSSProperties;
}

export function Hero() {
  let i = 0;
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <h1 className="max-w-3xl font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-text sm:text-5xl sm:leading-[1.15]">
        {lines.map((line, li) => (
          <span key={line.words[0]} className={li === 3 ? "mt-5 block sm:mt-7" : "block"}>
            {line.words.map((word, wi) => {
              const accent = line.accentFrom !== undefined && wi >= line.accentFrom;
              const last = wi === line.words.length - 1;
              const style = { "--i": i++ } as CSSProperties;
              return (
                <span key={wi}>
                  <span className="hero-word" style={style}>
                    {accent ? <span className="text-primary">{word}</span> : word}
                    {last ? line.tail : null}
                  </span>
                  {last ? null : " "}
                </span>
              );
            })}
          </span>
        ))}
      </h1>

      <p
        className="hero-in mt-7 max-w-xl text-lg leading-relaxed text-text sm:text-xl"
        style={delay(0.5)}
      >
        Dla przewoźników i dyspozytorów, którzy jeżdżą po Europie i umawiają się z klientem na
        okno dostawy.
      </p>

      <div className="hero-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" style={delay(0.62)}>
        <CtaLink
          href="#kontakt"
          className="rounded-full bg-primary px-7 py-3 font-heading text-base font-semibold text-on-primary"
        >
          Umów rozmowę
        </CtaLink>
        <a
          href="#jak-to-dziala"
          className="group font-heading text-base font-semibold text-text underline underline-offset-4 transition-colors duration-200 hover:text-primary"
        >
          Zobacz, jak to działa{" "}
          <span className="inline-block transition-transform duration-300 ease-spring group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      {/* Честная строка статуса. Это не слабость, а фильтр. */}
      <p className="hero-in mt-8 max-w-lg text-sm leading-relaxed text-muted" style={delay(0.74)}>
        Jesteśmy na etapie pilotażu. Szukamy 3–5 flot, które sprawdzą to na swoich trasach.
      </p>
    </section>
  );
}
