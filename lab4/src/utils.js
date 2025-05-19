/**
 * Генерирует уникальный идентификатор.
 * @returns {string} Уникальный ID.
 */
export function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Форматирует дату и время в строку.
 * @returns {string} Отформатированная строка даты и времени.
 */
export function formatDate() {
  return new Date().toLocaleString();
}
