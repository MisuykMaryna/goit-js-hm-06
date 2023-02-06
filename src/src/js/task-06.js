const input = document.querySelector("#validation-input");

function onInputBlur(event) {
    const inputContent = event.currentTarget.value.trim();
    if (Number(input.dataset.length) === inputContent.length) {
        input.classList.remove("invalid", "valid");
        return input.classList.add("valid");
    }
    return input.classList.add("invalid");
}


input.addEventListener("blur", onInputBlur);


