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
for (let i = 0; i < ingredients.length; i += 1) {
  const createLi = document.createElement('li');
  createLi.textContent = ingredients[i];
  createLi.classList.add('item');
  ul.append(createLi);
}
