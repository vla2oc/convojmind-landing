// Футер. Текст — docs/COPY.md, раздел «Футер».
// Реквизитов юрлица здесь нет и выдуманных не будет: юрлица пока нет, а NIP
// проверяется в CEIDG за десять секунд (NOT_NOW.md, 2026-09-13). Вместо них —
// имя инкубатора и прямо названная стадия проекта.
// Почты здесь нет: она стоит в S8 сразу над футером (DECISIONS.md, 2026-09-13).
export function Footer() {
  return (
    <footer className="border-t border-surface-2">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-12">
        <p className="font-heading text-lg font-bold tracking-tight text-text">
          Convoy<span className="text-primary">Mind</span>
        </p>
        {/* Тихая строка: кто ищет — прочитает, остальным не мешает. Без логотипа
            и без ссылки — ссылка уводит с лендинга (решение владельца 2026-09-13). */}
        <p className="text-sm leading-relaxed text-muted">
          Projekt na etapie pilotażu. Powstaje w inkubatorze Mobiscale.
        </p>
      </div>
    </footer>
  );
}
