import { removeTransactionById, transactions } from './transactions.js';
import { calculateTotal } from './index.js';

/**
 * Отображает транзакцию в таблице.
 * @param {Object} transaction - Объект транзакции.
 */
export function renderTransaction(transaction) {
  const table = document.querySelector('#transaction-table tbody');
  const row = document.createElement('tr');
  row.dataset.id = transaction.id;
  row.className = transaction.amount > 0 ? 'green' : 'red';

  row.innerHTML = `
    <td>${transaction.date}</td>
    <td>${transaction.category}</td>
    <td>${transaction.description.split(' ').slice(0, 4).join(' ')}</td>
    <td><button data-id="${transaction.id}">Удалить</button></td>
  `;

  table.appendChild(row);
}

/**
 * Удаляет строку таблицы.
 * @param {string} id - ID транзакции.
 */
export function removeTransactionRow(id) {
  const row = document.querySelector(`tr[data-id="${id}"]`);
  if (row) row.remove();
}

/**
 * Отображает полное описание транзакции.
 * @param {string} description - Полное описание.
 */
export function showFullDescription(description) {
  document.getElementById('full-description').textContent = description;
}

/**
 * Обновляет отображение общей суммы.
 */
export function updateTotalDisplay() {
  const total = transactions.reduce((sum, tx) => sum + Number(tx.amount), 0);
  document.getElementById('total').textContent = `Общая сумма: ${total}`;
}
