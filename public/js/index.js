const timerBtn = document.getElementById('timer-btn');
const timerInp = document.getElementById('timer-inp');
const timerDisplay = document.getElementById('timer-display');

let currTimer;
let newTimer;
timerBtn.addEventListener('click', ()=>{
    currTimer = timerInp.value;
    if (currTimer == 12) {
        newTimer = 3;
    }
    else if (currTimer == 3) {
        newTimer = 6
    }
    else {
        newTimer = 12;
    }

    timerDisplay.innerText = newTimer;
    timerInp.value = newTimer;
})