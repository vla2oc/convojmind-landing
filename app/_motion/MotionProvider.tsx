"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";

// Единственное место, где подгружаются фичи motion. `domAnimation` — анимации,
// hover/tap/focus и inView; без drag и layout (`domMax`), они нам не нужны.
// `strict` уронит сборку на импорте `motion.*` вместо `m.*` — чтобы никто
// случайно не притащил полный бандл.
//
// `reducedMotion="user"` — страховка на уровне библиотеки: при
// prefers-reduced-motion motion сама гасит transform-анимации. Основная
// защита выше — useReveal вообще не прячет контент в этом режиме.
//
// Провайдер клиентский, но children остаются серверными — паттерн из
// документации Next: 01-getting-started/05-server-and-client-components.md:307.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
