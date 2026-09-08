// S5. Текст — docs/COPY.md, раздел S5.
// Три блока идут вертикально, не в ряд: ряд из трёх цифр обесценивает каждую (CLAUDE.md §5.4).
const blockClass =
  "border-t border-surface-2 pt-10 first:border-0 first:pt-0 sm:pt-12 sm:first:pt-0";

export function Outcome() {
  return (
    <section className="border-t border-surface-2">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-4xl">
          Co z tego masz
        </h2>

        <div className="mt-12 flex max-w-2xl flex-col gap-10 sm:gap-12">
          {/* Блок 1. Единственное число на всей странице. */}
          <div className={blockClass}>
            <p className="leading-relaxed text-text">
              <span className="block">Dziś podajesz klientowi okno z dwugodzinnym zapasem.</span>
              <span className="block">Nie dlatego, że chcesz. Dlatego, że dokładniej nie umiesz.</span>
            </p>

            {/* Слово Cel стоит в самой фразе и тем же кеглем, что число, — не в сноске (§5.4). */}
            <p className="mt-6 font-heading text-xl font-semibold leading-snug text-text sm:text-2xl">
              Cel: podajesz okno <span className="text-primary">±30 minut</span> zamiast dwóch
              godzin zapasu.
            </p>

            <p className="mt-6 leading-relaxed text-text">
              <span className="block">
                To cel, nie wynik. Nie mamy jeszcze ani jednej przejechanej trasy.
              </span>
              <span className="block">Dlatego: daj nam pięć swoich i sam powiedz, czy się zgadza.</span>
            </p>
          </div>

          {/* Блок 2. Масштаб словами, без арифметики (DECISIONS.md, 2026-09-08). */}
          <div className={blockClass}>
            <p className="leading-relaxed text-text">
              <span className="block">Godzina na szukanie parkingu to godzina wyjęta z dnia.</span>
              <span className="block">Normy nie da się dokupić ani nadrobić.</span>
            </p>
            <p className="mt-6 leading-relaxed text-text">
              <span className="block">Jedno auto, jeden dzień — drobiazg.</span>
              <span className="block">Cała flota, cały miesiąc — to już twój wynik.</span>
            </p>
          </div>

          {/* Блок 3. Без числа, и стоит третьим: секция закрывается облегчением, а не цифрой. */}
          <div className={blockClass}>
            <p className="leading-relaxed text-text">
              Konflikt z normą widzisz przed wyjazdem, nie po fakcie.
            </p>
            <p className="mt-6 leading-relaxed text-text">
              <span className="block">
                Wtedy jeszcze można przesunąć wyjazd, zmienić parking, uprzedzić klienta.
              </span>
              <span className="block">Po fakcie zostaje liczenie strat.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
