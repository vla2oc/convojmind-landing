import type { Copy } from "./types";

// English — docs/COPY.md, раздел «EN». Адаптация, не подстрочник: MOP → rest area,
// термины 561/2006 по-английски, водитель — they. Черновик до вычитки носителем.
export const en: Copy = {
  lang: "en",
  ids: { how: "how-it-works", pilot: "pilot", contact: "contact" },
  header: {
    how: "How it works",
    pilot: "Pilot",
    cta: "Book a call",
    languageAria: "Page language",
  },
  hero: {
    lines: [
      { chunks: [["Route,"], ["tachograph"], ["and", "parking"]] },
      { chunks: [["in", "one"], ["schedule."]], accent: [0, 1] },
    ],
    sub: [
      "Your driver knows where they'll park. You know when they'll arrive.",
      "Both of you know it before the truck leaves.",
    ],
    cta: "Book a call",
    how: "See how it works",
    status:
      "For carriers and dispatchers. Pilot stage: we're looking for 3–5 fleets to test it on their own routes.",
  },
  problem: {
    h2: "Which of these evenings sounds familiar?",
    cards: [
      {
        hook: "22:40. The driver calls: the rest area is full.",
        scene: "They drive on. Keep looking. Finally stop somewhere.",
        cost: "That hour of driving is gone for good.",
      },
      {
        hook: "The customer asks when the goods will arrive.",
        scene: "You give a two-hour window. You can't be more precise.",
        cost: "That buffer costs. The customer remembers it.",
      },
      {
        hook: "The tachograph doesn't negotiate.",
        scene: "You only see the infringement after the fact.",
        cost: "The fine is the bill for what you didn't see.",
      },
    ],
  },
  how: {
    h2: "How it works",
    steps: [
      { lead: "You enter the route.", quiet: "From where, to where, departure time, what's left on the tachograph." },
      { lead: "You get a schedule.", quiet: "Where the breaks are, at which parking areas, at what time." },
      {
        lead: "Doesn't add up? You see it now, not on the road.",
        quiet: "You immediately get the nearest parking area with space.",
      },
    ],
    diagram: {
      aria: "Route with two mandatory stops: a 45-minute break and a daily rest. The second parking area is full; an alternative with space is next to it. A delivery window at the end.",
      departure: "Departure",
      break45: "45-min break",
      dailyRest: "daily rest",
      noSpace: "no space",
      alternative: "alternative",
      window: "Delivery window",
    },
  },
  gap: {
    h2: "What's missing in what you already have",
    headLeft: "What you need to know",
    headRight: "Who can do it today",
    rows: [
      { before: "When the driver ", accent: "must", after: " stop", who: ["route planners", "telematics"] },
      { before: "Whether there's ", accent: "somewhere", after: " to stop", who: ["parking apps"] },
      { before: "When they'll ", accent: "really", after: " arrive", who: ["ETA platforms"] },
    ],
    close: { before: "Everyone has each of these on its own. Together — ", accent: "no one", after: "." },
    quiet: "A schedule without parking is legal only on paper.",
  },
  outcome: {
    h2: "What you get",
    blocks: [
      {
        lead: { before: "Goal: you give a ", accent: "±30-minute", after: " window instead of a two-hour buffer." },
        quiet: "That's a goal, not a result. You'll check it on five of your own routes.",
      },
      {
        lead: "The driver knows where they'll park before they leave.",
        quiet: "The “where do I park” call happens before departure, not at 22:40.",
      },
      {
        lead: "You see a conflict with the rules before departure, not after the fact.",
        quiet: "There's still time to move the departure, change the parking, warn the customer.",
      },
    ],
  },
  pilot: {
    h2: "What happens if you write to us",
    steps: [
      "A call. Thirty minutes, no slides.",
      "We take five routes you've already driven.",
      "We show you the schedule and the arrival window for each.",
      "You compare it with what really happened.",
    ],
    plate: {
      lead: "No installation. No integration. No fees.",
      quiet: "If it doesn't add up — you tell us, and that's the end of it.",
    },
  },
  contact: {
    h2: "Book a call",
    ask: "Write one sentence: how many trucks you have and where they run.",
    reply: "We reply within one working day.",
    cta: "Write to us",
    orCopy: "or copy the address:",
    subject: "ConvoyMind pilot",
  },
  footer: { line: "A project at pilot stage. Built at the Mobiscale incubator." },
};
