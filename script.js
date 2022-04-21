//calculator app
//first thing is to link the calculator buttons by adding an event listener to each
//then, on keypress of button, display changes to reflect button press
//if integer or decimal button pressed, keep adding to display
//if operand button pressed, start initiating function based on what button was pressed
//when equals button is pressed, fully invoke function, display results on screenContainer
const calculator = document.querySelector('.calculatorContainer');
const keys = calculator.querySelector('.buttonContainer');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        if (!action) {
            console.log('number key!');
        } if (
            action === 'addition' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key!');
        } if (action === 'decimal') {
            console.log('decimal key!');
        } if (action === 'clear') {
            console.log('clear key!');
        } if (action === 'delete') {
            console.log('delete key!');
        } if (action === 'calculate') {
            console.log('equals key!');
        }
    }
});