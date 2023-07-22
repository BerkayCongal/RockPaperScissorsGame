const playerScoreEl  = document.querySelector("#playerScore");
const cpuScoreEl = document.querySelector("#cpuScore");
const tasBtn = document.querySelector("#tasBtn");
const kagitBtn = document.querySelector("#kagitBtn");
const makasBtn = document.querySelector("#makasBtn");

tasBtn.addEventListener("click", playerActionHandler);
kagitBtn.addEventListener("click", playerActionHandler);
makasBtn.addEventListener("click", playerActionHandler);

const tanim = ["taş", "kagit", "makas"]

function playerForCpu() {
    return tanim[Math.floor(Math.random() * 3)].toLowerCase();
}

 let playerScore = 0;
 let cpuScore = 0;

function innerScoreCpu() { 
    cpuScoreEl.innerText = ++cpuScore;
}

function innerScorePlayer() {
    playerScoreEl.innerText = ++playerScore
}

function playerActionHandler() {
    play(this.innerText.toLowerCase());
}


function play(playerAction) {
    let cpuAction = playerForCpu();

    console.log(`player=> "${playerAction}" cpu=> "${cpuAction}"`) ;
    
    if(playerAction === cpuAction) {
        console.log("Berabere");
        return;
    }
    
    let isCpuWin = false

    if(playerAction === "taş" && cpuAction === "kagit") {
        isCpuWin = true;
    }

    if(playerAction === "kagit" && cpuAction === "makas") {
        isCpuWin = true;
    }

    if(playerAction == "makas" && cpuAction ==="taş") {
        isCpuWin = true
    }

    if (isCpuWin) {
        console.log("cpu Kazandı")
        innerScoreCpu();
    }
    else {
        console.log("Player kazandı");
        innerScorePlayer();
    }
 }
       

 


