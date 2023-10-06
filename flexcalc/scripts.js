"use strict;"
const keys = document.querySelectorAll('#calc span');
const operators = ['+', '-', 'x', '÷'];
let decimalAdded = false;

for (const element of keys) {
    element.onclick = function (e) {
        let input = document.querySelector('.display');
        let inputVal = input.innerHTML;
        let btnVal = this.innerHTML;

        if (btnVal == 'C') {
            input.innerHTML = '';
            decimalAdded = false;
        } else if (btnVal == '=') {
            let equation = inputVal;
            let lastChar = equation[equation.length - 1];

            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');

            if (operators.indexOf(lastChar) > -1 || lastChar == '.')
                equation = equation.replace(/.$/, '');

            if (equation)
                input.innerHTML = eval(equation);

            decimalAdded = false;
        } else if (operators.indexOf(btnVal) > -1) {
            let lastChar = inputVal[inputVal.length - 1];

            if (inputVal != '' && operators.indexOf(lastChar) == -1)
                input.innerHTML += btnVal;

            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;


            if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }

            decimalAdded = false;
        } else if (btnVal == '.') {
            if (!decimalAdded) {
                input.innerHTML += btnVal;
                decimalAdded = true;
            }
        } else {
            input.innerHTML += btnVal;
        }

        // prevent page jumps
        e.preventDefault();
    }

    element.onmouseover = function (e) {
        const color = "rgba(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ",0.2)";
        element.style.background = color;
    };
    element.onmouseout = function (e) {
        element.style.background = "";
    };
}

const randomNumber = () => { return Math.random() * 256 | 0; }