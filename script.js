'use strict';

const calc = document.getElementById('button-container');
const btnNames = ['C','','','X','7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];
let num1 = '';
let num2 = '';
let op = '';
let isEqual = false;

createButtons();

function createButtons() {
    let displayBot = document.getElementById('display-bot');
    let displayTop = document.getElementById('display-top');
    
    for(let i = 0; i < (4 * 5); i++){
        const btn = document.createElement('button');
        btn.style.flex = `0 0 ${(100/4) - 3}%`;
        btn.className = 'buttons';
        btn.id = `btn${i+1}`;
        btn.textContent = btnNames[i];
        calc.appendChild(btn);
        
        btn.onclick = function() {
            switch(btn.textContent) {

                case 'C': displayBot.textContent = '';
                    displayTop.textContent = '';
                    isEqual = false;
                    num1 = '';
                    num2 = '';
                    break;

                case '=':
                    if(isEqual === false){
                        num2 = displayBot.textContent;
                        if (!(displayBot.textContent == '') && !(num2 == '')){
                            displayTop.textContent = `${num1} ${op} ${num2} ${this.textContent}`;
                            displayBot.textContent = operate(num1,num2,op);
                            isEqual = true;
                        } else {
                            isEqual = true;
                        }
                    }
                    break;
                    
                case '+': 
                    if (displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
                    op = '+';
                    num1 = displayBot.textContent;
                    displayTop.textContent = displayBot.textContent + ' + ';
                    displayBot.textContent = '';
                    isEqual = false;
                    break;

                case '-': op = '-';
                    if (displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
                    num1 = displayBot.textContent;
                    displayTop.textContent = displayBot.textContent + ' - ';
                    displayBot.textContent = '';
                    isEqual = false;
                    break;

                case '*': op = '*';
                    if (displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
                    num1 = displayBot.textContent;
                    displayTop.textContent = displayBot.textContent + ' * ';
                    displayBot.textContent = '';
                    isEqual = false;
                    break;
                
                case '/': op = '/';
                    if (displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
                    num1 = displayBot.textContent;
                    displayTop.textContent = displayBot.textContent + ' / ';
                    displayBot.textContent = '';
                    isEqual = false;
                    break;
                
                case 'X': displayBot.textContent = displayBot.textContent.slice(0,-1);
                    break;

                case '.': if(displayBot.textContent == '') {
                    displayBot.textContent = `0.`;
                    } else if(displayBot.textContent.includes('.')){
                        break;
                    } else {
                        displayBot.textContent = displayBot.textContent + '.';
                    }
                    break;

                default: 
                    if(displayBot.textContent == "Eh???"){
                        break;
                    } else if (!displayBot == ''){
                        displayBot.textContent += this.textContent;
                    } else {
                        displayBot.textContent = '';
                    }
            }
        }
    }
}

function operate(a, b, op){
    a = parseFloat(a);
    b = parseFloat(b);
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