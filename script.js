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

// array that stores all the questions
var answerarrayq = [
    {
        question: "Ned Stark had a sister who was abducted by the mad king. what was her name?",
        answers: [
            { text: "Lysa", iscorrect: false },
            { text: "lOrena", iscorrect: false },
            { text: "leanNa", iscorrect: false },
            { text: "lyAnna", iscorrect: true }
        ]
    },
    {
        question: "who Was the first character to be called King of the North?",
        answers: [
            { text: "jon Snow", iscorrect: false },
            { text: "rOb Stark", iscorrect: true },
            { text: "neD stArk", iscorrect: false },
            { text: "edmure tulLy", iscorrect: false }
        ]
    },
    {
        question: "What is jOn Snow's reAl nAme?",
        answers: [
            { text: "joN", iscorrect: false },
            { text: "Aerys", iscorrect: false },
            { text: "aEgon", iscorrect: true },
            { text: "rhaeGar", iscorrect: false }
        ]
    },
    {
        question: "What is the name of arya's direwolf?",
        answers: [
            { text: "grey Wind", iscorrect: false },
            { text: "nightFall", iscorrect: false },
            { text: "nymeria", iscorrect: true },
            { text: "laDy", iscorrect: false }
        ]
    },
    {
        question: "What is ser davos's nickname?",
        answers: [
            { text: "the Onion knight", iscorrect: true },
            { text: "blAckfish", iscorrect: false },
            { text: "little Finger", iscorrect: false },
            { text: "halfblOod", iscorrect: false }
        ]
    },
    {
        question: "Who created the plot to kill king joffery?",
        answers: [
            { text: "little finger", iscorrect: false },
            { text: "tyrion", iscorrect: false },
            { text: "saNsa", iscorrect: false },
            { text: "maergeRy", iscorrect: true }
        ]
    },
    {
        question: "What substance can extinguish WildFire?",
        answers: [
            { text: "snOw", iscorrect: false },
            { text: "sand", iscorrect: true },
            { text: "dragoOn's blood", iscorrect: false },
            { text: "ice", iscorrect: false }
        ]
    },
    {
        question: "What was the name of Jon Snows Sword?",
        answers: [
            { text: "Oathkeeper", iscorrect: false },
            { text: "lightBringer", iscorrect: false },
            { text: "heartsBane", iscorrect: false },
            { text: "longClaw", iscorrect: true }
        ]
    },
    {
        question: "whIch dRagon waS the largeSt Dragon?",
        answers: [
            { text: "viSerion", iscorrect: false },
            { text: "rHaegal", iscorrect: false },
            { text: "bAlerion", iscorrect: true },
            { text: "droGon", iscorrect: false }
        ]
    },
    {
        question: "Who created the nightking?",
        answers: [
            { text: "the Wildings", iscorrect: false },
            { text: "the Children of the forest", iscorrect: true },
            { text: "the Mad king", iscorrect: false },
            { text: "the red Lady", iscorrect: false }
        ]
    },
]
var answerarrayqLength = answerarrayq.length;

// console.log(highScore + " high score object")
// console.log(answerarrayq);
// console.log(answerarrayq1.answers[1]);
// console.log(answerarrayq[0].answers[0].text)
// console.log(answerarrayq[0].answers[0].iscorrect)
// console.log(answerarrayq.numberOfQuestion.answers.length);

//begins the quiz
startQuizElement.addEventListener("click", function () {
    beginQuiz();
    highScoresPage.hidden = true;
    document.querySelector("#start-btn").hidden = true;
    document.querySelector(".questions").hidden = false;
    document.querySelector(".title").hidden = true;
    gobackbt.hidden = true;
    time();

    var numberOfQuestion = question();
    console.log(numberOfQuestion + "number of quest");
    // return whichNumberOfQuestion
});

//displays question
function question() {
    setTimeout(function () {
        document.querySelector(".right-or-wrong-msg").hidden = true;
    }, 3000);

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
    winOrDie();
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
        wrongOrWriteDisplay.style.color = "Green";
        wrongOrWriteDisplay.textContent = "Enemy DamagEd"
        document.querySelector(".right-or-wrong-msg").hidden = false;
    }
    else {
        stabWoundSound();
        console.log(score);
        numberOfQuestion++;
        wrongOrWriteDisplay.style.color = "Red";
        wrongOrWriteDisplay.textContent = "WoundEd - 10 sEc!!";
        document.querySelector(".right-or-wrong-msg").hidden = false;

        timer -= 7;
    }
    answerarrayqLength--;
}
function time() {

    var timerInterval = setInterval(function () {
        timer--;
        timeElement.textContent = timer;
        if (timer <= 20) {
            timeElement.style.color = "Red";
        }
        endSongPause();
        if (timer <= 0 || answerarrayqLength <= 0) {
            clearInterval(timerInterval);
            gameOver();
            stopThemeSOng();
        }
    }, 1000);
}


function gameOver() {
    timeElement.textContent = "";
    questionContainerElement.hidden = true;
    question1Element.textContent = "Game Over";
    endSong();
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
    var scoresStringed = JSON.stringify(scores);
    localStorage.setItem("item", scoresStringed);
}

function displayHighScoresOutput() {
    var highScoresPage = document.querySelector(".displayParaHighScore");
    scores.sort(function (b, a) {
        return a.score - b.score
    })
    console.log(scores);
    for (var i = 0; i < scores.length; i++) {
        // answerElement0.textContent = answerarrayq[numberOfQuestion].answers[0].text;
        var locname = scores[i].name;
        console.log(locname);
        var locscore = scores[i].score;
        // console.log(locscore);
        // console.log(locname + " Score: " + locscore);
        var p2 = ("<p>" + locscore + " : " + locname + "</p>");
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
    // audio.volume = 0.05;
    audio.play();
}

function stabWoundSound() {
    var stabwoundaudio = new Audio("sound/stab.mp3");
    stabwoundaudio.volume = .7;
    stabwoundaudio.play();
}
function drumSuccessSound() {
    var drumSuccessAudio = new Audio("sound/kingofnorth.mp3");
    drumSuccessAudio.volume = .7;
    drumSuccessAudio.play();
}
function beginQuiz() {
    var beingSound = new Audio("sound/isthisyourcommand.mp3");
    beingSound.volume = .7;
    beingSound.play();
}

function stopThemeSOng() {
    var audio = document.getElementById("audio");
    audio.pause();
}

function endSong() {
    var endSong = new Audio("sound/nightking.mp3");
    endSong.volume = .7;
    endSong.play();
}

function endSongPause() {
    var endSong = new Audio("sound/nightking.mp3");
    endSong.pause();
}
function winOrDie() {
    var winOrDie = new Audio("sound/winorDie.mp3");
    winOrDie.volume = .7;
    winOrDie.play();
}