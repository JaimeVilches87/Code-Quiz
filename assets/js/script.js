var questions = [{
    title: "Who killed the Emperor?",
    choices: ["Luke", "Leila", "Darth Vader", "He didn't die"],
    answer: "Darth Vader"
},
{
    title: "What is the color of Obi-Wan's lightsaber?",
    choices: ["Purple", "Green", "Blue", "Red"],
    answer: "Blue"
},
{
    title: " Who tells Luke, 'Join me and I will complete your training'?",
    choices: ["Yoda", "Obi-Wan", "The Emperor", "Darth Vader"],
    answer: "Darth Vader"
},
{
    title: "What is R2-D2's name often shortened to?",
    choices: ["D2", "R2", "RD", "22"],
    answer: "R2"
},
{
    title: "Who told Luke, 'Size matters not'?",
    choices: ["Obi-Wan", "No one", "Anakin", "Yoda"],
    answer: "Yoda"
}
]

//setting values for variables
var score = 0;
var currentQuestion = 0;
var timeLeft = 0;
var timer;

//starts quiz and timer
function start() {

    timeLeft = 75;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }

    }, 1000);

    nextQuestion();
}

//ends game
function endGame() {
    clearInterval(timer);

    var quizResult = `
    <h2>Game Over!</h2>
    <h3>You got a ` + score / 20 + ` questions correct!</h3>
    <input type="text" style="text-transform:uppercase" id="name"  placeholder="Initials" onkeyup="this.value = this.value.toUpperCase();">
    <button onclick="setScore()">Save Score</button>`;

    document.getElementById("quizBody").innerHTML = quizResult;

}


//stores scores on local storage
function setScore() {
    
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value,)
    
    getScore();
}

function getScore() {

    var quizScore = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1> <br>
    <button onclick="clearScore()">Clear Score</button>
    <button onclick="resetGame()">Play Again</button>
    `;

    document.getElementById("quizBody").innerHTML = quizScore;
}

//clears score value and name when the user selects clear score
function clearScore() {
    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "")

    resetGame();

}

//resets game
function resetGame() {
    clearInterval(timer);
    score = 0;
    currentQuestion = 0;
    timeLeft = 0;
    timer = null;

    document.getElementById("timeLeft").innerHTML = timeLeft;

    var quizReset = `
    <h1>Star Wars Quiz</h1> 
    <h3>Click to Play</h3>
    <button onclick="start()">Start</button>`;

    document.getElementById("quizBody").innerHTML = quizReset;

}

//reduces time when wrong answer chosen
function incorrect() {
    timeLeft -= 15;
    nextQuestion();
}

//increases score when correct answer chosen
function correct() {
    score += 20;
    nextQuestion();
}

//chooses next question and loops thru them
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion > questions.length - 1) {
        endGame();
        return;
    }

    var quizContent = "<h2>" + questions[currentQuestion].title + "<h/2><br>"

    for (var buttonLoop = 0; buttonLoop < questions[currentQuestion].choices.length; buttonLoop++) {
        var buttonCode = "<button onclick=\"[ANS]\">[CHOICE]</button>";
        buttonCode = buttonCode.replace("[CHOICE]", questions[currentQuestion].choices[buttonLoop]);
        if (questions[currentQuestion].choices[buttonLoop] == questions[currentQuestion].answer) {
            buttonCode = buttonCode.replace("[ANS]", "correct()");
        } else {
            buttonCode = buttonCode.replace("[ANS]", "incorrect()");
        }
        quizContent += buttonCode

    }
    document.getElementById("quizBody").innerHTML = quizContent;
}
