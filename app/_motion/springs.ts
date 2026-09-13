import type { Transition, Variants } from "motion/react";

// Одна пружина на весь сайт, чтобы все движения ощущались одним организмом.
// stiffness/damping подобраны под тот же характер, что CSS-кривая --ease-spring
// в globals.css: перелёт ~3–4 %, успокаивается за ~0.6 с.
export const spring: Transition = { type: "spring", stiffness: 240, damping: 22, mass: 1 };

// Для реакции на курсор: жёстче и короче, чтобы интерфейс отвечал сразу.
export const snappy: Transition = { type: "spring", stiffness: 520, damping: 32, mass: 0.8 };

// Пара вариантов для reveal. `hidden` с duration 0 — чтобы элемент ниже сгиба
// прятался мгновенно после монтирования, а не уезжал вниз на глазах.
export const reveal: Variants = {
  hidden: { opacity: 0, y: 14, transition: { duration: 0 } },
  visible: { opacity: 1, y: 0, transition: spring },
};

// Родитель списка: сам не двигается, только раздаёт детям лесенку задержек.
export const staggerParent = (stagger = 0.08): Variants => ({
  hidden: { transition: { duration: 0 } },
  visible: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
});
