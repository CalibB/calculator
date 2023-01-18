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
    return func(num1, num2);
};

// Populating the display

const display = document.querySelector('.screen__text');

let expression = [];
let result = 0;
let operationCount = 0;

display.textContent = 0;

const btn9 = document.querySelector('.num-9');
btn9.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += '9'}`
    } else if (operationCount == 2) {
        expression.push('9');
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += '9'}`;
    } else {
        expression[0] = '9';
        display.textContent += `${expression[0]}`;
        operationCount++;
    }
});

const btn8 = document.querySelector('.num-8');
btn8.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += '8'}`
    } else if (operationCount == 2) {
        expression.push('8');
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += '8'}`;
    } else {
        expression[0] = '8';
        display.textContent += `${expression[0]}`;
        operationCount++;
    }
});

const btn7 = document.querySelector('.num-7');
btn7.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += '7'}`
    } else if (operationCount == 2) {
        expression.push('7');
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += '7'}`;
    } else {
        expression[0] = '7';
        display.textContent += `${expression[0]}`;
        operationCount++;
    }
});

const btn6 = document.querySelector('.num-6');
btn6.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += '6'}`
    } else if (operationCount == 2) {
        expression.push('6');
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += '6'}`;
    } else {
        expression[0] = '6';
        display.textContent += `${expression[0]}`;
        operationCount++;
    }
});

const btn5 = document.querySelector('.num-5');
btn5.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += '5'}`
    } else if (operationCount == 2) {
        expression.push('5');
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += '5'}`;
    } else {
        expression[0] = '5';
        display.textContent += `${expression[0]}`;
        operationCount++;
    }
});

const btn4 = document.querySelector('.num-4');
btn4.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += '4'}`
    } else if (operationCount == 2) {
        expression.push('4');
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += '4'}`;
    } else {
        expression[0] = '4';
        display.textContent += `${expression[0]}`;
        operationCount++;
    }
});

const btn3 = document.querySelector('.num-3');
btn3.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += '3'}`
    } else if (operationCount == 2) {
        expression.push('3');
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += '3'}`;
    } else {
        expression[0] = '3';
        display.textContent += `${expression[0]}`;
        operationCount++;
    }
});

const btn2 = document.querySelector('.num-2');
btn2.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += '2'}`
    } else if (operationCount == 2) {
        expression.push('2');
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += '2'}`;
    } else {
        expression[0] = '2';
        display.textContent += `${expression[0]}`;
        operationCount++;
    }
});

const btn1 = document.querySelector('.num-1');
btn1.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += '1'}`
    } else if (operationCount == 2) {
        expression.push('1');
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += '1'}`;
    } else {
        expression[0] = '1';
        display.textContent += `${expression[0]}`;
        operationCount++;
    }
});

const btn0 = document.querySelector('.num-0');
btn0.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${expression[0]} ${expression[1]} ${expression[2] += '0'}`
    } else if (operationCount == 2) {
        expression.push('0');
        display.textContent += ` ${expression[2]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${expression[0] += '0'}`;
    } else {
        expression[0] = '0';
        display.textContent += `${expression[0]}`;
        operationCount++;
    }
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
    oper = '**'
    operationCount++;
});
const equalsBtn = document.querySelector('.operate-op');
equalsBtn.addEventListener('click', () => {
    display.textContent = result;
    operationCount = 0;
});
