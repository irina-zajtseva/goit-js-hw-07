const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

inputElem.addEventListener("input", function () {
  const name = inputElem.value.trim();
  if (name === "") {
    outputElem.textContent = "Anonymous";
  } else {
    outputElem.textContent = name;
  }
});
