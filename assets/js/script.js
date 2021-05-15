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

    }, 1000);

    nextQuestion();
}

function endGame() {
    clearInterval(timer);

    var quizContent = `
    <h2>Game Over!</h2>
    <h3>You got a + score / 20 + questions correct!</h3>
    <input type="text" id="name" placeholder="Initials">
    <button onclick="setscore()">Set Score</button>`;

    document.getElementById("quizBody").innerHTML = quizContent;
}


function setScore() {
    localStorage.setItem("highscore",score);
    localStorage.setItem("highscoreName", document.getElementById('name').value)
    getScore();
}

function getScore() {
    var quizContent = `
    <h2>` +localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1> <br>
    <button onclick="clearScore()">Clear Score</button>
    <button onclick="resetGame()">Play Again</button>
    `;

    document.getElementById("quizBody").innerHTML = quizConent;
}

function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "")

    resetGame();

}

function resetGame() {

}

function corect() {
    score += 20;
    next();
}

function nextQuestion() {
    
}