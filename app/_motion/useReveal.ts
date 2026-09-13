"use client";

import { useEffect, useState, type RefObject } from "react";
import { useInView, useReducedMotion } from "motion/react";

export type RevealState = "hidden" | "visible";

// Правило: на сервере всё видимо. Прячем только то, что при монтировании лежит
// ниже сгиба, и только на клиенте. Так без JS (или когда чанк не догрузился на
// плохой связи) страница остаётся полной, а контент выше сгиба не мигает при
// гидрации. При prefers-reduced-motion ничего не прячем вообще.
export function useReveal(ref: RefObject<HTMLElement | SVGElement | null>): RevealState {
  const reduced = useReducedMotion();
  const [armed, setArmed] = useState(false);
  // Порог низкий и отступ маленький намеренно: IntersectionObserver срабатывает
  // асинхронно, и при быстром скролле большой порог даёт пустой кадр.
  const inView = useInView(ref, { once: true, amount: 0.1, margin: "0px 0px -4% 0px" });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    if (el.getBoundingClientRect().top > window.innerHeight) setArmed(true);
  }, [ref, reduced]);

  return armed && !inView ? "hidden" : "visible";
}
