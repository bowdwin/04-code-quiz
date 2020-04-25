var scores = JSON.parse(localStorage.getItem("item"));
if (scores === null) {
    var scores = [
    ]
}

var startQuizElement = document.querySelector("#start-btn");
var timeElement = document.querySelector(".time");
var questionContainerElement = document.querySelector(".questions");
var answerElement0 = document.querySelector("#answer0");
var answerElement1 = document.querySelector("#answer1");
var answerElement2 = document.querySelector("#answer2");
var answerElement3 = document.querySelector("#answer3");
var finalScoreIs = document.querySelector(".finalScore")
var submitForm = document.querySelector(".submit");
var originalContent = document.querySelector(".original");
var submitFormHighScoreBtn = document.querySelector("#submitHighScrBtn");
var highScoresPage = document.querySelector("#highscores");
var clearHighScoresbtn = document.querySelector("#clearHighScoresbtn");
var hideScorePara = document.querySelector(".hideScorePara");
var viewHighScoresbtn = document.querySelector("#viewHighScoresbtn");
var gobackbt = document.querySelector("#goBack");
var answerElement = document.querySelector(".btn");
var numberOfQuestion = 0;
var score = 0;
var answerElementPicked = 0;
var question1Element = document.querySelector(".question-one");
var wrongOrWriteDisplay = document.querySelector(".right-or-wrong-msg");
highScoresPage.hidden = true;
submitForm.hidden = true;
document.querySelector(".questions").hidden = true;
document.querySelector(".right-or-wrong-msg").hidden = true;
var timer = 60;
// var personObj = new personHighScoreObj("user", "score");
// console.log(personObj + " this is person object");
var answerarrayq = [
    {
        question: "Ned Stark had a sister who was abducted by the mad king. What was her name?",
        answers: [
            { text: "Lysa", iscorrect: false },
            { text: "Lorena", iscorrect: false },
            { text: "Leanna", iscorrect: false },
            { text: "Lyanna", iscorrect: true }
        ]
    },
    {
        question: "What is the name of Arya's Direwolf",
        answers: [
            { text: "Grey Wind", iscorrect: false },
            { text: "Nightfall", iscorrect: false },
            { text: "Nymeria", iscorrect: true },
            { text: "Lady", iscorrect: false }
        ]
    },
    {
        question: "What is Ser Davos's nickname? ",
        answers: [
            { text: "The Onion Knight", iscorrect: true },
            { text: "Blackfish", iscorrect: false },
            { text: "Little Figer", iscorrect: false },
            { text: "Halfblood", iscorrect: false }
        ]
    },
    {
        question: "Who Created the plot to kill king Joffery?",
        answers: [
            { text: "Littlefinger", iscorrect: false },
            { text: "tyrion", iscorrect: false },
            { text: "Sansa", iscorrect: false },
            { text: "Maergery", iscorrect: true }
        ]
    },
    {
        question: "Wilfire is incredibly explosive, what substance can extinguish it?",
        answers: [
            { text: "Snow", iscorrect: false },
            { text: "Sand", iscorrect: true },
            { text: "Dragon's Blood", iscorrect: false },
            { text: "Ice", iscorrect: false }
        ]
    },
    {
        question: "What two substances can kill white walkers?",
        answers: [
            { text: "Dragon Breath and Wildfire", iscorrect: false },
            { text: "Valyrian Steel and Dragonglass", iscorrect: true },
            { text: "Valyrian Steel and dragon breath", iscorrect: false },
            { text: "Wilfire and Dragonglass", iscorrect: false }
        ]
    },
    {
        question: "Who created the Nightking",
        answers: [
            { text: "The Wildings", iscorrect: false },
            { text: "The Children of the Forest", iscorrect: true },
            { text: "The Mad King", iscorrect: false },
            { text: "The Red lady", iscorrect: false }
        ]
    },
]

var answerarrayqLength = answerarrayq.length;
// var highScore = new Object(name, score);
// console.log(highScore + " high score object")
// console.log(answerarrayq);
// console.log(answerarrayq1.answers[1]);
// console.log(answerarrayq[0].answers[0].text)
// console.log(answerarrayq[0].answers[0].iscorrect)
// console.log(answerarrayq.numberOfQuestion.answers.length);
startQuizElement.addEventListener("click", function () {
    beginQuiz();
    highScoresPage.hidden = true;
    document.querySelector("#start-btn").hidden = true;
    document.querySelector(".questions").hidden = false;
    document.querySelector(".title").hidden = true;
    gobackbt.hidden = true;
    // startQuiz();
    time();
    var numberOfQuestion = question();
    console.log(numberOfQuestion + "number of quest");
    // return whichNumberOfQuestion
});

function question() {
    setTimeout(function () {
        document.querySelector(".right-or-wrong-msg").hidden = true;
    }, 2000);

    console.log(numberOfQuestion + "number of question");
    console.log(answerarrayq[numberOfQuestion].question);
    question1Element.textContent = answerarrayq[numberOfQuestion].question;
    //need to add a loop for array here
    answerElement0.textContent = answerarrayq[numberOfQuestion].answers[0].text;
    answerElement1.textContent = answerarrayq[numberOfQuestion].answers[1].text;
    answerElement2.textContent = answerarrayq[numberOfQuestion].answers[2].text;
    answerElement3.textContent = answerarrayq[numberOfQuestion].answers[3].text;
    // return [numberOfQuestion(), answerarrayq1.iscorrect()];
    return numberOfQuestion;
}


// console.log(HTMLElementObject.click());
answerElement0.addEventListener("click", function () {
    answerElementPicked = 0;
    checkIfTrue();
    question();
});

answerElement1.addEventListener("click", function () {
    answerElementPicked = 1;
    checkIfTrue();
    question();
});

answerElement2.addEventListener("click", function () {
    answerElementPicked = 2;
    checkIfTrue();
    question();
});

answerElement3.addEventListener("click", function () {
    answerElementPicked = 3;
    checkIfTrue();
    question();
});
submitFormHighScoreBtn.addEventListener("click", function () {
    highScores();

});
clearHighScoresbtn.addEventListener("click", function () {
    clearHighScores();
});
viewHighScoresbtn.addEventListener("click", function () {
    showHighScore();
});
function checkIfTrue() {
    console.log(answerarrayq[numberOfQuestion].answers[answerElementPicked].iscorrect);
    if (answerarrayq[numberOfQuestion].answers[answerElementPicked].iscorrect === true) {
        drumSuccessSound();
        score++
        console.log(score);
        numberOfQuestion++;
        console.log(score + " score is");
        wrongOrWriteDisplay.textContent = "Enemy Damaged"
        document.querySelector(".right-or-wrong-msg").hidden = false;
    }
    else {
        stabWoundSound();
        console.log(score);
        numberOfQuestion++;
        console.log(score + " score is");
        wrongOrWriteDisplay.textContent = "Wounded - 10 sec!!";
        document.querySelector(".right-or-wrong-msg").hidden = false;
        timer -= 10;
    }
    answerarrayqLength--;
}
function time() {
    var timerInterval = setInterval(function () {
        timer--;
        timeElement.textContent = timer;
        if (timer <= 0 || answerarrayqLength <= 0) {
            clearInterval(timerInterval);
            gameOver();
            // alert("time is up");
        }
    }, 1000);
}


function gameOver() {
    timeElement.textContent = "";
    questionContainerElement.hidden = true;
    question1Element.textContent = "Game Over";
    // if (score < 0) {
    //     score = 0;
    // }
    finalScoreIs.textContent = "Your final score is " + score;
    submitForm.hidden = false;

}

function highScores() {
    saveHighScores();
    console.log(originalContent);
    originalContent.hidden = true;
    highScoresPage.hidden = false;
    displayHighScoresOutput();
}

function saveHighScores() {

    var names = document.querySelector("#enterName");

    scores.push({ name: names.value, score: score });
    console.log(scores + " Scores adrer push")
    var scoresStringed = JSON.stringify(scores);
    localStorage.setItem("item", scoresStringed);
}

function displayHighScoresOutput() {
    var highScoresPage = document.querySelector(".displayParaHighScore");
    console.log(scores);
    scores.sort(function (b, a) {
        return a.score - b.score
    })
    console.log(scores);
    for (var i = 0; i < scores.length; i++) {
        // answerElement0.textContent = answerarrayq[numberOfQuestion].answers[0].text;
        var locname = scores[i].name;
        console.log(locname);
        var locscore = scores[i].score;
        console.log(locscore);
        console.log(locname + " Score: " + locscore);
        var p2 = ("<p>" + " Score: " + locscore + " " + locname + "</p>");
        document.querySelector(".displayParaHighScore").insertAdjacentHTML('beforebegin', p2);
    }
    gobackbt.hidden = false;
    // highScoresPage.textContent = user;å
    // console.log(user + " this is the user entered and pulled");
}
function clearHighScores() {
    localStorage.clear();
    location.reload();
    // highScores();
}
function showHighScore() {
    displayHighScoresOutput();
    highScoresPage.hidden = false;
    gobackbt.hidden = true;
}

function playGotTheme() {
    var audio = document.getElementById("audio");
    audio.volume = 0.05;
    audio.play();
}

function stabWoundSound() {
    var stabwoundaudio = new Audio("sound/stab.mp3");
    stabwoundaudio.volume = .2;
    stabwoundaudio.play();
}
function drumSuccessSound() {
    var drumSuccessAudio = new Audio("sound/drumbs.mp3");
    drumSuccessAudio.volume = .2;
    drumSuccessAudio.play();
}
function beginQuiz() {
    var beingSound = new Audio("sound/isthisyourcommand.mp3");
    beingSound.volume = .2;
    beingSound.play();
}

