const inCategoryEl = document.querySelector("#categories");
const inCategoryItem = inCategoryEl.querySelectorAll("li.item");
console.log(`Number of categories:${inCategoryItem.length}`);

 inCategoryItem.forEach((item) => {
    console.log(`Category:${item.querySelector("h2").textContent}`);
     console.log(`Elements:${item.querySelectorAll(":scope > ul > li").length}`);
    
});

// inCategoryItem.forEach((item) => {
//     console.log(`Category:${item.firstElementChild.textContent}`);
//     console.log(`Elements:${item.lastElementChild.children.length}`);
// });