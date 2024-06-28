let stopwatchInterval;
let timerInterval;
let timerTime = 0;

// Stopwatch
const stopwatchDisplay = document.getElementById('stopwatch-display');
let stopwatchSeconds = 0;

document.getElementById('start-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        stopwatchDisplay.textContent = formatTime(stopwatchSeconds);
    }, 1000);
});

document.getElementById('stop-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
});

document.getElementById('reset-stopwatch').addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    stopwatchDisplay.textContent = formatTime(stopwatchSeconds);
});

// Timer
const timerDisplay = document.getElementById('timer-display');
const timerInput = document.getElementById('timer-input');

document.getElementById('set-timer').addEventListener('click', () => {
    timerTime = parseInt(timerInput.value) || 0;
    timerDisplay.textContent = formatTime(timerTime);
});

document.getElementById('add-1m').addEventListener('click', () => {
    timerTime += 60;
    timerDisplay.textContent = formatTime(timerTime);
});

document.getElementById('start-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timerTime > 0) {
            timerTime--;
            timerDisplay.textContent = formatTime(timerTime);
        } else {
            clearInterval(timerInterval);
            alert('Time is up!');
        }
    }, 1000);
});

document.getElementById('stop-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerTime = 0;
    timerDisplay.textContent = formatTime(timerTime);
});

// Helper function to format time
function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}