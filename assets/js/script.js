var questions = []

var score = 0;
var currentQuestion = -1;
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

    next();
}
