// Обёртка над Umami. Скрипта может не быть (нет переменной окружения, блокировщик,
// офлайн) — тогда счётчик молча ничего не делает и форму не ломает.
declare global {
  interface Window {
    umami?: { track: (event: string) => void };
  }
}

export function track(event: string): void {
  if (typeof window === "undefined") return;
  window.umami?.track(event);
}
