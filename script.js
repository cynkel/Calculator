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

function percent(num_one) {
    return num_one / 100;
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
    firstNumber = 0;
    secondNumber = 0;
    operator = "+";
}

function reset() {
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    display.textContent = "";
}

function toggleSign() {
    if(display.textContent.includes("-")) {
        display.textContent = display.textContent.substring(1, display.textContent.length);
    }else {
        display.textContent = "-" + display.textContent;
    }
}

function checkForDecimal() {
    if (display.textContent.includes(".")) {
        percentage.removeEventListener();
    }
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

const sign = document.querySelector(".sign");
const display = document.querySelector(".live");
const numberButton = document.querySelectorAll(".number");
const arithmeticButtons = document.querySelectorAll(".arithmetic");
const equalButton = document.querySelector(".equal");
const allClear = document.querySelector(".allClear");
const percentage = document.querySelector(".percent");
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
    checkForDecimal();
    populateDisplay(decimal.textContent)
}
);
allClear.addEventListener("click", reset);
equalButton.addEventListener("click", () => printResults());
sign.addEventListener("click", toggleSign);
percentage.addEventListener("click", () => {
    display.textContent = percent(display.textContent);
})

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