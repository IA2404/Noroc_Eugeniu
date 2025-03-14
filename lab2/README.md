# Noroc_Eugeniu  
# Лабораторная работа №2. Основы работы с массивами, функциями и объектами в JavaScript  
  
## Цель работы  
Изучить основы работы с массивами и функциями в JavaScript, применяя их для обработки и анализа транзакций.  
  
## Условие  
Создайте консольное приложение для анализа транзакций.  
  
## Шаг 1. Создание массива транзакций  
1. Создайте файл `main.js`.  
2. Создайте массив объектов, где каждая транзакция имеет свойства:  
   - `transaction_id` - уникальный идентификатор транзакции.  
   - `transaction_date` - дата транзакции.  
   - `transaction_amount` - сумма транзакции.  
   - `transaction_type` - тип транзакции (приход или расход).  
   - `transaction_description` - описание транзакции.  
   - `merchant_name` - название магазина или сервиса.  
   - `card_type` - тип карты (кредитная или дебетовая).  
  
Пример кода (из `main.js`):  
```js
const transactions = [
  {
    transaction_id: "1",
    transaction_date: "2019-01-01",
    transaction_amount: 100.0,
    transaction_type: "debit",
    transaction_description: "Payment for groceries",
    merchant_name: "SuperMart",
    card_type: "Visa"
  },
  {
    transaction_id: "2",
    transaction_date: "2019-01-02",
    transaction_amount: 50.0,
    transaction_type: "credit",
    transaction_description: "Refund for returned item",
    merchant_name: "OnlineShop",
    card_type: "MasterCard"
  }
];
```  

## Шаг 2. Реализация функций для анализа транзакций  
Реализованы функции:  
1. `getUniqueTransactionTypes(transactions)` - возвращает массив уникальных типов транзакций.  
2. `calculateTotalAmount(transactions)` - вычисляет сумму всех транзакций.  
3. `calculateTotalAmountByDate(transactions, year, month, day)` - вычисляет сумму транзакций за указанный период.  
4. `getTransactionByType(transactions, type)` - возвращает транзакции указанного типа.  
5. `getTransactionsInDateRange(transactions, startDate, endDate)` - возвращает массив транзакций в указанном диапазоне дат.  
6. `getTransactionsByMerchant(transactions, merchantName)` - фильтрует транзакции по магазину.  
7. `calculateAverageTransactionAmount(transactions)` - вычисляет среднее значение транзакций.  
8. `getTransactionsByAmountRange(transactions, minAmount, maxAmount)` - фильтрует транзакции по сумме.  
9. `calculateTotalDebitAmount(transactions)` - вычисляет общую сумму дебетовых транзакций.  
10. `findMostTransactionsMonth(transactions)` - находит месяц с наибольшим количеством транзакций.  
11. `findMostDebitTransactionMonth(transactions)` - определяет месяц с наибольшим числом дебетовых транзакций.  
12. `mostTransactionTypes(transactions)` - определяет, каких транзакций больше (debit, credit или равное количество).  
13. `getTransactionsBeforeDate(transactions, date)` - возвращает транзакции до указанной даты.  
14. `findTransactionById(transactions, id)` - ищет транзакцию по `transaction_id`.  
15. `mapTransactionDescriptions(transactions)` - возвращает массив описаний транзакций.  
![image](https://github.com/user-attachments/assets/147a64c1-2be2-4dde-afd0-aa809e7b55bc)  
![image](https://github.com/user-attachments/assets/31460e09-d4e9-4022-abe2-33c34a81f896)  

## Шаг 3. Тестирование функций  
### 1. Проверьте работу функций на различных наборах данных  
```js
console.log(getTransactionsByAmountRange(transactions, 50, 100));
```  
![image](https://github.com/user-attachments/assets/2269ddf8-2a80-468b-88c9-9fe5f692ad6d)  

### 2. Проверьте работу на пустом массиве транзакций [extra]  
```js
console.log(calculateTotalAmount([]));
```  
![image](https://github.com/user-attachments/assets/c843245e-e165-4541-bd35-9b21889505d3)  

### 3. Проверьте работу на массиве с одной транзакцией [extra]  
```js
const singleTransaction = [
  {
    transaction_id: "10",
    transaction_date: "2019-01-10",
    transaction_amount: 20.0,
    transaction_type: "credit",
    transaction_description: "Cashback reward",
    merchant_name: "BankXYZ",
    card_type: "Visa"
  }
];
console.log(calculateAverageTransactionAmount(singleTransaction));
```  
![image](https://github.com/user-attachments/assets/e3c9e0be-3d86-4691-b6b2-31f15e4216f9)  

## Контрольные вопросы  
## 1. Какие методы массивов можно использовать для обработки объектов в JavaScript?  

```javascript
const objects = [{ age: 20 }, { age: 25 }];
const ages = objects.map(obj => obj.age);
console.log(ages); // [20, 25]

map() — создает новый массив, применяя функцию к каждому элементу исходного массива

// filter() — создает новый массив, включающий только те элементы, которые прошли проверку в функции-предикате
const adults = objects.filter(obj => obj.age >= 21);
console.log(adults); // [{ age: 25 }]
```  

## 2. Как сравнивать даты в строковом формате в JavaScript?  

```javascript
// Преобразуем строковые даты в объекты Date
const date1 = new Date('2025-03-03');
const date2 = new Date('2025-03-05');

// Сравниваем объекты Date с помощью операторов сравнения
if (date1 < date2) {
  console.log('date1 is earlier than date2');
} else if (date1 > date2) {
  console.log('date1 is later than date2');
} else {
  console.log('Both dates are equal');
}
```  
## 3. В чем разница между `map()`, `filter()` и `reduce()` при работе с массивами объектов?  

```javascript
// map() — создает новый массив, применяя функцию к каждому элементу массива
const objects = [{ age: 20 }, { age: 25 }];
const ages = objects.map(obj => obj.age);
console.log(ages); // [20, 25]

// filter() — создает новый массив, включающий только те элементы, которые прошли проверку в функции-предикате
const adults = objects.filter(obj => obj.age >= 21);
console.log(adults); // [{ age: 25 }]

// reduce() — применяется к каждому элементу массива, чтобы получить одно значение
const totalAge = objects.reduce((sum, obj) => sum + obj.age, 0);
console.log(totalAge); // 45
```
