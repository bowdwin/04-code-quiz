/* GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score */

// for (var i = 0; i < 0; i++);


// var scores = JSON.parse(localStorage.getItem("item"));

// console.log(scores, " this is the user after parse");
//create object to store name and pw





// var name = nameEl.value;
// var li = document.createElement("li");
// li.id = people.length;
// li.innerHTML = name + " <button>edit</button>";
// peopleListEl.append(li);

// console.log(scores);

// ...
// var tempScore = [];
// for (var index = 0; index < tempScore.length; index++) {
//     if (data[index].Status == "Valid") {
//         tempData.push(data);
//     }
// }
// data = tempData;



var startQuizElement = document.querySelector(".start-btn");
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

highScoresPage.hidden = true;
submitForm.hidden = true;

var answerElement = document.querySelector(".btn");

var numberOfQuestion = 0;
var score = 0;
var answerElementPicked = 0;

var question1Element = document.querySelector(".question-one");
var wrongOrWriteDisplay = document.querySelector(".right-or-wrong-msg");

document.querySelector(".questions").hidden = true;

document.querySelector(".right-or-wrong-msg").hidden = true;
var timer = 5;

// var personObj = new personHighScoreObj("user", "score");
// console.log(personObj + " this is person object");


var answerarrayq = [
    {
        question: "How old is dex?",
        answers: [
            { text: "5", iscorrect: false },
            { text: "2", iscorrect: true },
            { text: "3", iscorrect: false },
            { text: "1", iscorrect: false }
        ]
    },
    {
        question: "How much does he weigh?",
        answers: [
            { text: "22", iscorrect: false },
            { text: "21", iscorrect: false },
            { text: "31", iscorrect: true },
            { text: "41", iscorrect: false }
        ]
    },
    {
        question: "what is 2 + 2",
        answers: [
            { text: "1", iscorrect: false },
            { text: "2", iscorrect: false },
            { text: "3", iscorrect: false },
            { text: "4", iscorrect: true }
        ]
    },
    {
        question: "what is 3 + 3",
        answers: [
            { text: "22", iscorrect: false },
            { text: "21", iscorrect: false },
            { text: "31", iscorrect: true },
            { text: "41", iscorrect: false }
        ]
    },
    {
        question: "How much does he weigh?",
        answers: [
            { text: "22", iscorrect: false },
            { text: "21", iscorrect: false },
            { text: "31", iscorrect: true },
            { text: "41", iscorrect: false }
        ]
    },
]


// var highScore = new Object(name, score);
// console.log(highScore + " high score object")

console.log(answerarrayq);
// console.log(answerarrayq1.answers[1]);
console.log(answerarrayq[0].answers[0].text)
console.log(answerarrayq[0].answers[0].iscorrect)
// console.log(answerarrayq.numberOfQuestion.answers.length);




startQuizElement.addEventListener("click", function () {
    document.querySelector(".start-btn").hidden = true;
    document.querySelector(".questions").hidden = false;
    document.querySelector(".title").hidden = true;

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
    // document.querySelector(".right-or-wrong-msg").hidden = true;
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


function checkIfTrue() {
    console.log(answerarrayq[numberOfQuestion].answers[answerElementPicked].iscorrect);
    if (answerarrayq[numberOfQuestion].answers[answerElementPicked].iscorrect === true) {
        score++
        console.log(score);
        numberOfQuestion++;
        console.log(score + " score is");
        wrongOrWriteDisplay.textContent = "Correct!!"
        document.querySelector(".right-or-wrong-msg").hidden = false;
    }
    else {
        console.log(score);
        numberOfQuestion++;
        console.log(score + " score is");
        wrongOrWriteDisplay.textContent = "Wrong!!";
        document.querySelector(".right-or-wrong-msg").hidden = false;
        timer -= 10;
    }
}


function time() {
    var timerInterval = setInterval(function () {
        timer--;
        timeElement.textContent = timer;
        if (timer <= 0) {
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

    console.log(scores);
    // var highScoreNames = {
    //     name: names.value,
    //     finalScore: score.value,
    // };
    // console.log(highScores.finalScore);
    // console.log(highScoreNames.name + " this is high score names log in high score func");
    // var personObj = new personHighScoreObj(names, score);
    // console.log(personObj + " This is person obj in high score");
    // localStorage.setItem("name", JSON.stringify(names.value))=ok
    var scoresStringed = JSON.stringify(scores);
    // console.log(scoresStringed + " scores stringified");
    localStorage.setItem("item", scoresStringed);
    // var user = JSON.parse(localStorage.getItem("item"));
    // console.log(user, " this is the user after parse");
    // localStorage.setItem(JSON.stringify(scores));
    displayHighScoresOutput();

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

        var p2 = ("<p>" + locname + "Score: " + locscore + "</p>");
        document.querySelector(".displayParaHighScore").insertAdjacentHTML('beforebegin', p2);

    }

    // highScoresPage.textContent = user;
    // console.log(user + " this is the user entered and pulled");

}

function clearHighScores() {
    localStorage.clear();
    location.reload();
}