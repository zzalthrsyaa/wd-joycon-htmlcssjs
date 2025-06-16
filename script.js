

const display = document.getElementById('display');
const button = document.querySelectorAll('button');

let currentInput = '';
let goingInput = '';


function updateDisplay(value) {
    display.textContent = value;
}

function clearAll() {
    currentInput = '';
    goingInput = '';
    updateDisplay('...');
}

function inputText() {
    if (currentInput === '...') {
        currentInput = '';
    } else {
        currentInput += num;
    }
    updateDisplay(currentInput);
}



buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const dataKey = button.getAttribute('data-key');
        if (button.classList.contains('number')) {
            inputNumber(dataKey);
        }
    });
});



clearAll();