// S1. Текст — docs/COPY.md, раздел S1.
export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:pb-28 sm:pt-24">
      {/* Заголовок несёт все три вещи сразу: обязанность, наличие места, время приезда.
          Каждая по отдельности есть у конкурентов, вместе — ни у кого. COPY.md, разбор в S1. */}
      <h1 className="max-w-3xl font-heading text-[28px] font-bold leading-[1.2] tracking-tight text-text sm:text-5xl sm:leading-[1.15]">
        Gdzie kierowca musi stanąć.
        <br />
        Czy będzie tam miejsce.
        <br />
        O której naprawdę dojedzie.
        <span className="mt-5 block sm:mt-7">
          Wiesz to <span className="text-primary">przed wyjazdem</span>.
        </span>
      </h1>

      <p className="mt-7 max-w-xl text-lg leading-relaxed text-text sm:text-xl">
        Dla przewoźników i dyspozytorów, którzy jeżdżą po Europie i umawiają się z klientem na
        okno dostawy.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
        <a
          href="#kontakt"
          className="rounded-full bg-primary px-7 py-3 font-heading text-base font-semibold text-on-primary"
        >
          Umów rozmowę
        </a>
        <a
          href="#jak-to-dziala"
          className="font-heading text-base font-semibold text-text underline underline-offset-4"
        >
          Zobacz, jak to działa →
        </a>
      </div>

      {/* Честная строка статуса. Это не слабость, а фильтр. */}
      <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted">
        Jesteśmy na etapie pilotażu. Szukamy 3–5 flot, które sprawdzą to na swoich trasach.
      </p>
    </section>
  );
}
