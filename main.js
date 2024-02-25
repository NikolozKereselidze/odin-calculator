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

function updateScreen(value) {
  if (currentScreen.textContent === "0" || currentScreen.textContent === "") {
    currentScreen.textContent = value;
  } else {
    currentScreen.textContent += value;
  }
}

// Function to handle number button clicks
function handleNumberClick(button) {
  const value = button.textContent;
  updateScreen(value);
  if (selectedOperation === null) {
    firstNumber += value;
  } else {
    secondNumber += value;
    currentScreen.textContent = `${firstNumber} ${selectedOperation} ${secondNumber}`;
  }
}

// Function to handle operator button clicks
function handleOperatorClick(operator) {
  if (firstNumber && operator && secondNumber) {
    executeOperation();
  }

  if (firstNumber) {
    selectedOperation = operator.textContent;
    currentScreen.textContent = `${firstNumber} ${selectedOperation}`;
  }
}

// Function to handle equals button click
function handleEqualsClick() {
  executeOperation();
}

// Function to execute the selected operation
function executeOperation() {
  if (firstNumber && secondNumber && selectedOperation) {
    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);
    let result;
    switch (selectedOperation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = (num1 * num2).toFixed(2);
        break;
      case "÷":
        result = (num1 / num2).toFixed(2);
        break;
    }
    currentScreen.textContent = parseFloat(result);
    // Reset variables
    firstNumber = parseFloat(result);
    secondNumber = "";
    selectedOperation = null;
  }
}

// Function to clear the calculator
function clearCalculator() {
  currentScreen.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  selectedOperation = null;
}

// Add event listeners for number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => handleNumberClick(button));
});

// Add event listeners for operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => handleOperatorClick(button));
});

// Add event listener for equals button
equalsButton.addEventListener("click", handleEqualsClick);

// Add event listener for clear button
clearButton.addEventListener("click", clearCalculator);

// Add event listener for delete button
deleteButton.addEventListener("click", () => {
  currentScreen.textContent = currentScreen.textContent.slice(0, -1);
});
