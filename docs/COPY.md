# COPY — весь текст лендинга ConvoyMind

**Статус:** утверждённый текст, свёрстан. Третий круг 2026-09-19 («упростить всю страницу, читатель должен понять, что мы делаем») — подтверждён владельцем в переписке до вёрстки.
**Дата:** 2026-09-08; правки 2026-09-13 и 2026-09-19.
**Перед публикацией текст обязан вычитать носитель польского.** Я не носитель. Это не формальность: `DECISIONS.md`, 2026-09-08.

**Обращение: `Ty`** (решение владельца, 2026-09-08). §5.3 требует описать его вечер так, чтобы он узнал себя, — для этого нужна близкая дистанция.

**Смысл страницы одной фразой (владелец, 2026-09-19):** маршрут + тахограф + стоянка в одном графике → диспетчер и водитель знают одно и то же до выезда → вилка для клиента меньше, время точнее. Это сказано в первых двух строках hero, а не выводится из вопросов.

Формат: польский текст, под ним `RU:` — дословный смысл по-русски. **Жирное** — поднятая строка Montserrat, остальное — тихая строка (`--text-muted` на тёмном, `--secondary-muted` на зелёном).

История прежних вариантов — в git (`git log -p docs/COPY.md`); в файле держим только живой текст и то, что припарковано.

---

## S0. Шапка

```
ConvoyMind        Jak to działa    Pilotaż    [ Umów rozmowę ]
```

RU: логотип-слово, две якорные ссылки, кнопка. На мобильном — только логотип и кнопка.

---

## S1. Hero

```
**Trasa, tachograf i parking
w jednym grafiku.**

Kierowca wie, gdzie stanie. Ty wiesz, o której dojedzie.
Wiecie to przed wyjazdem.

[ Umów rozmowę ]        Zobacz, jak to działa →

Dla przewoźników i dyspozytorów. Etap pilotażu: szukamy 3–5 flot, które sprawdzą to na swoich trasach.
```

RU: «Маршрут, тахограф и стоянка в одном графике. / Водитель знает, где встанет. Ты знаешь, во сколько он доедет. Вы знаете это до выезда. / Для перевозчиков и диспетчеров. Этап пилота: ищем 3–5 флотов, которые проверят это на своих рейсах.»

Акцентом `--primary` — одно слово **`jednym`**: «в одном» и есть отличие, которое разворачивает S4.

**2026-09-19.** Прежний h1 из трёх вопросов (`Gdzie kierowca musi stanąć. / Czy będzie tam miejsce. / O której naprawdę dojedzie. / Wiesz to przed wyjazdem.`) заставлял догадываться, что это за продукт. Теперь h1 говорит прямо, что это, подзаголовок — что получают оба, диспетчер и водитель. Строка про «jeżdżą po Europie i umawiają się z klientem na okno dostawy» свёрнута в `Dla przewoźników i dyspozytorów` и объединена со строкой статуса. Тест §5.8 №1 h1 по-прежнему проходит: планировщик маршрутов не скажет «parking», парковочное приложение не скажет «tachograf».

Однобуквенные `i`, `w` не остаются в конце строки (польская типографика): в вёрстке связки `i parking`, `w jednym` — неразрывные.

---

## S2. Проблема

```
Który z tych wieczorów znasz?
```

RU: «Какой из этих вечеров тебе знаком?» — вопрос, а не «Проблемы отрасли».

```
**22:40. Dzwoni kierowca: na MOP-ie nie ma miejsc.**
Jedzie dalej. Szuka. W końcu staje.
—
Tej godziny jazdy nie odzyskasz.

**Klient pyta, o której będzie towar.**
Podajesz dwie godziny zapasu. Dokładniej nie wiesz.
—
Ten zapas kosztuje. Klient go pamięta.

**Tachograf nie negocjuje.**
Naruszenie widzisz dopiero po fakcie.
—
Mandat to rachunek za to, czego nie widziałeś.
```

RU: «22:40. Звонит водитель: на MOP мест нет. Едет дальше. Ищет. В конце концов встаёт. — Этот час вождения ты не вернёшь.» / «Клиент спрашивает, во сколько будет товар. Называешь два часа запаса. Точнее не знаешь. — Этот запас стоит денег. Клиент его помнит.» / «Тахограф не торгуется. Нарушение видишь только постфактум. — Штраф — счёт за то, чего ты не видел.»

Три уровня в карточке: хук (Montserrat), сцена (тихая), цена (после разделителя). Цена бездействия названа здесь один раз и спокойно, дальше не нагнетаем (§5.6).

**2026-09-19, срезы.** Карточка 1: ушло `Czasu jazdy nie da się dokupić` — «час не вернёшь» говорит то же. Карточка 2: `okno z dwugodzinnym zapasem — bo dokładniej nie umiesz` → `dwie godziny zapasu. Dokładniej nie wiesz`; `Ten zapas nie jest za darmo` → `Ten zapas kosztuje`. Карточка 3: `Naruszenie normy widzisz wtedy, kiedy jest już naruszeniem` → `Naruszenie widzisz dopiero po fakcie` (перекликается с S5 «nie po fakcie»); `czego nie było widać wcześniej` → `czego nie widziałeś`.

---

## S3. Как это работает

```
Jak to działa
```

Заголовок совпадает со ссылкой в шапке и в hero («Zobacz, jak to działa»), которые ведут сюда. Было `Trzy kroki` — человек нажимал «как это работает» и попадал на «три шага».

```
1  **Wpisujesz trasę.**
   Skąd, dokąd, o której wyjazd, ile zostało na tachografie.

2  **Dostajesz grafik.**
   Gdzie przerwy, na których parkingach, o której.

3  **Nie spina się? Widzisz to teraz, nie w trasie.**
   Od razu masz najbliższy parking, na którym jest miejsce.
```

RU: «Вводишь рейс. / Откуда, куда, во сколько выезд, сколько осталось на тахографе.» — «Получаешь график. / Где перерывы, на каких стоянках, во сколько.» — «Не сходится? Видишь это сейчас, а не в рейсе. / Сразу есть ближайшая стоянка, где есть место.»

**2026-09-19.** Каждый шаг был одним длинным предложением одного кегля. Теперь поднятая строка + тихая, как в S2/S4/S5 (владелец: «акцентный шрифт, понятнее»). Номера шагов по-прежнему загораются в такт схеме.

### Схема

Играет один раз при появлении, четыре такта: линия → `przerwa 45 min` → `odpoczynek dobowy` → у второй стоянки `brak miejsc` (`--danger`, единственное место, где он допустим) и рядом зелёная точка `alternatywa` → `Okno dostawy`. Подписи:

```
Wyjazd · przerwa 45 min · odpoczynek dobowy · brak miejsc · alternatywa · Okno dostawy
```

Времён суток нет — это были бы выдуманные данные (§2). `45 min` — норма из 561/2006. При `prefers-reduced-motion` схема стоит в конечном состоянии. Плашка схемы остаётся нейтральной (`--surface`), не зелёной: красный `brak miejsc` на зелёном даёт 3,5:1 и это классическая пара для дальтоников.

---

## S4. Чем это отличается от того, что уже есть

```
Czego brakuje w tym, co już masz
```

| Co musisz wiedzieć | Kto to dziś potrafi |
|---|---|
| Kiedy kierowca **musi** stanąć | planery tras, telematyka |
| Czy jest **gdzie** stanąć | aplikacje parkingowe |
| O której **naprawdę** dojedzie | platformy ETA |

```
**Każde z osobna ma dziś każdy. Razem — nikt.**
Grafik bez parkingu jest legalny tylko na papierze.
```

RU: «Что нужно знать / Кто это умеет сегодня»: «Когда водитель обязан встать» — планировщики маршрутов, телематика. «Есть ли куда встать» — парковочные приложения. «Во сколько он реально доедет» — ETA-платформы. Вывод: «По отдельности это есть у всех. Вместе — ни у кого. График без стоянки легален только на бумаге.»

**2026-09-19.** Строка 2: ушло `o tej godzinie`. Строка 3: `tam będzie` → `dojedzie`, как в hero. Вывод: две строки про «отдых в чистом поле» (`Grafik może być legalny na papierze. / Z odpoczynkiem w szczerym polu i tak go nie wykonasz.`) свёрнуты в одну.

Имён конкурентов нет — только категории (`DECISIONS.md`, 2026-09-08).

---

## S5. Что ты с этого получаешь

```
Co z tego masz
```

Три блока вертикально, не в ряд; одно число на всю страницу (§5.4).

```
**Cel: podajesz okno ±30 minut zamiast dwóch godzin zapasu.**
To cel, nie wynik. Sprawdzisz go na pięciu swoich trasach.

**Kierowca wie, gdzie stanie, zanim wyjedzie.**
Rozmowę „gdzie mam stanąć” masz przed wyjazdem, nie o 22:40.

**Konflikt z normą widzisz przed wyjazdem, nie po fakcie.**
Jeszcze da się przesunąć wyjazd, zmienić parking, uprzedzić klienta.
```

RU: «Цель: ты называешь окно ±30 минут вместо двух часов запаса. / Это цель, а не результат. Проверишь её на пяти своих рейсах.» — «Водитель знает, где встанет, до того как выедет. / Разговор «где мне встать» у тебя до выезда, а не в 22:40.» — «Конфликт с нормой видишь до выезда, а не постфактум. / Ещё можно передвинуть выезд, поменять стоянку, предупредить клиента.»

**Блок 1.** Единственное число на странице. Слово `cel` внутри фразы тем же кеглем (§5.4), подлежащее — он (`podajesz`). Откуда 30 минут: константа допуска `MAX_ARRIVAL_SHIFT_SEC = 1800` в планировщике приложения — данные владельца, в этом репозитории я её не видел `[предположение]`.

**Блок 2 (2026-09-19).** Это «меньше недопонимания между диспетчером и водителем» из формулировки владельца — сценой, а не словом «недопонимание»: разговор «где мне встать» не исчезает, он переезжает до выезда. `22:40` отсылает к карточке 1 S2 — тот же вечер, но другой (§5.2 «образ»). Ушла строка масштаба `Godzina szukania to godzina wyjęta z dnia. Jedno auto — drobiazg. Cała flota, cały miesiąc — twój wynik.` — цена часа уже названа в S2, а место занял разговор диспетчер–водитель. Решение владельца.

**Блок 3.** Без числа и третьим: секция закрывается облегчением. `Wtedy jeszcze da się` → `Jeszcze da się`.

---

## S6. Пилот — что конкретно произойдёт

```
Co się stanie, jeśli napiszesz

1.  Rozmowa. Trzydzieści minut, bez prezentacji.
2.  Bierzemy pięć tras, które już przejechałeś.
3.  Pokazujemy grafik i okno przyjazdu dla każdej.
4.  Porównujesz z tym, co było naprawdę.

**Bez instalacji. Bez integracji. Bez opłat.**
Jeśli się nie zgadza — mówisz nam to i koniec.
```

RU: «Разговор. Тридцать минут, без презентации. / Берём пять рейсов, которые ты уже проехал. / Показываем график и окно прибытия для каждого. / Сравниваешь с тем, что было на самом деле. — Без установки. Без интеграции. Без оплаты. Если не сходится — говоришь нам это, и конец.»

Снимает главный страх B2B до того, как он возник (§5.7). Последняя строка заранее разрешает ему сказать «нет».

**2026-09-19.** Шаг 2: `pięć twoich prawdziwych tras — takich, które już przejechałeś` → `pięć tras, które już przejechałeś`. Шаг 4: `Mówisz, czy zgadza się z tym, co było naprawdę` → `Porównujesz z tym, co było naprawdę`. Закрывающая: `powiesz nam to i na tym koniec` → `mówisz nam to i koniec`.

---

## S7. Приём заявки

На странице не форма, а прямое письмо (решение владельца 2026-09-13): аккаунта Resend ещё нет. Форма написана, проверена и лежит в `app/_sections/ContactForm.tsx`; её текст — ниже, в «Припарковано».

```
Umów rozmowę

Napisz jedno zdanie: ile masz aut i gdzie jeżdżą.
Odpowiadamy w ciągu jednego dnia roboczego.

[ Napisz do nas ]

albo skopiuj adres: kurochka265@gmail.com
```

RU: «Напиши одно предложение: сколько у тебя машин и где они ездят. / Отвечаем в течение одного рабочего дня. / [Напиши нам] / или скопируй адрес: …»

Кнопка ведёт на `mailto:` с темой `Pilotaż ConvoyMind`. Адрес виден текстом: на десктопе `mailto` нередко открывает пустоту, и тогда это единственный рабочий путь. Адрес на странице один (из футера убран, `DECISIONS.md` 2026-09-13).

**2026-09-19.** `Napisz w jednym zdaniu: ile masz aut i na jakich trasach jeżdżą` → `Napisz jedno zdanie: ile masz aut i gdzie jeżdżą`. Секция стала S7: раздел команды снят. Вся секция — на зелёном (`--secondary`), единственная такая на странице.

---

## Футер

```
ConvoyMind

Projekt na etapie pilotażu. Powstaje w inkubatorze Mobiscale.
```

RU: «Проект на этапе пилота. Создаётся в инкубаторе Mobiscale.» Без реквизитов (юрлица нет), без адреса (он в S7), без ссылки на инкубатор (уводит с лендинга).

---

## Проверки по контракту (текст 2026-09-19, по отрендерённой странице)

- «ты/твой» и глаголы 2-го лица: 34; «мы/наш» и глаголы 1-го лица мн.: 7 (`szukamy`, `Bierzemy`, `Pokazujemy`, `nam`, `Odpowiadamy`, `do nas` ×2). Перевес ~5:1 (§5.5).
- Число на странице одно (`±30 minut`), рядом `cel` дважды. `22:40` и `45 min` — сцена и норма, не результат. `3–5 flot` — статус.
- Причастных и деепричастных оборотов ноль. Запрещённых слов (§2) ноль.
- Имён конкурентов ноль, кейсов, отзывов, счётчиков ноль.

---

## Припарковано (на странице нет, текст храним)

### Форма заявки (вернётся с ключом Resend, `ContactForm.tsx`)

```
Umów rozmowę
Odpowiadamy w ciągu jednego dnia roboczego.

E-mail *                                          [ Wyślij ]

Zostawiasz adres — piszemy tylko w sprawie pilotażu.
Twój adres zostaje u nas.
```

Состояния: `wysyłanie…` и `Dziękujemy. Odezwiemy się w ciągu jednego dnia roboczego.`
Ошибки: `Podaj poprawny adres e-mail.` и `Nie udało się wysłać. Spróbuj jeszcze raz albo napisz na kurochka265@gmail.com.`

### Раздел «Kto za tym stoi» — СНЯТ 2026-09-19

Решение владельца: «пока не надо». Компонент `Team.tsx` удалён (есть в git), текст ниже — чтобы вернуть без переписывания. Место, если вернётся: после S6, перед S7. Фото не ставим (2026-09-08).

```
Kto za tym stoi

Maksym Kurochka — badania i algorytmy
Inżynier transportu. Pisze algorytmy, które liczą,
kiedy kierowca musi stanąć i gdzie zdąży.

Mykyta Rakhmanyi — backend i architektura
Buduje backend platformy: logikę wyznaczania tras
i przetwarzanie danych.

Vladyslav Kurochka — produkt i strategia
Wcześniej doradzał firmom z przemysłu ciężkiego i budownictwa:
cykle operacyjne, utrzymanie klienta. Rozmawia z przewoźnikami
i decyduje, co trafia do produktu.
```

Ограничения, если вернётся: `EcoFlow` не упоминаем; PPC и продажи в биографию не берём (`DECISIONS.md`, 2026-09-08).

---

## Открытые вопросы по тексту

1. **Вычитка носителем.** Весь польский текст её не проходил. Особо проверить: `Nie spina się?` как разговорное «не сходится», `w trasie`, `Wiecie to przed wyjazdem` (2-е лицо мн. к диспетчеру и водителю), `Rozmowę „gdzie mam stanąć” masz przed wyjazdem`.
2. **`MAX_ARRIVAL_SHIFT_SEC = 1800`** — подтвердить чтением планировщика в репозитории приложения.
