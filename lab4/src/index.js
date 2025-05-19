import { generateId, formatDate } from './utils.js';
import { addTransactionToList, removeTransactionById, transactions } from './transactions.js';
import { renderTransaction, removeTransactionRow, updateTotalDisplay, showFullDescription } from './ui.js';

const form = document.getElementById('transaction-form');

/**
 * Обработчик добавления транзакции.
 * @param {Event} e - Событие формы.
 */
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const amount = parseFloat(document.getElementById('amount').value);
  const description = document.getElementById('description').value.trim();
  const category = document.getElementById('category').value;

  if (!description || isNaN(amount)) {
    alert('Пожалуйста, заполните все поля корректно.');
    return;
  }

  const transaction = {
    id: generateId(),
    date: formatDate(),
    amount,
    category,
    description
  };

  addTransactionToList(transaction);
  renderTransaction(transaction);
  updateTotalDisplay();

  form.reset();
});

/**
 * Обработчик клика по таблице для удаления и просмотра описания.
 */
document.getElementById('transaction-table').addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'BUTTON') {
    const id = target.dataset.id;
    removeTransactionById(id);
    removeTransactionRow(id);
    updateTotalDisplay();
  } else if (target.tagName === 'TD') {
    const row = target.closest('tr');
    const id = row.dataset.id;
    const tx = transactions.find(tx => tx.id === id);
    if (tx) showFullDescription(tx.description);
  }
});

/**
 * Пересчитывает общую сумму.
 */
export function calculateTotal() {
  updateTotalDisplay();
}
