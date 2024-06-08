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
        case "/":
            return divide(num_one, num_two);
            break;
        case "*":
            return multiply(num_one, num_two);
            break;
    }
}

let firstNumber = 0;
let secondNumber = 1;
let operator = "*";

const display = document.querySelector(".live");
const numberButton = document.querySelectorAll(".number");
const test = numberButton[0].textContent;

function populateDisplay(numberToPopulate) {
    display.textContent += numberToPopulate;
    setTextLength();
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

for (let index = 0; index < numberButton.length; index++) {
    numberButton[index].addEventListener("click", () => populateDisplay(numberButton[index].textContent));  
}