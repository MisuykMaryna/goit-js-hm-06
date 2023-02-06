const refs = {
  inputEl: document.querySelector("input"),
  createBtn:document.querySelector("[data-create]"),
  destroyBtn:document.querySelector("[data-destroy]"),
  boxesEl:document.querySelector("#boxes"),
}


const makeBoxes = (amount) => {
  amount = Number(refs.inputEl.value);
  const arr = new Array(Number(amount)).fill("");
  const markup = arr.map((value, index) => {
    value + `<div style=
    width: ${30 + index * 10} px
      height: ${30 + index * 10} px
      backgroundcolor: ${getRandomHexColor()}>
    </div>`
  }).join("");
 refs.boxesEl.insertAdjacentHTML("beforeend", markup)

}
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const removeBoxes = () => {
  refs.boxesEl.innerHTML = "";
  refs.inputEl.value = "";
}

refs.createBtn.addEventListener("click", makeBoxes);
refs.destroyBtn.addEventListener("click", removeBoxes);