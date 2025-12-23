let score = 0;
let wicket = 0;
let mode = "solo";
let currentPlayer = 1;

function startGame(m){
    mode = m;
    score = 0;
    wicket = 0;
    currentPlayer = 1;
    updateUI("Game Started!");
}

function bat(){
    if(wicket >= 10){
        updateUI("🏁 Game Over!");
        return;
    }

    let outcomes;

    if(mode === "ai_easy"){
        outcomes = [1,2,3,4,4,6,"OUT"];
    }
    else if(mode === "ai_hard"){
        outcomes = [0,1,2,"OUT","OUT",4];
    }
    else{
        outcomes = [0,1,2,3,4,6,"OUT"];
    }

    let play = outcomes[Math.floor(Math.random() * outcomes.length)];

    if(play === "OUT"){
        wicket++;
        updateUI(`❌ OUT!`);
    }else{
        score += play;
        updateUI(`✅ ${play} Run${play>1?"s":""}`);
    }

    if(wicket >= 10){
        updateUI(`🏏 Final Score: ${score}`);
        saveHighScore();
    }
}

function updateUI(msg){
    document.getElementById("score").innerText = score;
    document.getElementById("wicket").innerText = wicket;
    document.getElementById("result").innerText = msg;
}

function saveHighScore(){
    let best = localStorage.getItem("rr_cricket_best") || 0;
    if(score > best){
        localStorage.setItem("rr_cricket_best", score);
        document.getElementById("result").innerText += " 🏆 New High Score!";
    }
}