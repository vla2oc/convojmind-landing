"use client";

import { m } from "motion/react";
import { snappy } from "./springs";

// Текстовая ссылка с откликом на нажатие: сжатие на 2 % и пружина обратно, как у
// кнопок (CtaLink), но без увеличения на наведении — у текста цвет отвечает за hover.
// До гидрации это обычная ссылка.
export function PressLink({
  href,
  className,
  hrefLang,
  lang,
  children,
}: {
  href: string;
  className?: string;
  hrefLang?: string;
  lang?: string;
  children: React.ReactNode;
}) {
  return (
    <m.a href={href} hrefLang={hrefLang} lang={lang} className={className} whileTap={{ scale: 0.98 }} transition={snappy}>
      {children}
    </m.a>
  );
}
