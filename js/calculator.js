// Functions for the calculator

function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function exponent(num, expo) {
    return Math.pow(num, expo);
};

function operate(func, num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    return func(num1, num2);
};

// Populating the display

const display = document.querySelector('.screen__text');

let expression = [];
let result = 0;
let operationCount = 0;

display.textContent = 0;

function toDisplay(number) {
    let num = number.toString();
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += num}`
    } else if (operationCount == 2) {
        expression.push(num);
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += num}`;
    } else {
        expression[0] = num;
        display.textContent = `${expression[0]}`;
        operationCount++;
    }
}

const btn9 = document.querySelector('.num-9');
btn9.addEventListener('click', () => {
    toDisplay(9);
});

const btn8 = document.querySelector('.num-8');
btn8.addEventListener('click', () => {
    toDisplay(8);
});

const btn7 = document.querySelector('.num-7');
btn7.addEventListener('click', () => {
    toDisplay(7);
});

const btn6 = document.querySelector('.num-6');
btn6.addEventListener('click', () => {
    toDisplay(6);
});

const btn5 = document.querySelector('.num-5');
btn5.addEventListener('click', () => {
    toDisplay(5);
});

const btn4 = document.querySelector('.num-4');
btn4.addEventListener('click', () => {
    toDisplay(4);
});

const btn3 = document.querySelector('.num-3');
btn3.addEventListener('click', () => {
    toDisplay(3);
});

const btn2 = document.querySelector('.num-2');
btn2.addEventListener('click', () => {
    toDisplay(2);
});

const btn1 = document.querySelector('.num-1');
btn1.addEventListener('click', () => {
    toDisplay(1);
});

const btn0 = document.querySelector('.num-0');
btn0.addEventListener('click', () => {
    toDisplay(0);
});

const addBtn = document.querySelector('.add-op');
addBtn.addEventListener('click', () => {
    expression.push('+');
    display.textContent += ` ${expression[1]}`;
    operationCount++;
});

const subtractBtn = document.querySelector('.subtract-op');
subtractBtn.addEventListener('click', () => {
    expression.push('-');
    display.textContent += ` ${expression[1]}`;
    operationCount++;
});

const multiplyBtn = document.querySelector('.multiply-op');
multiplyBtn.addEventListener('click', () => {
    expression.push('x');
    display.textContent += ` ${expression[1]}`;
    operationCount++;
});

const divideBtn = document.querySelector('.divide-op');
divideBtn.addEventListener('click', () => {
    expression.push('÷');
    display.textContent += ` ${expression[1]}`;
    operationCount++;
});

const exponentBtn = document.querySelector('.exponent-op');
exponentBtn.addEventListener('click', () => {
    expression.push('^')
    display.textContent += `${expression[1]}`;
    operationCount++;
});

// Determining operator and displaying result

function determineOperator() {
    if (expression[1] == '+') {
        return add
    } else if (expression[1] == '-') {
        return subtract
    } else if (expression[1] == 'x') {
        return multiply
    } else if (expression[1] == '÷') {
        return divide
    } else if (expression[1] == '^') {
        return exponent
    }
};

const equalsBtn = document.querySelector('.operate-op');
equalsBtn.addEventListener('click', () => {
    let func = determineOperator();
    result = operate(func, expression[0], expression[2]);
    display.textContent = result;
    operationCount = 0;
});

// Deleting inputs

const deleteBtn = document.querySelector('.screen-section__deleteBtn');
deleteBtn.addEventListener('click', () => {
    let oldContent = display.textContent.split('');
    oldContent.pop();
    oldContent = oldContent.join('');
    let test = oldContent.split(' ');
    let index = 0;
    let temp = 0;

    if (test.includes('+')) {
        index = test.findIndex((element) => element == '+');
        temp = test.slice((index + 1));
        expression[2] = temp;
        operationCount = 3;
    } else if (test.includes('-')) {
        index = test.findIndex((element) => element == '+');
        temp = test.slice((index + 1));
        expression[2] = temp;
        operationCount = 3;
    } else if (test.includes('x')) {
        index = test.findIndex((element) => element == '+');
        temp = test.slice((index + 1));
        expression[2] = temp;
        operationCount = 3;
    } else if (test.includes('÷')) {
        index = test.findIndex((element) => element == '+');
        temp = test.slice((index + 1));
        expression[2] = temp;
        operationCount = 3;
    } else if (test.includes('^')) {
        index = test.findIndex((element) => element == '+');
        temp = test.slice((index + 1));
        expression[2] = temp;
        operationCount = 3;
    } else {
        expression[0] = test.join('');
        operationCount = 1;
    };

    display.textContent = test.join('');
});

// Clearing everything

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    expression = [];
    operationCount = 0;
    display.textContent = 0;
});
