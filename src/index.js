const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
};

let timerId = null;


refs.startBtn.addEventListener('click', startButtonHandler);
refs.stopBtn.addEventListener('click', stopButtonHandler);

function startButtonHandler() {
 timerId = setInterval(setBgrColor, 1000);
    refs.startBtn.disabled = true;
}

function stopButtonHandler() {
    clearInterval(timerId);
    refs.startBtn.disabled = false;
}

 function setBgrColor() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length-1)];
  }

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
