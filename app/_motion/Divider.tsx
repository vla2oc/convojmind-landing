"use client";

import { useRef } from "react";
import { m } from "motion/react";
import { divider } from "./springs";
import { useReveal } from "./useReveal";

// Разделитель между секциями вместо чередования фонов (владелец, 2026-09-19):
// линия 150 px по центру, при появлении растёт из середины с перелётом.
// То же правило, что у Reveal: на сервере и без JS линия просто есть;
// прячется только ниже сгиба и только на клиенте; при reduced-motion не двигается.
// Декоративный — aria-hidden: границы секций для скринридера задают их h2.
export function Divider() {
  const ref = useRef<HTMLDivElement>(null);
  const state = useReveal(ref);

  return (
    <m.div
      ref={ref}
      aria-hidden
      className="mx-auto h-px w-[150px] origin-center bg-secondary"
      initial={false}
      animate={state}
      variants={divider}
    />
  );
}
