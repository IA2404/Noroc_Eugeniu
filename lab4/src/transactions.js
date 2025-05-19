export const transactions = [];

/**
 * Добавляет новую транзакцию в список.
 * @param {Object} transaction - Объект транзакции.
 */
export function addTransactionToList(transaction) {
  transactions.push(transaction);
}

/**
 * Удаляет транзакцию по ID.
 * @param {string} id - ID транзакции.
 */
export function removeTransactionById(id) {
  const index = transactions.findIndex(tx => tx.id === id);
  if (index !== -1) transactions.splice(index, 1);
}
