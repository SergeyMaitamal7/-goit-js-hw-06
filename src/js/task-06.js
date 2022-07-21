//   Напиши скрипт, который при потере aокуса на инпуте (событие blur),
//   проверяет его содержимое на правильное количество введённых символов.
//   Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы заданиz

const input = document.querySelector('#validation-input');
const validLength = Number(input.dataset.length);
input.addEventListener('blur', (event) => {
  event.currentTarget.classList.add('invalid');
  event.currentTarget.classList.remove('valid');
  if (event.currentTarget.value.length === validLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  }
});
