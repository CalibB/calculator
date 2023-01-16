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

let num1 = '';
let oper = '';
let num2 = '';

display.textContent = num1 == '' && oper == '' && num2 == '' ? '0' : `${num1} ${oper} ${num2}`;
