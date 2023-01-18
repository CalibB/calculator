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

let num = [];
let oper = '';
let result = 0;
let operationCount = 0;

display.textContent = 0;

const btn9 = document.querySelector('.num-9');
btn9.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${num[0]} ${oper} ${num[1] += '9'}`
    } else if (operationCount == 2) {
        num.push('9');
        display.textContent += ` ${num[1]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${num[0] += '9'}`;
    } else {
        num[0] = '9';
        display.textContent += `${num[0]}`;
        operationCount++;
    }
});

const btn8 = document.querySelector('.num-8');
btn8.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${num[0]} ${oper} ${num[1] += '8'}`
    } else if (operationCount == 2) {
        num.push('8');
        display.textContent += ` ${num[1]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${num[0] += '8'}`;
    } else {
        num[0] = '8';
        display.textContent += `${num[0]}`;
        operationCount++;
    }
});

const btn7 = document.querySelector('.num-7');
btn7.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${num[0]} ${oper} ${num[1] += '7'}`
    } else if (operationCount == 2) {
        num.push('7');
        display.textContent += ` ${num[1]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${num[0] += '7'}`;
    } else {
        num[0] = '7';
        display.textContent += `${num[0]}`;
        operationCount++;
    }
});

const btn6 = document.querySelector('.num-6');
btn6.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${num[0]} ${oper} ${num[1] += '6'}`
    } else if (operationCount == 2) {
        num.push('6');
        display.textContent += ` ${num[1]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${num[0] += '6'}`;
    } else {
        num[0] = '6';
        display.textContent += `${num[0]}`;
        operationCount++;
    }
});

const btn5 = document.querySelector('.num-5');
btn5.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${num[0]} ${oper} ${num[1] += '5'}`
    } else if (operationCount == 2) {
        num.push('5');
        display.textContent += ` ${num[1]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${num[0] += '5'}`;
    } else {
        num[0] = '5';
        display.textContent += `${num[0]}`;
        operationCount++;
    }
});

const btn4 = document.querySelector('.num-4');
btn4.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${num[0]} ${oper} ${num[1] += '4'}`
    } else if (operationCount == 2) {
        num.push('4');
        display.textContent += ` ${num[1]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${num[0] += '4'}`;
    } else {
        num[0] = '4';
        display.textContent += `${num[0]}`;
        operationCount++;
    }
});

const btn3 = document.querySelector('.num-3');
btn3.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${num[0]} ${oper} ${num[1] += '3'}`
    } else if (operationCount == 2) {
        num.push('3');
        display.textContent += ` ${num[1]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${num[0] += '3'}`;
    } else {
        num[0] = '3';
        display.textContent += `${num[0]}`;
        operationCount++;
    }
});

const btn2 = document.querySelector('.num-2');
btn2.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${num[0]} ${oper} ${num[1] += '2'}`
    } else if (operationCount == 2) {
        num.push('2');
        display.textContent += ` ${num[1]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${num[0] += '2'}`;
    } else {
        num[0] = '2';
        display.textContent += `${num[0]}`;
        operationCount++;
    }
});

const btn1 = document.querySelector('.num-1');
btn1.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${num[0]} ${oper} ${num[1] += '1'}`
    } else if (operationCount == 2) {
        num.push('1');
        display.textContent += ` ${num[1]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${num[0] += '1'}`;
    } else {
        num[0] = '1';
        display.textContent += `${num[0]}`;
        operationCount++;
    }
});

const btn0 = document.querySelector('.num-0');
btn0.addEventListener('click', () => {
    if (operationCount > 2) {
        display.textContent = `${num[0]} ${oper} ${num[1] += '0'}`
    } else if (operationCount == 2) {
        num.push('0');
        display.textContent += ` ${num[1]}`
        operationCount++;
    } else if (operationCount == 1) {
        display.textContent = `${num[0] += '0'}`;
    } else {
        num[0] = '0';
        display.textContent += `${num[0]}`;
        operationCount++;
    }
});

const addBtn = document.querySelector('.add-op');
addBtn.addEventListener('click', () => {
    oper = '+'
    display.textContent += ` ${oper}`
    operationCount++;
});

const subtractBtn = document.querySelector('.subtract-op');
subtractBtn.addEventListener('click', () => {
    oper = '-'
    operationCount++;
});

const multiplyBtn = document.querySelector('.multiply-op');
multiplyBtn.addEventListener('click', () => {
    oper = 'x'
    operationCount++;
});

const divideBtn = document.querySelector('.divide-op');
divideBtn.addEventListener('click', () => {
    oper = '÷'
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
