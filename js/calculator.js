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
    if (num2 === 0) {
        return 'Seriously human!?'
    } else {
    return num1 / num2;
    };
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
    if (operationCount == 3) {
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

const btnPoint = document.querySelector('.point-btn');
btnPoint.addEventListener('click', () => {
    if (operationCount == 1 && !expression[0].toString().includes('.')) {
        toDisplay('.');
    } else if (operationCount > 2 && !expression[2].toString().includes('.')) {
        toDisplay('.')
    } else {
        btnPoint.style.borderColor = 'red';

        setTimeout(() => {
            btnPoint.style.borderColor = 'revert';   
        }, '1000');
    };
});

function safetyCheck(sign) {
    if (expression[1] == undefined && /\d/.test(expression[0])) {
        expression.push(sign);
        display.textContent += ` ${expression[1]}`;
        operationCount++;
        operateIfTwo();
    } else if (expression[2] !== undefined) {
        expression.push(sign);
        display.textContent += ` ${expression[1]}`;
        operationCount++;
        operateIfTwo();
    }
}

const addBtn = document.querySelector('.add-op');
addBtn.addEventListener('click', () => {
     safetyCheck('+');
});

const subtractBtn = document.querySelector('.subtract-op');
subtractBtn.addEventListener('click', () => {
    if (operationCount == 0 && !display.textContent.includes('-')) {
        expression.push('-');
        display.textContent = `${expression[0]}`;
        operationCount++;
    } else if (expression[2] == undefined && expression[1] !== undefined) {
        expression.push('-');
        display.textContent += ` ${expression[2]}`;
        operateIfTwo();
        operationCount++;
    } else if (expression[1] == undefined && /\d/.test(expression[0])) {
        expression.push('-');
        display.textContent += ` ${expression[1]}`;
        operationCount++;
        operateIfTwo();
    }
});

const multiplyBtn = document.querySelector('.multiply-op');
multiplyBtn.addEventListener('click', () => {
    safetyCheck('x');
});

const divideBtn = document.querySelector('.divide-op');
divideBtn.addEventListener('click', () => {
    safetyCheck('÷');
});

const exponentBtn = document.querySelector('.exponent-op');
exponentBtn.addEventListener('click', () => {
    safetyCheck('^');
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
    if (expression[2] === undefined) {
        display.textContent = 'You forgot the second operand!!'
        expression = [];
        operationCount = 0;
        deleteBtn.removeEventListener('click', deleteDisplay);
        setTimeout(() => {
            display.textContent = 0;
            deleteBtn.addEventListener('click', deleteDisplay);
        }, 2000);
    } else {
        let func = determineOperator();
        result = operate(func, expression[0], expression[2]);
        if (result.toString().includes('.')) {
            result = result.toFixed(2);
        }
        expression = [result];
        display.textContent = `${expression[0]}`;
        if (display.textContent == 'Seriously human!?') {
            expression = [];
            operationCount = 0;
            deleteBtn.removeEventListener('click', deleteDisplay);
            setTimeout(() => {
                display.textContent = 0;
                deleteBtn.addEventListener('click', deleteBtn);
            }, 2000);
        } else {
            operationCount = 1;
        }
    };
});

// Deleting inputs

function deleteDisplay() {
    let oldContent = display.textContent.split('');
    oldContent.pop();
    oldContent = oldContent.join('');
    let test = oldContent.split(' ');
    let index = 0;
    let temp = 0;

    if (test.includes('+')) {
        index = test.findIndex((element) => element == '+');
        if (test[index + 1] == undefined) {
            expression[1] = test[index];
            operationCount = 2;
        } else {
            temp = test.slice((index + 1));
            expression[2] = temp;
            operationCount = 3;
        }
    } else if (test.includes('-')) {
        index = test.findIndex((element) => element == '-');
        if (test[index + 1] == undefined) {
            expression[1] = test[index];
            operationCount = 2;
        } else {
            temp = test.slice((index + 1));
            expression[2] = temp;
            operationCount = 3;
        }
    } else if (test.includes('x')) {
        index = test.findIndex((element) => element == 'x');
        if (test[index + 1] == undefined) {
            expression[1] = test[index];
            operationCount = 2;
        } else {
            temp = test.slice((index + 1));
            expression[2] = temp;
            operationCount = 3;
        }
    } else if (test.includes('÷')) {
        index = test.findIndex((element) => element == '÷');
        if (test[index + 1] == undefined) {
            expression[1] = test[index];
            operationCount = 2;
        } else {
            temp = test.slice((index + 1));
            expression[2] = temp;
            operationCount = 3;
        }
    } else if (test.includes('^')) {
        index = test.findIndex((element) => element == '^');
        if (test[index + 1] == undefined) {
            expression[1] = test[index];
            operationCount = 2;
        } else {
            temp = test.slice((index + 1));
            expression[2] = temp;
            operationCount = 3;
        }
    } else {
        expression[0] = test.join('');
        operationCount = 1;
    };

    display.textContent = test.join('');
}

const deleteBtn = document.querySelector('.screen-section__deleteBtn');
deleteBtn.addEventListener('click', deleteDisplay);

// Clearing everything

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
    expression = [];
    operationCount = 0;
    display.textContent = 0;
});

function operateIfTwo() {
    if (operationCount == 4) {
        let func = determineOperator();
        let result = operate(func, Number(expression[0]), Number(expression[2]));
        if (result.toString().includes('.')) {
            result = result.toFixed(2);
        }
        expression = [result, (expression[1] = expression[3])]
        display.textContent = `${expression[0]} ${expression[1]}`;
    }

    operationCount = 2;
}

// Keyboard support

function getKey(event) {
    let key = event.key;
    let regex = /\d/g;
    
    if (regex.test(key)) {
        toDisplay(key);
    } else if (key == '+') {
        expression.push(key);
        display.textContent += ` ${expression[1]}`;
        operationCount++;
        operateIfTwo();
    } else if (key == '-') {
        if (operationCount == 0 && !display.textContent.includes('-')) {
            expression.push('-');
            display.textContent = `${expression[0]}`;
            operationCount++;
        } else if (expression[2] == undefined && expression[1] !== undefined) {
            expression.push('-');
            display.textContent += ` ${expression[2]}`;
            operateIfTwo();
            operationCount++;
        } else if (expression[1] == undefined && /\d/.test(expression[0])) {
            expression.push('-');
            display.textContent += ` ${expression[1]}`;
            operationCount++;
            operateIfTwo();
        } else {
            expression.push('-');
            display.textContent += ` ${expression[1]}`;
            operationCount++;
            operateIfTwo();
        }
    } else if (key == '*') {
        expression.push('x');
        display.textContent += ` ${expression[1]}`;
        operationCount++;
        operateIfTwo();
    } else if (key == '/') {
        expression.push('÷');
        display.textContent += ` ${expression[1]}`;
        operationCount++;
        operateIfTwo();
    } else if (key == '.') {
        if (operationCount == 1 && !expression[0].toString().includes('.')) {
            toDisplay('.');
        } else if (operationCount > 2 && !expression[2].toString().includes('.')) {
            toDisplay('.')
        } else {
            btnPoint.style.borderColor = 'red';
    
            setTimeout(() => {
                btnPoint.style.borderColor = 'revert';   
            }, '1000');
        };
    } else if (key == 'Enter') {
        if (expression[2] === undefined) {
            display.textContent = 'You forgot the second operand!'
            expression = [];
            operationCount = 0;
            deleteBtn.removeEventListener('click', deleteDisplay);
            setTimeout(() => {
            display.textContent = 0;
            deleteBtn.addEventListener('click', deleteDisplay);
            }, 2000);
        } else {
            let func = determineOperator();
            result = operate(func, expression[0], expression[2]);
            if (result.toString().includes('.')) {
                result = result.toFixed(2);
            }
            expression = [result];
            display.textContent = `${expression[0]}`;
            if (display.textContent == 'Seriously human!?') {
                expression = [];
                operationCount = 0;
                setTimeout(() => display.textContent = 0, 2000);
            } else {
                operationCount = 1;
            }
        };
    } else if (key == 'Backspace') {
        if (display.textContent == 'Seriously human!?') {
            return;
        } else {
            deleteDisplay();
        }
    };
}

document.body.addEventListener('keyup', (e) => {
    getKey(e);
});