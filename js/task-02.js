const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ul = document.querySelector('#ingredients');
const create = ingredients.map((el)=> {
  const createLi = document.createElement('li');
  createLi.textContent = el;
  createLi.classList.add('item');
return createLi
})
ul.append(...create);
