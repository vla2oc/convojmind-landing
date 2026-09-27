"use client";

import { useRef } from "react";
import { m, type Variants } from "motion/react";
import { spring } from "../_motion/springs";
import { useReveal } from "../_motion/useReveal";
import type { Copy } from "../_copy/types";

type Labels = Copy["how"]["diagram"];

// Живая часть S3: шаги + схема, одно состояние на всё, чтобы номера шагов
// загорались в такт схеме. Решение владельца 2026-09-13 отменило «ничего
// анимированного» из LANDING_PLAN §5 S3 (DECISIONS.md).
//
// Никаких выдуманных времён суток: «przerwa 45 min» — норма из 561/2006,
// не наше число. Схема играет четыре такта один раз при появлении:
//   0.0  линия прорисовывается, «Wyjazd»                     — шаг 1
//   0.45 «przerwa 45 min»                                     — шаг 2
//   0.8  «odpoczynek dobowy»
//   1.3  у второй стоянки «brak miejsc» (--danger)            — шаг 3
//   1.6  рядом зелёная «alternatywa»
//   1.9  «Okno dostawy»
// На сервере рендерится конечное состояние; прячется и играется только на
// клиенте, и только если схема при загрузке была ниже сгиба (useReveal).
// При prefers-reduced-motion стоит в конечном состоянии без движения.

const T = { line: 0, stop1: 0.45, stop2: 0.8, conflict: 1.3, alt: 1.6, end: 1.9 };
const STEP_AT = [T.line, T.stop1, T.conflict];

const instant = { duration: 0 };

// Точка на схеме выпрыгивает пружиной из центра.
const pop = (delay: number): Variants => ({
  hidden: { scale: 0, opacity: 0, transition: instant },
  visible: { scale: 1, opacity: 1, transition: { ...spring, delay } },
});

// Подпись всплывает тише, без пружины.
const fade = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 6, transition: instant },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, delay } },
});

const draw: Variants = {
  hidden: { pathLength: 0, transition: instant },
  visible: { pathLength: 1, transition: { duration: 0.9, ease: "easeInOut", delay: T.line } },
};

// Вторая стоянка гаснет в момент конфликта: место занято.
const dim: Variants = {
  hidden: { fill: "var(--primary)", scale: 0, opacity: 0, transition: instant },
  visible: {
    fill: ["var(--primary)", "var(--primary)", "var(--text-muted)"],
    scale: 1,
    opacity: 1,
    transition: {
      scale: { ...spring, delay: T.stop2 },
      opacity: { ...spring, delay: T.stop2 },
      fill: { duration: 0.3, delay: T.conflict, times: [0, 0.01, 1] },
    },
  },
};

// Красный контур конфликта: расширяется и остаётся тонким кольцом.
const ring: Variants = {
  hidden: { scale: 0.6, opacity: 0, transition: instant },
  visible: {
    scale: [0.6, 1.25, 1],
    opacity: [0, 1, 1],
    transition: { duration: 0.6, delay: T.conflict, ease: "easeOut" },
  },
};

const stepLight = (delay: number): Variants => ({
  hidden: { color: "var(--text-muted)", transition: instant },
  visible: { color: "var(--primary)", transition: { duration: 0.3, delay } },
});

const points = {
  start: 24,
  stop1: 236,
  stop2: 456,
  alt: 580,
  end: 696,
  y: 84,
};

const label = { fontSize: 18, fontFamily: "var(--font-display)" } as const;

// Схема (только от sm): горизонтальная линия маршрута. Масштабируется по ширине, min-width не нужен.
function DiagramWide({ t }: { t: Labels }) {
  const { start, stop1, stop2, alt, end, y } = points;
  return (
    <svg
      viewBox="0 0 720 160"
      role="img"
      aria-label={t.aria}
      className="w-full"
    >
      {/* Серая подложка маршрута — видна всегда, поверх неё прорисовывается акцент */}
      <line x1={start} y1={y} x2={end} y2={y} stroke="var(--surface-2)" strokeWidth="6" strokeLinecap="round" />
      <m.line
        x1={start}
        y1={y}
        x2={end}
        y2={y}
        stroke="var(--primary-line)"
        strokeWidth="6"
        strokeLinecap="round"
        variants={draw}
      />

      {/* Wyjazd */}
      <m.circle cx={start} cy={y} r="7" fill="var(--text-muted)" variants={pop(T.line)} />
      <m.text x={start} y={y + 38} textAnchor="start" fill="var(--text-muted)" {...label} variants={fade(T.line + 0.15)}>
        {t.departure}
      </m.text>

      {/* przerwa 45 min */}
      <m.line x1={stop1} y1={y - 18} x2={stop1} y2={y - 38} stroke="var(--surface-2)" strokeWidth="2" variants={fade(T.stop1)} />
      <m.circle cx={stop1} cy={y} r="11" fill="var(--primary)" variants={pop(T.stop1)} />
      <m.text x={stop1} y={y - 48} textAnchor="middle" fill="var(--text)" {...label} variants={fade(T.stop1 + 0.15)}>
        {t.break45}
      </m.text>

      {/* odpoczynek dobowy → brak miejsc */}
      <m.line x1={stop2} y1={y - 18} x2={stop2} y2={y - 38} stroke="var(--surface-2)" strokeWidth="2" variants={fade(T.stop2)} />
      <m.circle cx={stop2} cy={y} r="11" variants={dim} />
      <m.circle cx={stop2} cy={y} r="17" fill="none" stroke="var(--danger)" strokeWidth="2" variants={ring} />
      <m.text x={stop2} y={y - 48} textAnchor="middle" fill="var(--text)" {...label} variants={fade(T.stop2 + 0.15)}>
        {t.dailyRest}
      </m.text>
      <m.text x={stop2} y={y + 38} textAnchor="middle" fill="var(--danger)" fontSize="16" fontFamily={label.fontFamily} variants={fade(T.conflict + 0.1)}>
        {t.noSpace}
      </m.text>

      {/* alternatywa */}
      <m.circle cx={alt} cy={y} r="11" fill="var(--primary)" variants={pop(T.alt)} />
      <m.text x={alt} y={y + 38} textAnchor="middle" fill="var(--primary)" {...label} variants={fade(T.alt + 0.15)}>
        {t.alternative}
      </m.text>

      {/* Okno dostawy */}
      <m.circle cx={end} cy={y} r="7" fill="var(--text-muted)" variants={pop(T.end)} />
      <m.text x={end} y={y - 24} textAnchor="end" fill="var(--text-muted)" {...label} variants={fade(T.end + 0.15)}>
        {t.window}
      </m.text>
    </svg>
  );
}

export type Step = { lead: string; quiet: string };

// Подписи схемы приходят словарём страницы: компонент один на оба языка.
export function HowItWorksLive({ steps, labels }: { steps: Step[]; labels: Labels }) {
  const ref = useRef<HTMLDivElement>(null);
  const state = useReveal(ref);

  return (
    <m.div ref={ref} initial={false} animate={state}>
      <ol className="mt-12 grid gap-8 sm:grid-cols-3">
        {steps.map((step, i) => (
          <li key={step.lead} className="flex flex-col gap-3">
            <m.span className="font-heading text-3xl font-bold" variants={stepLight(STEP_AT[i])}>
              {i + 1}
            </m.span>
            <p className="font-heading text-lg font-semibold leading-snug text-text">{step.lead}</p>
            <p className="leading-relaxed text-muted">{step.quiet}</p>
          </li>
        ))}
      </ol>

      {/* Схема — только от sm. На телефоне её нет: решение владельца 2026-09-27 (DECISIONS.md). */}
      <div className="mt-16 hidden rounded-2xl border border-surface-2 bg-surface p-8 sm:block">
        <DiagramWide t={labels} />
      </div>
    </m.div>
  );
}
