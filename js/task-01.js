const inCategoryEl = document.querySelector("#categories");
const inCategoryItem = inCategoryEl.querySelectorAll(".item");
console.log(`Number of categories:${inCategoryItem.length}`);

inCategoryItem.forEach((item) => {
    console.log(`Category:${item.firstElementChild.textContent}`);
    console.log(`Elements:${item.lastElementChild.children.length}`);
});