'use strict';

const calc = document.getElementById('button-container');
const btnNames = ['C','','','X','7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];
let num1 = '';
let num2 = '';
let op = '';
let isEqual = false;

createButtons();

function createButtons() {
    for(let i = 0; i < (4 * 5); i++){
        const btn = document.createElement('button');
        btn.style.flex = `0 0 ${(100/4) - 3}%`;
        btn.className = 'buttons';
        btn.id = `btn${i+1}`;
        btn.textContent = btnNames[i];
        calc.appendChild(btn);
    }
}

const buttons = document.querySelectorAll('.buttons');
let displayBot = document.getElementById('display-bot');
let displayTop = document.getElementById('display-top');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const event = e.target.textContent;
        displayOperation(event);
        e.target.blur();
    });
    
});

document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (key == 'Escape') {
        clear();
        return;
    } else if (isNaN(key) && key != "Backspace" && key != '+' && key != '-' && key != '*' && key != '/' && key != '.' && key != 'Enter'){
        e.preventDefault();
        return;
    }
    if (e.code == "Space") {
        e.preventDefault();
        return;
    } else if (key == 'Enter'){
        displayOperation('=');
        return;
    } else if (e.code == 'Backspace'){ 
        if (displayBot.textContent == "Eh???") return;
        displayBot.textContent = displayBot.textContent.slice(0,-1);
        return;
    }
    displayOperation(key);
    
});

function operate(a, b, op){
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) return;
    switch(op){

        case '+': const sum = a + b;
            if (sum.toString().length > sum.toFixed(12).toString().length){
                return sum.toFixed(13);
            } else return sum;

        case '-': const diff = a - b;
        if (diff.toString().length > diff.toFixed(12).toString().length){
            return diff.toFixed(13);
        } else return diff;

        case '*': const product = a * b;
            if (product.toString().length > product.toFixed(12).toString().length){
                return product.toFixed(13);
            } else return product;

        case '/': if(b === 0) {
                return "Eh???";
            }
            const div = a / b;
            if (div.toString().length > div.toFixed(12).toString().length){
                return div.toFixed(13);
            } else return div;
    }
}

function displayOperation(e) {
    switch(e) {

        case 'C': clear();
            break;

        case ('X'): if (displayBot.textContent == "Eh???") break;
            displayBot.textContent = displayBot.textContent.slice(0,-1);
            break;

        case '.': if (displayBot.textContent == "Eh???") break;
            if(displayBot.textContent == '') {
                displayBot.textContent = `0.`;
            } else if(displayBot.textContent.includes('.')){
                break;
            } else {
                displayBot.textContent = displayBot.textContent + '.';
            }
            break;

        case '=':
            if (displayBot.textContent == '') break;
            if (num1 == '' && num2 == '') break;
            if (displayBot.textContent == "Eh???") break;
            if(isEqual === false){
                num2 = displayBot.textContent;
                if (!(displayBot.textContent == '') && !(num2 == '')){
                    displayTop.textContent = `${num1} ${op} ${num2} ${e}`;
                    num1 = operate(num1,num2,op);
                    displayBot.textContent = num1;
                    num2 = '';
                    isEqual = true;
                    break;
                } else {
                    isEqual = true;
                    break;
                }
            }
            break;

        case '+': if(displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
            op = e;
            if (!(displayTop.textContent == '' && num2 == '')) {
                if (isEqual == true) {
                    num1 = displayBot.textContent;
                    displayTop.textContent = `${num1} ${e}`;
                    displayBot.textContent = '';
                    isEqual = false;
                    break;
                }
                num2 = displayBot.textContent;
                num1 = operate(num1,num2,op);
                displayTop.textContent = `${num1} ${e}`;
                displayBot.textContent = '';
                num2 = '';
                isEqual = false;
                break;
            }
            num1 = displayBot.textContent;
            displayTop.textContent = `${num1} ${e}`;
            displayBot.textContent = '';
            num2 = '';
            break;

        case '-': if(displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
            op = e;
            if (!(displayTop.textContent == '' && num2 == '')) {
                if (isEqual == true) {
                    num1 = displayBot.textContent;
                    displayTop.textContent = `${num1} ${e}`;
                    displayBot.textContent = '';
                    isEqual = false;
                    break;
                }
                
                num2 = displayBot.textContent;
                num1 = operate(num1,num2,op);
                displayTop.textContent = `${num1} ${e}`;
                displayBot.textContent = '';
                num2 = '';
                isEqual = false;
                break;
            }
            num1 = displayBot.textContent;
            displayTop.textContent = `${num1} ${e}`;
            displayBot.textContent = '';
            num2 = '';
            break;

        case '*': if(displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
            op = e;
            if (!(displayTop.textContent == '' && num2 == '')) {
                if (isEqual == true) {
                    num1 = displayBot.textContent;
                    displayTop.textContent = `${num1} ${e}`;
                    displayBot.textContent = '';
                    isEqual = false;
                    break;
                }
                num2 = displayBot.textContent;
                num1 = operate(num1,num2,op);
                displayTop.textContent = `${num1} ${e}`;
                displayBot.textContent = '';
                num2 = '';
                isEqual = false;
                break;
            }
            num1 = displayBot.textContent;
            displayTop.textContent = `${num1} ${e}`;
            displayBot.textContent = '';
            num2 = '';
            break;

        case '/': if(displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
            op = e;
            if (!(displayTop.textContent == '' && num2 == '')) {
                if (isEqual == true) {
                    num1 = displayBot.textContent;
                    displayTop.textContent = `${num1} ${e}`;
                    displayBot.textContent = '';
                    isEqual = false;
                    break;
                }
                num2 = displayBot.textContent;
                num1 = operate(num1,num2,op);
                displayTop.textContent = `${num1} ${e}`;
                displayBot.textContent = '';
                num2 = '';
                isEqual = false;
                break;
            }
            num1 = displayBot.textContent;
            displayTop.textContent = `${num1} ${e}`;
            displayBot.textContent = '';
            num2 = '';
            break;

        default:
            if(displayBot.textContent == "Eh???"){
                num1 = '';
                num2 = '';
                break;
            } else {
                if (isEqual == true) {
                    displayTop.textContent = '';
                    isEqual = false;
                    num1 = '';
                    num2 = '';
                }
            displayBot.textContent += e;
            }
    }
}

function clear() {
    displayBot.textContent = '';
    displayTop.textContent = '';
    isEqual = false;
    num1 = '';
    num2 = '';
}