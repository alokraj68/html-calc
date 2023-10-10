import { useRef, useState } from 'react';
import styles from './calculator.module.css';
const Calculator = () => {
    const operators = ['+', '-', 'x', '÷'];
    let decimalAdded = false;
    const displayRef = useRef<HTMLInputElement>(null);
    const [displayValue, setDisplayValue] = useState<string>("0");
    const calc = (event: any) => {
        let btnVal = event.target.innerHTML;

        if (btnVal == 'C') {
            setDisplayValue("0");
            decimalAdded = false;
        } else if (btnVal == '=') {
            let equation = displayValue;
            let lastChar = equation[equation.length - 1];
            equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
            if (operators.indexOf(lastChar) > -1 || lastChar == '.') {
                equation = equation.replace(/.$/, '');
            }
            if (equation) {
                try {
                    setDisplayValue(eval(equation));
                }
                catch (e) {
                    setDisplayValue("Error");
                }
            }
            decimalAdded = false;
        } else if (operators.indexOf(btnVal) > -1) {
            let lastChar = displayValue[displayValue.length - 1];

            if (displayValue != '' && operators.indexOf(lastChar) == -1) {
                setDisplayValue(displayValue + btnVal);
            }
            else if (displayValue == '' && btnVal == '-') {
                setDisplayValue(displayValue + btnVal);
            }
            if (operators.indexOf(lastChar) > -1 && displayValue.length > 1) {
                setDisplayValue(displayValue.replace(/.$/, btnVal));
            }
            decimalAdded = false;
        } else if (btnVal == '.') {
            if (!decimalAdded) {
                setDisplayValue(displayValue + btnVal);
                decimalAdded = true;
            }
        } else {
            let newDisplayValue = displayValue.replace(/^0+/, '') + btnVal;
            setDisplayValue(newDisplayValue);
        }
    }
    const randomNumber = () => { return Math.random() * 256 | 0; }

    const mouseOverEvent = (event: any) => {
        const color = "rgba(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ",0.2)";
        event.target.style.background = color;
    };
    const mouseOutEvent = (event: any) => {
        event.target.style.background = "";
    }

    return (
        <div className={styles.calculatorBackground}>
            <div className={styles.calculator} id='calc' >
                <div className={styles.flexbox}>
                    <div className={styles.display} ref={displayRef} >{displayValue}</div>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>C</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>+/-</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>%</span >
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>÷</span >
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>7</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>8</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>9</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>x</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>4</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>5</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>6</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>-</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>1</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>2</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>3</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>+</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={[styles.zero, styles.neumorphic].join(' ')}>0</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>.</span>
                    <span onClick={(event) => calc(event)} onMouseOver={(event) => mouseOverEvent(event)} onMouseOut={(event) => { mouseOutEvent(event) }} className={styles.neumorphic}>=</span>
                </div >
            </div >
        </div>
    )
};

export default Calculator;