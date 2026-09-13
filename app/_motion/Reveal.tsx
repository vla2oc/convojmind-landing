"use client";

import { useRef, type ReactNode } from "react";
import { m } from "motion/react";
import { reveal, staggerParent, snappy } from "./springs";
import { useReveal } from "./useReveal";

// Ограниченный набор тегов: только те, которые реально нужны секциям.
const tags = {
  div: m.div,
  ul: m.ul,
  ol: m.ol,
  li: m.li,
  p: m.p,
  h2: m.h2,
} as const;

type Tag = keyof typeof tags;

type RevealProps = {
  as?: Tag;
  className?: string;
  id?: string;
  /** Шаг лесенки между RevealItem внутри, в секундах. Без него блок всплывает целиком. */
  stagger?: number;
  children: ReactNode;
};

// Блок, который всплывает при появлении на экране. Дети — серверные, приходят
// как children. Если задан `stagger`, сам блок не двигается, а раздаёт задержки
// вложенным RevealItem.
export function Reveal({ as = "div", className, id, stagger, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const state = useReveal(ref);
  const Comp = tags[as] as typeof m.div;

  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement>}
      id={id}
      className={className}
      initial={false}
      animate={state}
      variants={stagger ? staggerParent(stagger) : reveal}
    >
      {children}
    </Comp>
  );
}

type RevealItemProps = {
  as?: Tag;
  className?: string;
  /** Карточка реагирует на курсор: чуть приподнимается. Рамку и подложку даёт CSS-класс. */
  hover?: boolean;
  children: ReactNode;
};

// Элемент лесенки внутри Reveal со stagger. Состояние наследует от родителя.
export function RevealItem({ as = "div", className, hover, children }: RevealItemProps) {
  const Comp = tags[as] as typeof m.div;
  return (
    <Comp
      className={className}
      variants={reveal}
      whileHover={hover ? { y: -3, transition: snappy } : undefined}
    >
      {children}
    </Comp>
  );
}
