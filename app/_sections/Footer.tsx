// Футер. Текст — docs/COPY.md, раздел «Футер».
// Делает одну работу: даёт второй способ связаться тому, кто формы не любит.
//
// ЗДЕСЬ ЖЕ МЕСТО ПОД РЕКВИЗИТЫ. Название юрлица, адрес и ссылку на политику
// приватности не выдумываем — их пока нет (NOT_NOW.md). Польский B2B реквизиты
// проверяет, так что это долг, а не украшение: строки встают сюда одной правкой.
const EMAIL = "kurochka265@gmail.com";

export function Footer() {
  return (
    <footer className="border-t border-surface-2">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-12">
        <p className="font-heading text-lg font-bold tracking-tight text-text">
          Convoy<span className="text-primary">Mind</span>
        </p>
        <p className="leading-relaxed text-text">
          Nie chcesz formularza? Napisz wprost:{" "}
          <a
            href={`mailto:${EMAIL}`}
            data-umami-event="mail_footer"
            className="underline underline-offset-4 hover:text-primary"
          >
            {EMAIL}
          </a>
        </p>
      </div>
    </footer>
  );
}
