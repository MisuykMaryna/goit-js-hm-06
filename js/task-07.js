const input = document.querySelector("#font-size-control");
const textSpanEl = document.querySelector("#text");

 function onInputControl(event) {
    textSpanEl.style.fontSize = event.currentTarget.value + "px";
}


input.addEventListener("input", onInputControl)