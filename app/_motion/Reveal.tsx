"use client";

import { useRef, useState, type ReactNode } from "react";
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
  /** Карточка отвечает на курсор и на нажатие: приподнимается на 3 px, при нажатии
   *  сжимается на 2 % и пружиной возвращается; рамку красит CSS-класс по `hover:`
   *  и `data-pressed:` одним и тем же переходом. Флаг нажатия ставит motion
   *  (onTapStart/onTap/onTapCancel), а не CSS `:active`: на касании `:active` у <li>
   *  не срабатывает, а press-жест motion идёт по pointer-событиям и работает мышью,
   *  пальцем и с клавиатуры (проверено CDP 2026-09-19, DECISIONS.md). */
  hover?: boolean;
  children: ReactNode;
};

// Элемент лесенки внутри Reveal со stagger. Состояние наследует от родителя.
// tabIndex={-1} на карточках обязателен: press-жест motion ставит tabIndex=0 всему,
// что не кнопка и не ссылка и не имеет атрибута tabindex, — семь карточек стали бы
// семью пустыми табстопами (motion-dom 13.2.0, gestures/press/index.mjs:87).
export function RevealItem({ as = "div", className, hover, children }: RevealItemProps) {
  const Comp = tags[as] as typeof m.div;
  const [pressed, setPressed] = useState(false);
  const press = hover ? () => setPressed(true) : undefined;
  const release = hover ? () => setPressed(false) : undefined;
  return (
    <Comp
      className={className}
      variants={reveal}
      whileHover={hover ? { y: -3, transition: snappy } : undefined}
      whileTap={hover ? { scale: 0.98, transition: snappy } : undefined}
      onTapStart={press}
      onTap={release}
      onTapCancel={release}
      data-pressed={pressed || undefined}
      tabIndex={hover ? -1 : undefined}
    >
      {children}
    </Comp>
  );
}
