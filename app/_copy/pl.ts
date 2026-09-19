import type { Copy } from "./types";

// Польский текст — docs/COPY.md, разделы S0–S7 и «Футер», дословно.
export const pl: Copy = {
  lang: "pl",
  ids: { how: "jak-to-dziala", pilot: "pilotaz", contact: "kontakt" },
  header: {
    how: "Jak to działa",
    pilot: "Pilotaż",
    cta: "Umów rozmowę",
    languageAria: "Język strony",
  },
  hero: {
    // Связки `i parking`, `w jednym`: однобуквенные i, w не остаются в конце строки.
    lines: [
      { chunks: [["Trasa,"], ["tachograf"], ["i", "parking"]] },
      { chunks: [["w", "jednym"], ["grafiku."]], accent: [0, 1] },
    ],
    sub: ["Kierowca wie, gdzie stanie. Ty wiesz, o której dojedzie.", "Wiecie to przed wyjazdem."],
    cta: "Umów rozmowę",
    how: "Zobacz, jak to działa",
    status:
      "Dla przewoźników i dyspozytorów. Etap pilotażu: szukamy 3–5 flot, które sprawdzą to na swoich trasach.",
  },
  problem: {
    h2: "Który z tych wieczorów znasz?",
    cards: [
      {
        hook: "22:40. Dzwoni kierowca: na MOP-ie nie ma miejsc.",
        scene: "Jedzie dalej. Szuka. W końcu staje.",
        cost: "Tej godziny jazdy nie odzyskasz.",
      },
      {
        hook: "Klient pyta, o której będzie towar.",
        scene: "Podajesz dwie godziny zapasu. Dokładniej nie wiesz.",
        cost: "Ten zapas kosztuje. Klient go pamięta.",
      },
      {
        hook: "Tachograf nie negocjuje.",
        scene: "Naruszenie widzisz dopiero po fakcie.",
        cost: "Mandat to rachunek za to, czego nie widziałeś.",
      },
    ],
  },
  how: {
    h2: "Jak to działa",
    steps: [
      { lead: "Wpisujesz trasę.", quiet: "Skąd, dokąd, o której wyjazd, ile zostało na tachografie." },
      { lead: "Dostajesz grafik.", quiet: "Gdzie przerwy, na których parkingach, o której." },
      {
        lead: "Nie spina się? Widzisz to teraz, nie w trasie.",
        quiet: "Od razu masz najbliższy parking, na którym jest miejsce.",
      },
    ],
    diagram: {
      aria: "Trasa z dwoma obowiązkowymi postojami: przerwa 45 minut i odpoczynek dobowy. Na drugim parkingu brak miejsc, obok alternatywa z miejscem. Na końcu okno dostawy.",
      departure: "Wyjazd",
      break45: "przerwa 45 min",
      dailyRest: "odpoczynek dobowy",
      noSpace: "brak miejsc",
      alternative: "alternatywa",
      window: "Okno dostawy",
    },
  },
  gap: {
    h2: "Czego brakuje w tym, co już masz",
    headLeft: "Co musisz wiedzieć",
    headRight: "Kto to dziś potrafi",
    rows: [
      { before: "Kiedy kierowca ", accent: "musi", after: " stanąć", who: ["planery tras", "telematyka"] },
      { before: "Czy jest ", accent: "gdzie", after: " stanąć", who: ["aplikacje parkingowe"] },
      { before: "O której ", accent: "naprawdę", after: " dojedzie", who: ["platformy ETA"] },
    ],
    close: { before: "Każde z osobna ma dziś każdy. Razem — ", accent: "nikt", after: "." },
    quiet: "Grafik bez parkingu jest legalny tylko na papierze.",
  },
  outcome: {
    h2: "Co z tego masz",
    blocks: [
      {
        // Единственное число на странице; слово Cel — в той же фразе тем же кеглем (§5.4).
        lead: { before: "Cel: podajesz okno ", accent: "±30 minut", after: " zamiast dwóch godzin zapasu." },
        quiet: "To cel, nie wynik. Sprawdzisz go na pięciu swoich trasach.",
      },
      {
        lead: "Kierowca wie, gdzie stanie, zanim wyjedzie.",
        quiet: "Rozmowę „gdzie mam stanąć” masz przed wyjazdem, nie o 22:40.",
      },
      {
        lead: "Konflikt z normą widzisz przed wyjazdem, nie po fakcie.",
        quiet: "Jeszcze da się przesunąć wyjazd, zmienić parking, uprzedzić klienta.",
      },
    ],
  },
  pilot: {
    h2: "Co się stanie, jeśli napiszesz",
    steps: [
      "Rozmowa. Trzydzieści minut, bez prezentacji.",
      "Bierzemy pięć tras, które już przejechałeś.",
      "Pokazujemy grafik i okno przyjazdu dla każdej.",
      "Porównujesz z tym, co było naprawdę.",
    ],
    plate: {
      lead: "Bez instalacji. Bez integracji. Bez opłat.",
      quiet: "Jeśli się nie zgadza — mówisz nam to i koniec.",
    },
  },
  contact: {
    h2: "Umów rozmowę",
    ask: "Napisz jedno zdanie: ile masz aut i gdzie jeżdżą.",
    reply: "Odpowiadamy w ciągu jednego dnia roboczego.",
    cta: "Napisz do nas",
    orCopy: "albo skopiuj adres:",
    subject: "Pilotaż ConvoyMind",
  },
  footer: { line: "Projekt na etapie pilotażu. Powstaje w inkubatorze Mobiscale." },
};
