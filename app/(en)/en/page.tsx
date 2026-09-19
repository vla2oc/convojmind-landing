import { en } from "../../_copy/en";
import { Landing } from "../../_sections/Landing";

// См. app/(pl)/page.tsx.
export const dynamic = "error";

// Английская страница — `/en`. Текст — docs/COPY.md «EN», словарь app/_copy/en.ts.
export default function HomeEn() {
  return <Landing copy={en} />;
}
