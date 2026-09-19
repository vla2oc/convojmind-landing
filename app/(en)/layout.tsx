import type { Metadata } from "next";
import { Document } from "../_shell/Document";

// Корневой layout английской версии: `/en`. Общее — в _shell/Document.tsx.
export const metadata: Metadata = {
  title: "ConvoyMind",
};

// Групповые layout не добавляют путь: для генератора типов оба корневых layout — маршрут "/".
export default function EnLayout({ children }: LayoutProps<"/">) {
  return <Document lang="en">{children}</Document>;
}
