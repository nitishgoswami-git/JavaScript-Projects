
    let startTime;
    let elapsedTime = 0;
    let isRunning = false;
    let intervalID;

    document.querySelector('#startBtn').addEventListener('click',startWatch)
    document.querySelector('#stopBtn').addEventListener('click',stopWatch)
    document.querySelector('#resetBtn').addEventListener('click',resetWatch)

    function startWatch(){
        if(!isRunning){
            startTime = Date.now() - elapsedTime;
            intervalID = setInterval(updateWatch,1000);
            isRunning = true
        }

    }
    function stopWatch(){
        clearInterval(intervalID)
        isRunning = false
    }
    function updateWatch(){
        elapsedTime = Date.now() - startTime
        displayTime(elapsedTime)

    }
    function resetWatch(){
        clearInterval(intervalID)
        displayTime(0);
        elapsedTime = 0
        isRunning = false

    }
    function displayTime(time) {
    let totalSeconds = Math.floor(time / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    
    document.getElementById("display").innerHTML =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
