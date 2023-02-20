/*
Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const sizeRef = document.querySelector('input#font-size-control');
const spanTextRef = document.querySelector('span#text');

sizeRef.addEventListener('input', onChangeFontSizeInput);
spanTextRef.style.fontSize = `${sizeRef.value}px`;

function onChangeFontSizeInput(event) {
    spanTextRef.style.fontSize = `${event.currentTarget.value}px`;
}