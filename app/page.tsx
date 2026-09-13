import { Header } from "./_sections/Header";
import { Hero } from "./_sections/Hero";
import { Problem } from "./_sections/Problem";
import { HowItWorks } from "./_sections/HowItWorks";
import { Gap } from "./_sections/Gap";
import { Outcome } from "./_sections/Outcome";
import { Pilot } from "./_sections/Pilot";
import { Team } from "./_sections/Team";
import { Contact } from "./_sections/Contact";
import { Footer } from "./_sections/Footer";

// 'error' роняет сборку, если на странице появится cookies(), headers() или
// searchParams. 'force-static' этого не делает — он молча возвращает из них
// пустые значения (docs 01-app/02-guides/caching-without-cache-components.md:104).
export const dynamic = "error";

// Текст всех секций взят из docs/COPY.md дословно.
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Gap />
        <Outcome />
        <Pilot />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
