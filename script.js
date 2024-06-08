function add(num_one, num_two) {
    return num_one + num_two;
}

function divide(num_one, num_two) {
    return num_one / num_two;
}

function subtract(num_one, num_two) {
    return num_one - num_two;
}

function multiply(num_one, num_two) {
    return num_one * num_two;
}

function operate(num_one, num_two, operation) {
    switch(operation) {
        case "+":
            return add(num_one, num_two);
            break;
        case "-":
            return subtract(num_one, num_two);
            break;
        case "÷":
            return divide(num_one, num_two);
            break;
        case "x":
            return multiply(num_one, num_two);
            break;
    }
}

function setTextLength() {
    switch(display.textContent.length) {
        case 9:
            display.style.fontSize = "40px";
            break;
        case 10:
            display.style.fontSize = "36px";
            break;
        case 12:
            display.style.fontSize = "24px";
            break;
        case 18:
            display.style.fontSize = "18px";
            break;
    }
}

function populateDisplay(numberToPopulate) {
    display.textContent += numberToPopulate;
    setTextLength();
}

function storeFirstNumber() {
    firstNumber = display.textContent;
    display.textContent = "";
}

function printResults() {
    secondNumber = display.textContent;
    results = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
    display.textContent = results;
}

function reset() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    display.textContent = "";
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

const display = document.querySelector(".live");
const numberButton = document.querySelectorAll(".number");
const arithmeticButtons = document.querySelectorAll(".arithmetic");
const equalButton = document.querySelector(".equal");
const allClear = document.querySelector(".allClear");
allClear.addEventListener("click", reset);
equalButton.addEventListener("click", () => printResults());

for (let index = 0; index < numberButton.length; index++) {
    numberButton[index].addEventListener("click", () => populateDisplay(numberButton[index].textContent));  
}

for (let index = 0; index < arithmeticButtons.length; index++) {
    arithmeticButtons[index].addEventListener("click", () =>  {
        operator = arithmeticButtons[index].textContent;
        storeFirstNumber();
    }
);  
}