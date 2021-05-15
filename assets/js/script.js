var questions = []

var score = 0;
var currentQuestion = 0;
var timeLeft = 0;
var timer;

function start() {

    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timerLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    };

    nextQuestion();
}

function endGame() {

}


function setScore() {

}

function getScore() {

}

function clearScore() {

}

function resetGame() {

}

function corect() {
    score += 20;
    next();
}

function nextQuestion() {
    
}