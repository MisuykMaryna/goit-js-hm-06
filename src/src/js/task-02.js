const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientEl = document.querySelector("#ingredients");
const ingredientsList = ingredients.map
  ((ingredient) => {
const ingredientListEl = document.createElement("li");
    ingredientListEl.classList.add("item");
    ingredientListEl.textContent = `${ingredient}`
 
    return ingredientListEl;
  });


ingredientEl.append(...ingredientsList);
console.log(ingredientEl);