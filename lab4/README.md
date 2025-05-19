# Noroc_Eugeniu  
# Лабораторная работа №4. Работа с DOM-деревом и событиями в JavaScript

# Финансовый трекер на JavaScript

## 📌 Цель проекта

Разработка веб-приложения для управления списком транзакций с возможностью добавления, удаления, просмотра, подсчёта общей суммы и отображения детальной информации о транзакции.

## 🗂️ Структура проекта

```
/project-root
│
├── index.html            # Главная HTML-страница
├── style.css             # Стили
└── /src                  # Исходный JS-код
    ├── index.js          # Главный JS-файл (инициализация и логика)
    ├── transactions.js   # Работа с массивом транзакций
    ├── ui.js             # Работа с DOM
    └── utils.js          # Вспомогательные функции
```

## 🔧 Функциональность

### ✅ Шаг 1. Настройка проекта

- HTML-файл подключает `index.js` с type="module".
- Весь JavaScript-код организован в отдельной папке `/src`.

### ✅ Шаг 2. Структура транзакции

Каждая транзакция — это объект с полями:

```js
{
  id: string,           // Уникальный ID
  date: string,         // Дата и время добавления
  amount: number,       // Сумма
  category: string,     // Категория (выбирается из select)
  description: string   // Полное описание
}
```

### ✅ Шаг 3. Отображение транзакций

- Все транзакции отображаются в HTML-таблице.
- Столбцы: Дата и Время, Категория, Краткое описание (4 слова), Кнопка удаления.
- Цвет строки: зелёный — положительная сумма, красный — отрицательная.

![image](https://github.com/user-attachments/assets/5c1390c6-084c-4aaa-a603-04a4f0bbf445)



### ✅ Шаг 4. Добавление транзакции

- Пользователь вводит данные через форму.
- После отправки:
  - объект добавляется в массив;
  - добавляется строка в таблицу;
  - обновляется общая сумма;
  - форма очищается.

![image](https://github.com/user-attachments/assets/feea3334-0879-4ed6-901b-b9328479f20f)


### ✅ Шаг 5. Удаление транзакции

- Каждая строка содержит кнопку "Удалить".
- При клике удаляется:
  - строка из DOM;
  - объект из массива;
  - пересчитывается сумма.

![image](https://github.com/user-attachments/assets/d39979d6-c135-49f1-a70b-5aedbfc96203)


### ✅ Шаг 6. Подсчёт общей суммы

- Сумма всех транзакций отображается ниже таблицы.
- Автоматически обновляется при добавлении или удалении.

![image](https://github.com/user-attachments/assets/9cb933bd-edaf-40bf-9ea1-1dba4265b856)


### ✅ Шаг 7. Полное описание транзакции

- При клике на строку транзакции:
  - выводится полное описание ниже таблицы.

![image](https://github.com/user-attachments/assets/a6b063d1-458a-4e35-8c15-4392012faadf)


### ✅ Шаг 8. Валидация формы

- Проверяется:
  - что сумма является числом;
  - что описание не пустое;
- В случае ошибок — предупреждение.

![image](https://github.com/user-attachments/assets/3498eb5b-2ea1-4fd2-a917-d97d2dc0851c)
![image](https://github.com/user-attachments/assets/b8c6032f-88f7-415f-b9e7-65d6faadb6d7)

## 📄 Пример использования

1. Введите сумму, описание и выберите категорию.
2. Нажмите кнопку "Добавить".
3. Транзакция появится в таблице.
4. Клик по строке — просмотр полного описания.
5. Кнопка "Удалить" — удаление из таблицы и массива.

## 📘 Используемые технологии

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- JSDoc для документирования кода

## 📚 Документирование

Каждая функция снабжена JSDoc-комментариями, например:

```js
/**
 * Добавляет новую транзакцию в таблицу и список.
 * @param {Object} transaction - Объект транзакции.
 */
function renderTransaction(transaction) { ... }
```

## 📌 Контрольные вопросы

### 1. Каким образом можно получить доступ к элементу на веб-странице с помощью JavaScript?

Для доступа к элементам DOM можно использовать следующие методы:

```js
// По ID
const elementById = document.getElementById('myId');

// По классу (возвращает HTMLCollection)
const elementsByClass = document.getElementsByClassName('myClass');

// По тегу
const elementsByTag = document.getElementsByTagName('div');

// Универсальный способ с CSS-селекторами
const firstMatch = document.querySelector('.myClass');
const allMatches = document.querySelectorAll('.myClass');
```
### 2. Что такое делегирование событий и как оно используется для эффективного управления событиями на элементах DOM?
Делегирование событий — это приём, при котором обработчик события добавляется не на отдельные дочерние элементы, а на их общего родителя, и уже через всплытие события определяется источник (event.target).
Пример:
```js
document.getElementById('transaction-table').addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.dataset.id;
    // логика удаления по ID
  }
});

```
### 3. Как можно изменить содержимое элемента DOM с помощью JavaScript после его выборки?

```js
const element = document.getElementById('message');

// Изменение HTML внутри элемента
element.innerHTML = '<strong>Обновлено!</strong>';

// Изменение только текста (без HTML)
element.textContent = 'Простой текст';

// Добавление к текущему содержимому
element.innerHTML += '<br>Новая строка';

```

### 4. Как можно добавить новый элемент в DOM дерево с помощью JavaScript?
```js
// Создаём новый элемент
const newRow = document.createElement('tr');

// Задаём содержимое
newRow.innerHTML = `
  <td>01.01.2025</td>
  <td>Еда</td>
  <td>Покупка продуктов</td>
  <td><button>Удалить</button></td>
`;

// Находим родительский элемент (например, tbody)
const tableBody = document.querySelector('#transaction-table tbody');

// Добавляем строку в таблицу
tableBody.appendChild(newRow);

```
