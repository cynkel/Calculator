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

console.log(operate(firstNumber, secondNumber, operator));