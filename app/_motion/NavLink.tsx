"use client";

import { m } from "motion/react";
import { snappy } from "./springs";

// Якорная ссылка в шапке: при наведении текст в акцент, снизу выезжает
// подчёркивание 1 px слева направо. То же на фокусе с клавиатуры.
export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <m.a
      href={href}
      className="relative py-1 text-muted transition-colors duration-200 hover:text-primary focus-visible:text-primary"
      initial="rest"
      whileHover="hover"
      whileFocus="hover"
    >
      {children}
      <m.span
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-px origin-left bg-primary"
        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
        transition={snappy}
      />
    </m.a>
  );
}
