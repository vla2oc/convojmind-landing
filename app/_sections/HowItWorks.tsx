// S3. Текст — docs/COPY.md, раздел S3.
const steps = [
  "Wpisujesz trasę: skąd, dokąd, o której wyjazd, ile zostało na tachografie.",
  "Dostajesz grafik: gdzie wypadają obowiązkowe przerwy, na których parkingach, o której.",
  "Jeśli grafik się nie spina, widzisz to teraz — razem z najbliższą alternatywą, na której jest miejsce.",
];

// Никаких выдуманных часов и названий стоянок: «przerwa 45 min» — норма из 561/2006,
// а не наше число. Точки маршрута одни и те же в обоих вариантах схемы.
const points = [
  { label: "Wyjazd", stop: false },
  { label: "przerwa 45 min", stop: true },
  { label: "odpoczynek dobowy", stop: true },
  { label: "Okno dostawy", stop: false },
];

// Десктоп: горизонтальная схема. Масштабируется по ширине, min-width не нужен.
function RouteDiagramWide() {
  const x = [24, 250, 480, 696];
  return (
    <svg
      viewBox="0 0 720 150"
      role="img"
      aria-label="Trasa z dwoma obowiązkowymi postojami: przerwa 45 minut, odpoczynek dobowy, na końcu okno dostawy."
      className="hidden w-full sm:block"
    >
      <line x1="24" y1="80" x2="696" y2="80" stroke="var(--surface-2)" strokeWidth="6" strokeLinecap="round" />
      {points.map((p, i) =>
        p.stop ? (
          <g key={p.label}>
            <circle cx={x[i]} cy="80" r="11" fill="var(--primary)" />
            <line x1={x[i]} y1="62" x2={x[i]} y2="42" stroke="var(--surface-2)" strokeWidth="2" />
            <text
              x={x[i]}
              y="32"
              textAnchor="middle"
              fill="var(--text)"
              fontSize="19"
              fontFamily="var(--font-display)"
            >
              {p.label}
            </text>
          </g>
        ) : (
          <g key={p.label}>
            <circle cx={x[i]} cy="80" r="7" fill="var(--text-muted)" />
            <text
              x={x[i]}
              y="116"
              textAnchor={i === 0 ? "start" : "end"}
              fill="var(--text-muted)"
              fontSize="18"
              fontFamily="var(--font-display)"
            >
              {p.label}
            </text>
          </g>
        )
      )}
    </svg>
  );
}

// Мобильный: та же схема вертикально. Скролл вбок ради картинки — плохой размен.
function RouteDiagramNarrow() {
  return (
    <ol className="flex flex-col gap-6 border-l-2 border-surface-2 pl-7 sm:hidden">
      {points.map((p) => (
        <li key={p.label} className="relative leading-none">
          <span
            className={`absolute top-0.5 block rounded-full ${
              p.stop ? "-left-[39px] h-5 w-5 bg-primary" : "-left-[35px] h-3 w-3 bg-muted"
            }`}
            aria-hidden="true"
          />
          <span className={p.stop ? "text-text" : "text-muted"}>{p.label}</span>
        </li>
      ))}
    </ol>
  );
}

export function HowItWorks() {
  return (
    <section id="jak-to-dziala" className="scroll-mt-16 border-t border-surface-2">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Trzy kroki
        </h2>

        <ol className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step} className="flex flex-col gap-3">
              <span className="font-heading text-3xl font-bold text-primary">{i + 1}</span>
              <p className="leading-relaxed text-text">{step}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 rounded-2xl border border-surface-2 bg-surface p-6 sm:mt-16 sm:p-8">
          <RouteDiagramWide />
          <RouteDiagramNarrow />
        </div>
      </div>
    </section>
  );
}
