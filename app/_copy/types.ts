// Весь текст страницы — в двух словарях одной формы (pl.ts, en.ts).
// Это не i18n-инфраструктура: ни библиотек, ни загрузчиков, ни плюрализации —
// ровно то, что нужно двум статическим страницам (DECISIONS.md, 2026-09-20).
// Секции получают свой кусок словаря пропсом; сами они текста не знают.

export type Lang = "pl" | "en";

/** Фраза с одним акцентным словом: before + <accent> + after. */
export type Accented = { before: string; accent: string; after: string };

/** Строка h1: связки слов, которые нельзя разрывать; accent — [связка, слово]. */
export type HeroLine = { chunks: string[][]; accent?: [chunk: number, word: number] };

export type Copy = {
  lang: Lang;
  /** Якоря секций — в языке страницы, чтобы ссылка читалась и в адресной строке. */
  ids: { how: string; pilot: string; contact: string };
  header: {
    how: string;
    pilot: string;
    cta: string;
    /** Подпись переключателя языка для скринридера; сами коды PL/EN и адреса — в Header. */
    languageAria: string;
  };
  hero: { lines: HeroLine[]; sub: [string, string]; cta: string; how: string; status: string };
  problem: { h2: string; cards: { hook: string; scene: string; cost: string }[] };
  how: {
    h2: string;
    steps: { lead: string; quiet: string }[];
    diagram: {
      aria: string;
      departure: string;
      break45: string;
      dailyRest: string;
      noSpace: string;
      alternative: string;
      window: string;
    };
  };
  gap: {
    h2: string;
    headLeft: string;
    headRight: string;
    rows: (Accented & { who: string[] })[];
    close: Accented;
    quiet: string;
  };
  outcome: { h2: string; blocks: { lead: Accented | string; quiet: string }[] };
  pilot: { h2: string; steps: string[]; plate: { lead: string; quiet: string } };
  contact: { h2: string; ask: string; reply: string; cta: string; orCopy: string; subject: string };
  footer: { line: string };
};
