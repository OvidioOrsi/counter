const value = document.querySelector('.value');
const reset = document.querySelector('.reset');
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');

function timerReset() {
    value.innerText = 0;
    value.style.color = 'black';
}

reset.addEventListener('click', timerReset);

function timerIncrease() {
    timerValue = +value.innerText;
    timerValue += 1;
    value.innerText = timerValue; 
    if (timerValue > 0) {
        value.style.color = 'green';
    } else if (timerValue === 0) {
        value.style.color = 'black';
    }
};

increase.addEventListener('click', timerIncrease);

function timerDecrease() {
    timerValue = +value.innerText;
    timerValue -= 1;
    value.innerText = timerValue;
    if (timerValue < 0) {
        value.style.color = 'red';
    } else if (timerValue === 0) {
        value.style.color = 'black';
    }
};

decrease.addEventListener('click', timerDecrease);
