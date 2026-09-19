import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "../globals.css";
import { MotionProvider } from "../_motion/MotionProvider";
import type { Lang } from "../_copy/types";

// Общая оболочка двух корневых layout — app/(pl)/layout.tsx и app/(en)/layout.tsx.
// Два корневых layout нужны ради разного <html lang>: только корневой layout
// рендерит <html>, а он у каждой группы свой (Next 16, layout.md «Root Layout»,
// route-groups.md). Всё общее — шрифт, стили, провайдеры — живёт здесь, чтобы не
// расходиться (DECISIONS.md, 2026-09-20).

// subsets: latin-ext обязателен — без него польские ą ć ę ł ń ó ś ź ż
// подставятся системным шрифтом. Пункт 6 критерия готовности.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  display: "swap",
});

export function Document({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {/* Клиентский провайдер motion; children остаются серверными. */}
        <MotionProvider>{children}</MotionProvider>
        {/* Vercel Web Analytics — решение владельца 2026-09-20. Без cookies: посетитель —
            хеш запроса, живёт 24 ч (vercel.com/docs/analytics/privacy-policy), поэтому
            баннер согласия не нужен (NOT_NOW.md). Данные идут только с деплоя на Vercel;
            локально скрипт не отдаётся — это ожидаемо. */}
        <Analytics />
      </body>
    </html>
  );
}
