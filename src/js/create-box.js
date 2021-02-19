// Экспортируем один элемент кода в основной файл index.js
const createP = text => {
  const newElem = document.createElement('p');
  newElem.textContent = text;
  return newElem;
};
// 1-й метод экспорта
export default createP; // команда экспорта переменной

// 2-й и 3-й метод экспорта
export const sum = (a, b) => a + b; // именованный экспорт
export const sum2 = (a, b) => a + b; // именованный экспорт
