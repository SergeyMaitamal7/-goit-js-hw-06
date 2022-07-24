// Напиши скрипт, который изменяет цвета фона элемента <body> через
// инлайн стиль при клике на button.change-color и выводит значение цвета
// в span.color.

const backgroundColorBody = document.querySelector('body');
const buttonChangeColorBody = document.querySelector('.change-color');
const nameBodyColor = document.querySelector('.color');
buttonChangeColorBody.addEventListener('click', changeColor);

function changeColor(event) {
  const randomColor = getRandomHexColor();
  backgroundColorBody.style.backgroundColor = randomColor;
  nameBodyColor.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
