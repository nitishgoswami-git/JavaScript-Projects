const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");

let session = 0;
let isRunning = false;
let startTime = 25 * 60; // 25 minutes in seconds
let intervalID;
let timeBreak = false;

start.addEventListener("click", startClock);
pause.addEventListener("click", pauseClock);
reset.addEventListener("click", resetClock);

function startClock() {
    if (!isRunning) {
        intervalID = setInterval(updateWatch, 1000);
        isRunning = true;
    }
}

function pauseClock() {
    clearInterval(intervalID);
    isRunning = false;
}

function updateWatch() {
    if (startTime > 0) {
        startTime--;
        displayTime(startTime);
    } else {
        clearInterval(intervalID);
        isRunning = false;

        const statusText = document.querySelector(".status");

        if (!timeBreak) {
            startTime = 5 * 60;
            timeBreak = true;
            session++;
            document.querySelector(".session-count").innerHTML = 
                `Session Completed: <span id="session-number">${session}</span>`;
            statusText.innerHTML = "Break Time!";
            statusText.style.color = "red";
        } else {
            startTime = 25 * 60; 
            timeBreak = false;
            statusText.innerHTML = "Work Session";
            statusText.style.color = "#ffaa00";
        }

        displayTime(startTime);
        startClock(); 
    }
}

function resetClock() {
    clearInterval(intervalID);
    isRunning = false;
    startTime = 25 * 60; 
    session = 0;
    timeBreak = false;
    document.querySelector(".session-count").innerHTML = 
        `Session Completed: <span id="session-number">${session}</span>`;
    document.querySelector(".status").innerHTML = "Work Session";
    document.querySelector(".status").style.color = "#ffaa00";
    displayTime(startTime);
}

function displayTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    document.querySelector(".timer").innerHTML =
        `<span id="minutes">${String(minutes).padStart(2, '0')}</span>:<span id="seconds">${String(seconds).padStart(2, '0')}</span>`;
}
