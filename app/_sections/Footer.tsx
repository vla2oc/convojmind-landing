import type { Copy } from "../_copy/types";
import { Logo } from "./Logo";

// Футер. Текст — docs/COPY.md, раздел «Футер» (и «EN»).
// Реквизитов юрлица здесь нет и выдуманных не будет: юрлица пока нет, а NIP
// проверяется в CEIDG за десять секунд (NOT_NOW.md, 2026-09-13). Вместо них —
// имя инкубатора и прямо названная стадия проекта.
// Почты здесь нет: она стоит в S7 сразу над футером (DECISIONS.md, 2026-09-13).
export function Footer({ copy }: { copy: Copy["footer"] }) {
  return (
    <footer>
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-12">
        <p>
          <Logo />
        </p>
        {/* Тихая строка: кто ищет — прочитает, остальным не мешает. Без ссылки —
            ссылка уводит с лендинга (решение владельца 2026-09-13). */}
        <p className="text-sm leading-relaxed text-muted">{copy.line}</p>
      </div>
    </footer>
  );
}
