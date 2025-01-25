'use strict';

const calc = document.getElementById('button-container');
const btnNames = ['C','','','X','√','x^2','n!','%','7','8','9','/','4','5','6','*','1','2','3','-','.','0','=','+'];
let num1 = '';
let num2 = '';
let op = '';
let isEqual = false;

createButtons();

function createButtons() {
    let displayBot = document.getElementById('display-bot');
    let displayTop = document.getElementById('display-top');
    
    for(let i = 0; i < (4 * 6); i++){
        const btn = document.createElement('button');
        btn.style.flex = `0 0 ${(100/4) - 3}%`;
        btn.className = 'buttons';
        btn.id = `btn${i+1}`;
        btn.textContent = btnNames[i];
        calc.appendChild(btn);
    }
}