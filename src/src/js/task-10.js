function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

// const inputEl = document.querySelector("[type ='number']");
// const createBtn = document.querySelector("[data-create]");
// const destroyBtn = document.querySelector("[data-destroy]");
// const boxesEl = document.querySelector("#boxes");



// const createBoxes = (amount) => {
//   amount = Number(inputEl.value);
//   const makeBoxes = new Array(Number(amount)).fill("");
//    const markup = makeBoxes.map((value, index) => {
//       value + `<div style=
//     width: ${30 + index * 10} px
//       height: ${30 + index * 10} px
//       background-color: ${getRandomHexColor()}>
//     </div>`
//   }).join("");
//  return boxesEl.insertAdjacentHTML("beforeend", markup);

// }

// const destroyBoxes = () => {
//   boxesEl.innerHTML = "";
//   inputEl.value = "";
// }

// createBtn.addEventListener("click", createBoxes);
// destroyBtn.addEventListener("click", destroyBoxes);