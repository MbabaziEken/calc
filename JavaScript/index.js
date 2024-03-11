let display = document.getElementById('display');
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    display.value += number;
}

function setOperator(op) {
    operator = op;
    firstOperand = display.value;
    display.value = '';
}

function calculate() {
    secondOperand = display.value;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }
    display.value = result;
}

function clearDisplay() {
    display.value = '';
    operator = '';
    firstOperand = '';
    secondOperand = '';
}