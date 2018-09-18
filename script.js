const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const inner = document.querySelector("#inner");
let timer = [0,0,0,0];
let interval;
let timeRunning = false;
// Run a standard minute/second/hundredths timer:
function runTimer(){
    let currTime = `${timer[0]< 10?"0"+timer[0]:timer[0]}:${timer[1]< 10?"0"+timer[1]:timer[1]}:${timer[2]< 10?"0"+timer[2]:timer[2]}`;
    theTimer.innerHTML = currTime;
    timer[3]++;
    timer[0] = Math.floor(((timer[3]/100)/60));
    console.log(timer[0]);
    timer[1] = Math.floor((timer[3]/100)-(timer[0]*60));
    console.log(timer[1]);
    timer[2] = Math.floor((timer[3])- (timer[1]*100)-(timer[0]*6000));
    console.log(timer[2]);
}


// Match the text entered with the provided text on the page:
function spellCheck(e){
    let textEntered = testArea.value;
    let originMatch = originText.substring(0,textEntered.length);
    if(textEntered == originText){
        clearInterval(interval);
        testWrapper.style.borderColor ="green";
    }else{
        if(textEntered == originMatch){
            testWrapper.style.borderColor ="blue";
        }else{
            testWrapper.style.borderColor ="orange";
        }
    }
}

// Start the timer:
function startTimer(e){
    let testArealength = testArea.value.length;
    if(testArealength === 0 && !timeRunning){
        timeRunning = true;
        interval =  setInterval(runTimer,10);
    }
}

// Reset everything:
function reset(){
    clearInterval(interval);
    interval=null;
    testArea.value = "";
    timer = timer;
    timeRunning = false;
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", startTimer,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);

