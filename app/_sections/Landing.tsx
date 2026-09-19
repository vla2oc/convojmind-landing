import type { Copy } from "../_copy/types";
import { Divider } from "../_motion/Divider";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Gap } from "./Gap";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { Outcome } from "./Outcome";
import { Pilot } from "./Pilot";
import { Problem } from "./Problem";

// Вся страница — одна компоновка на оба языка; текст приходит словарём.
// Секции не чередуют фон — вся страница одним --bg; границу даёт Divider,
// короткая линия по центру (владелец, 2026-09-19).
export function Landing({ copy }: { copy: Copy }) {
  return (
    <>
      <Header lang={copy.lang} ids={copy.ids} copy={copy.header} />
      <main className="flex-1">
        <Hero ids={copy.ids} copy={copy.hero} />
        <Divider />
        <Problem copy={copy.problem} />
        <Divider />
        <HowItWorks id={copy.ids.how} copy={copy.how} />
        <Divider />
        <Gap copy={copy.gap} />
        <Divider />
        <Outcome copy={copy.outcome} />
        <Divider />
        <Pilot id={copy.ids.pilot} copy={copy.pilot} />
        <Divider />
        <Contact id={copy.ids.contact} copy={copy.contact} />
      </main>
      <Divider />
      <Footer copy={copy.footer} />
    </>
  );
}
