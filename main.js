"use strict";

let firstNumber = "";
let secondNumber = "";
let selectedOperation = null;
const currentScreen = document.querySelector(".screen-current");

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equalsBtn");
const clearButton = document.getElementById("clearBtn");
const deleteButton = document.getElementById("deleteBtn");
const pointButton = document.getElementById("pointBtn");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentScreen.textContent === "0") {
      currentScreen.textContent = button.textContent;
    } else {
      currentScreen.textContent += button.textContent;
    }

    if (selectedOperation === null) firstNumber += button.textContent;
    else if (secondNumber === "") {
      secondNumber = button.textContent;
      currentScreen.textContent = secondNumber;
    } else {
      secondNumber += button.textContent;
      console.log(secondNumber);
    }
  });
});

operatorButtons.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (firstNumber) {
      selectedOperation = operator.textContent;
    } else return;
  });
});


