const inputField1 = document.getElementById("survey-input-1");
const boldButton1 = document.getElementById("bold-btn-1");
const italicButton1 = document.getElementById("italic-btn-1");
const underlineButton1 = document.getElementById("underline-btn-1");
const linkButton1 = document.getElementById("link-btn-1");

const inputField2 = document.getElementById("survey-input-2");
const boldButton2 = document.getElementById("bold-btn-2");
const italicButton2 = document.getElementById("italic-btn-2");
const underlineButton2 = document.getElementById("underline-btn-2");
const linkButton2 = document.getElementById("link-btn-2");

// Functions for the first input field
boldButton1.addEventListener("click", function () {
  inputField1.style.fontWeight =
    inputField1.style.fontWeight === "bold" ? "normal" : "bold";
});

italicButton1.addEventListener("click", function () {
  inputField1.style.fontStyle =
    inputField1.style.fontStyle === "italic" ? "normal" : "italic";
});

underlineButton1.addEventListener("click", function () {
  inputField1.style.textDecoration =
    inputField1.style.textDecoration === "underline" ? "none" : "underline";
});

linkButton1.addEventListener("click", function () {
  const link = prompt("Enter the link URL:");
  if (link !== null && link.trim() !== "") {
    const selectedText = inputField1.value.substring(
      inputField1.selectionStart,
      inputField1.selectionEnd
    );
    const linkedText = `<a href="${link}">${selectedText}</a>`;
    const newText =
      inputField1.value.slice(0, inputField1.selectionStart) +
      linkedText +
      inputField1.value.slice(inputField1.selectionEnd);
    inputField1.value = newText;
  }
});

// Functions for the second input field
boldButton2.addEventListener("click", function () {
  inputField2.style.fontWeight =
    inputField2.style.fontWeight === "bold" ? "normal" : "bold";
});

italicButton2.addEventListener("click", function () {
  inputField2.style.fontStyle =
    inputField2.style.fontStyle === "italic" ? "normal" : "italic";
});

underlineButton2.addEventListener("click", function () {
  inputField2.style.textDecoration =
    inputField2.style.textDecoration === "underline" ? "none" : "underline";
});

linkButton2.addEventListener("click", function () {
  const link = prompt("Enter the link URL:");
  if (link !== null && link.trim() !== "") {
    const selectedText = inputField2.value.substring(
      inputField2.selectionStart,
      inputField2.selectionEnd
    );
    const linkedText = `<a href="${link}">${selectedText}</a>`;
    const newText =
      inputField2.value.slice(0, inputField2.selectionStart) +
      linkedText +
      inputField2.value.slice(inputField2.selectionEnd);
    inputField2.value = newText;
  }
});

const boldButtons = document.querySelectorAll(`.bold-btn-1`);
const italicButtons = document.querySelectorAll(` .italic-btn-1`);
const underlineButtons = document.querySelectorAll(`.underline-btn-1`);
const linkButtons = document.querySelectorAll(`.link-btn-1`);

boldButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const select = e.target;
    const selectInput = select.closest(".flex-grow-1");
    const inputField = selectInput.querySelector("input");
    inputField.style.fontWeight =
      inputField.style.fontWeight === "bold" ? "normal" : "bold";
  });
});

italicButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const select = e.target;
    const selectInput = select.closest(".flex-grow-1");
    const inputField = selectInput.querySelector("input");
    inputField.style.fontStyle =
      inputField.style.fontStyle === "italic" ? "normal" : "italic";
  });
});

underlineButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const select = e.target;
    const selectInput = select.closest(".flex-grow-1");
    const inputField = selectInput.querySelector("input");
    inputField.style.textDecoration =
      inputField.style.textDecoration === "underline" ? "none" : "underline";
  });
});

linkButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const select = e.target;
    const selectInput = select.closest(".flex-grow-1");
    const inputField = selectInput.querySelector("input");
    const link = prompt("Enter the link URL:");
    if (link !== null && link.trim() !== "") {
      const selectedText = inputField.value.substring(
        inputField.selectionStart,
        inputField.selectionEnd
      );
      const linkedText = `<a href="${link}">${selectedText}</a>`;
      const newText =
        inputField.value.slice(0, inputField.selectionStart) +
        linkedText +
        inputField.value.slice(inputField.selectionEnd);
      inputField.value = newText;
    }
  });
});
