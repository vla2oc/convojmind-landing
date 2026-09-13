"use client";

import { m } from "motion/react";
import { snappy } from "./springs";

// Главная кнопка страницы. Реакция на курсор очень небольшая — 2 %, чтобы
// читалось «интерфейс видит, где ты», а не «кнопка прыгает». На клавиатуре
// то же самое через whileFocus. До гидрации это обычная ссылка.
export function CtaLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <m.a
      href={href}
      className={className}
      whileHover={{ scale: 1.02 }}
      whileFocus={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={snappy}
    >
      {children}
    </m.a>
  );
}
