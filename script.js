//calculator app
//first thing is to link the calculator buttons by adding an event listener to each
//then, on keypress of button, display changes to reflect button press
//if integer or decimal button pressed, keep adding to display
//if operand button pressed, start initiating function based on what button was pressed
//when equals button is pressed, fully invoke function, display results on screenContainer
const calculator = document.querySelector('.calculatorContainer');
const keys = calculator.querySelector('.buttonContainer');
const display = document.querySelector('.screenResult');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;  
            }
            // console.log('number key!');
        } if (
            action === 'addition' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed');
            //custom attribute
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
            // console.log('operator key!');
        } if (action === 'decimal') {
            display.textContent = displayedNum + '.';
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.';
            } else if (previousKeyType === 'operator') {
                display.textContent = '0.';
                calculator.dataset.previousKeyType = 'decimal';
        }} if (action === 'clear') {
            display.innerHTML="0";
            // console.log('clear key!');
        } if (action === 'delete') {
            // console.log('delete key!');
        } if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum;
            // console.log('equals key!');
        if (firstValue && operator) {
                display.textContent = calculate(firstValue, operator, secondValue)
        }} 
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
    }
});

const calculate = (n1, operator, n2) => {
    let result = '';
    if (operator === 'add') {
        result = parseFloat(n1) + parseFloat(n2)
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2)
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2)
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2)
    }
      return result
};