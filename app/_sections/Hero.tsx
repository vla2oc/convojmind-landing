import type { CSSProperties } from "react";
import { CtaLink } from "../_motion/CtaLink";

// S1. Текст — docs/COPY.md, раздел S1.
//
// Вход — на CSS (.hero-word / .hero-in в globals.css), не на motion: h1 это
// LCP-элемент, начальное opacity:0 от motion ждало бы гидрации. Слова
// появляются по одному, шаг 30 мс — как будто с ним говорят, а не печатают.
//
// h1 говорит прямо, что это: маршрут, тахограф и стоянка в одном графике.
// Прежние три вопроса заставляли догадываться (владелец, 2026-09-19).
// Акцент --primary — одно слово, `jednym`: «в одном» и есть отличие (S4).
// Слова сгруппированы в «связки»: однобуквенные `i`, `w` в польской типографике
// не остаются в конце строки. Неразрывного пробела мало — между двумя
// inline-block есть точка переноса и без пробела (CSS Text: атомарные инлайны
// ведут себя как иероглифы), поэтому связка — свой inline-block с nowrap.
// На 360 px без этого `parking` уезжал один на вторую строку.
const lines: { chunks: string[][]; accent?: [chunk: number, word: number] }[] = [
  { chunks: [["Trasa,"], ["tachograf"], ["i", "parking"]] },
  { chunks: [["w", "jednym"], ["grafiku."]], accent: [0, 1] },
];

function delay(seconds: number): CSSProperties {
  return { "--d": `${seconds}s` } as CSSProperties;
}

export function Hero() {
  let i = 0;
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:pb-28 sm:pt-24">
      <h1 className="max-w-3xl font-heading text-[32px] font-bold leading-[1.15] tracking-tight text-text sm:text-6xl sm:leading-[1.1]">
        {lines.map((line) => (
          <span key={line.chunks[0][0]} className="block">
            {line.chunks.map((chunk, ci) => (
              <span key={ci}>
                <span className="inline-block whitespace-nowrap">
                  {chunk.map((word, wi) => {
                    const accent = line.accent?.[0] === ci && line.accent?.[1] === wi;
                    const style = { "--i": i++ } as CSSProperties;
                    return (
                      <span key={wi}>
                        {wi === 0 ? null : " "}
                        <span className="hero-word" style={style}>
                          {accent ? <span className="text-primary">{word}</span> : word}
                        </span>
                      </span>
                    );
                  })}
                </span>
                {ci === line.chunks.length - 1 ? null : " "}
              </span>
            ))}
          </span>
        ))}
      </h1>

      {/* Слов в h1 семь, последнее стартует на 0,18 с — подзаголовок и кнопки идут сразу следом. */}
      <p
        className="hero-in mt-7 max-w-xl text-lg leading-relaxed text-text sm:text-xl"
        style={delay(0.25)}
      >
        <span className="block">Kierowca wie, gdzie stanie. Ty wiesz, o której dojedzie.</span>
        <span className="block">Wiecie to przed wyjazdem.</span>
      </p>

      <div className="hero-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-4" style={delay(0.37)}>
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

      {/* Кому и на какой стадии — одной тихой строкой. Стадия не слабость, а фильтр. */}
      <p className="hero-in mt-8 max-w-lg text-sm leading-relaxed text-muted" style={delay(0.49)}>
        Dla przewoźników i dyspozytorów. Etap pilotażu: szukamy 3–5 flot, które sprawdzą to na
        swoich trasach.
      </p>
    </section>
  );
}
