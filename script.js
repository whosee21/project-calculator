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
        
        // btn.onclick = function() {
        //     num1 = displayBot.textContent;
        //     switch(btn.textContent) {

        //         case 'C': displayBot.textContent = '';
        //             displayTop.textContent = '';
        //             isEqual = false;
        //             num1 = '';
        //             num2 = '';
        //             break;

        //         case '=':
        //             if(isEqual === false){
        //                 num2 = displayBot.textContent;
        //                 if (!(displayBot.textContent == '') && !(num2 == '')){
        //                     displayTop.textContent = `${num1} ${op} ${num2} ${this.textContent}`;
        //                     displayBot.textContent = operate(num1,num2,op);
        //                     isEqual = true;
        //                 } else {
        //                     isEqual = true;
        //                 }
        //             }
        //             break;
                    
        //         case '+': 
        //             isEqual = false;
        //             if (displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
        //             // if (!(displayTop.textContent == '') && (num2 == '')) {
        //             //     num2 = displayBot.textContent;
        //             //     num1 = operate(num1,num2,op);
        //             //     displayTop.textContent = `${num1} ${op}`;
        //             //     displayBot.textContent = '';
        //             //     num2 = '';
        //             //     break;
        //             // }
        //             op = '+';
        //             displayTop.textContent = num1 + ' + ';
        //             // displayBot.textContent = operate(num1,num2,op);
        //             displayBot.textContent = '';
        //             break;

        //         case '-': op = '-';
        //             if (displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
        //             num1 = displayBot.textContent;
        //             displayTop.textContent = displayBot.textContent + ' - ';
        //             displayBot.textContent = '';
        //             isEqual = false;
        //             break;

        //         case '*': op = '*';
        //             if (displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
        //             num1 = displayBot.textContent;
        //             displayTop.textContent = displayBot.textContent + ' * ';
        //             displayBot.textContent = '';
        //             isEqual = false;
        //             break;
                
        //         case '/': op = '/';
        //             if (displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
        //             num1 = displayBot.textContent;
        //             displayTop.textContent = displayBot.textContent + ' / ';
        //             displayBot.textContent = '';
        //             isEqual = false;
        //             break;
                
        //         case 'X': displayBot.textContent = displayBot.textContent.slice(0,-1);
        //             break;

        //         case '.': if(displayBot.textContent == '') {
        //             displayBot.textContent = `0.`;
        //             } else if(displayBot.textContent.includes('.')){
        //                 break;
        //             } else {
        //                 displayBot.textContent = displayBot.textContent + '.';
        //             }
        //             break;

        //         default: 
        //             if(displayBot.textContent == "Eh???"){
        //                 break;
        //             } else if (!displayBot == ''){
        //                 isEqual = false;
        //                 displayBot.textContent += this.textContent;
        //             } else {
        //                 displayBot.textContent = '';
        //             }
        //     }
        // }
    }
}

const buttons = document.querySelectorAll('.buttons');
let displayBot = document.getElementById('display-bot');
let displayTop = document.getElementById('display-top');

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.textContent) {

            case 'C': clear();
                break;
                
            case 'X': if (displayBot.textContent == "Eh???") break;
                displayBot.textContent = displayBot.textContent.slice(0,-1);
                // isEqual = false;
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
                        displayTop.textContent = `${num1} ${op} ${num2} ${e.target.textContent}`;
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
                // isEqual = false;
                break;

            case '+': if(displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
                op = e.target.textContent;
                if (!(displayTop.textContent == '' && num2 == '')) {
                    if (isEqual == true) {
                        num1 = displayBot.textContent;
                        displayTop.textContent = `${num1} ${e.target.textContent}`;
                        displayBot.textContent = '';
                        isEqual = false;
                        break;
                    }
                    num2 = displayBot.textContent;
                    num1 = operate(num1,num2,op);
                    displayTop.textContent = `${num1} ${e.target.textContent}`;
                    displayBot.textContent = '';
                    num2 = '';
                    isEqual = false;
                    break;
                }
                num1 = displayBot.textContent;
                displayTop.textContent = `${num1} ${e.target.textContent}`;
                displayBot.textContent = '';
                num2 = '';
                break;

            case '-': if(displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
                op = e.target.textContent;
                if (!(displayTop.textContent == '' && num2 == '')) {
                    if (isEqual == true) {
                        num1 = displayBot.textContent;
                        displayTop.textContent = `${num1} ${e.target.textContent}`;
                        displayBot.textContent = '';
                        isEqual = false;
                        break;
                    }
                    
                    num2 = displayBot.textContent;
                    num1 = operate(num1,num2,op);
                    displayTop.textContent = `${num1} ${e.target.textContent}`;
                    displayBot.textContent = '';
                    num2 = '';
                    isEqual = false;
                    break;
                }
                num1 = displayBot.textContent;
                displayTop.textContent = `${num1} ${e.target.textContent}`;
                displayBot.textContent = '';
                num2 = '';
                break;

            case '*': if(displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
                op = e.target.textContent;
                if (!(displayTop.textContent == '' && num2 == '')) {
                    if (isEqual == true) {
                        num1 = displayBot.textContent;
                        displayTop.textContent = `${num1} ${e.target.textContent}`;
                        displayBot.textContent = '';
                        isEqual = false;
                        break;
                    }
                    num2 = displayBot.textContent;
                    num1 = operate(num1,num2,op);
                    displayTop.textContent = `${num1} ${e.target.textContent}`;
                    displayBot.textContent = '';
                    num2 = '';
                    isEqual = false;
                    break;
                }
                num1 = displayBot.textContent;
                displayTop.textContent = `${num1} ${e.target.textContent}`;
                displayBot.textContent = '';
                num2 = '';
                break;

            case '/': if(displayBot.textContent == '' || displayBot.textContent == "Eh???") break;
                op = e.target.textContent;
                if (!(displayTop.textContent == '' && num2 == '')) {
                    if (isEqual == true) {
                        num1 = displayBot.textContent;
                        displayTop.textContent = `${num1} ${e.target.textContent}`;
                        displayBot.textContent = '';
                        isEqual = false;
                        break;
                    }
                    num2 = displayBot.textContent;
                    num1 = operate(num1,num2,op);
                    displayTop.textContent = `${num1} ${e.target.textContent}`;
                    displayBot.textContent = '';
                    num2 = '';
                    isEqual = false;
                    break;
                }
                num1 = displayBot.textContent;
                displayTop.textContent = `${num1} ${e.target.textContent}`;
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
                displayBot.textContent += e.target.textContent;
                }
        }
    });
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

function clear() {
    displayBot.textContent = '';
    displayTop.textContent = '';
    isEqual = false;
    num1 = '';
    num2 = '';
}