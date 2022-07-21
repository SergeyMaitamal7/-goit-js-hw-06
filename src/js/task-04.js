// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const buttonDecrement = document.querySelector(
  `button[data-action="decrement"]`
);
const buttonIncrement = document.querySelector(
  `button[data-action="increment"]`
);
const spanValue = document.querySelector('#value');
let counterValue = 0;

const handleClickDecrement = (event) => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
  return counterValue;
};
buttonDecrement.addEventListener('click', handleClickDecrement);

const handleClickIncrement = (event) => {
  counterValue += 1;
  spanValue.textContent = counterValue;
  return counterValue;
};
buttonIncrement.addEventListener('click', handleClickIncrement);
