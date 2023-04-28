const screen = document.querySelector('.screen');
const clearBtn = document.querySelector('.clear');
const calculateBtn = document.querySelector('.calculate');
const keys = document.querySelectorAll('.number, .operator');

for (let key of keys) {
    key.addEventListener('click', (event) => {
        const keyBtn = event.target;
        const keyValue = keyBtn.textContent;
        const screenValue = screen.value;

        if (keyValue === 'C') {
            screen.value = '';
        } else if (keyValue === '=') {
            screen.value = eval(screenValue);
        } else {
            screen.value = screenValue + keyValue;
        }
    });
}

clearBtn.addEventListener('click', () => {
    screen.value = '';
});

calculateBtn.addEventListener('click', () => {
    screen.value = eval(screen.value);
});