/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/

const inputRef = document.querySelector('input#validation-input');
const lengthRef = document.querySelector('input[data-length="6"]');

inputRef.addEventListener('blur', checkEnteredData);

function checkEnteredData(event) {
  const enteredDataLength = event.currentTarget.value.length;
  const targetDataLength = Number(lengthRef.dataset.length);

  inputRef.classList.remove('invalid', 'valid');

  if (enteredDataLength === targetDataLength) {
    return inputRef.classList.add('valid');
  }
  return inputRef.classList.add('invalid');
}