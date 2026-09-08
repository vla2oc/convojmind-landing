import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

// subsets: latin-ext обязателен — без него польские ą ć ę ł ń ó ś ź ż
// подставятся системным шрифтом. Пункт 6 критерия готовности.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  display: "swap",
});

// Полные метаданные (description, canonical, OG) — шаг 6, после утверждения текста.
export const metadata: Metadata = {
  title: "ConvoyMind",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pl"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
