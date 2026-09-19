import type { Metadata } from "next";
import { Document } from "../_shell/Document";

// Корневой layout польской версии: `/`. Общее — в _shell/Document.tsx.
// Полные метаданные (description, canonical, OG, hreflang) — шаг 6, упирается в домен.
export const metadata: Metadata = {
  title: "ConvoyMind",
};

export default function PlLayout({ children }: LayoutProps<"/">) {
  return <Document lang="pl">{children}</Document>;
}
