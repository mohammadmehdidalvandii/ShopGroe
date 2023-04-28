// best product  times

let remainingTime = (120 * 24 * 60 * 60) + (21 * 60 * 60) + (48 * 60) + 20;
let interval;

function timerProduct(){
    startTimer()
    updateTimer()
}

function startTimer() {
  interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  remainingTime--;
  if (remainingTime < 0) {
    clearInterval(interval);
    document.querySelector('.proposel-product-timer').textContent = 'Timer has ended!';
  } else {
    const days = Math.floor(remainingTime / 86400);
    const hours = Math.floor((remainingTime % 86400) / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    const timerDisplay = document.querySelector('.proposel-product-timer');
    timerDisplay.innerHTML =
      `<span>${days}d:</span> ` +
      `<span>${hours < 10 ? '0'  : ' '}${hours}</span> :` +
      `<span>${minutes < 10 ? '0' : ' '}${minutes}</span> :` +
      `<span>${seconds < 10 ? '0' : ' '}${seconds}</span>`;
  }
}

startTimer();

export {timerProduct}