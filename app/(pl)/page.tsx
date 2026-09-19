import { pl } from "../_copy/pl";
import { Landing } from "../_sections/Landing";

// 'error' роняет сборку, если на странице появится cookies(), headers() или
// searchParams. 'force-static' этого не делает — он молча возвращает из них
// пустые значения (docs 01-app/02-guides/caching-without-cache-components.md:104).
export const dynamic = "error";

// Польская страница — `/`. Текст — docs/COPY.md, словарь app/_copy/pl.ts.
export default function HomePl() {
  return <Landing copy={pl} />;
}
