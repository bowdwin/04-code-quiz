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


// start quicz
// dialog goes away
// 4 buttons select one
// 3 questions when you select right one play a sound and display correct

// all done
// final score is 30 enter your initals
// create a high scores list
// go back

var startQuizElement = document.querySelector(".start-btn");
var timeElement = document.querySelector(".time");
var questionContainerElement = document.querySelector(".questions")

var answerElement1 = document.querySelector("#answer1")
var answerElement2 = document.querySelector("#answer2")
var answerElement3 = document.querySelector("#answer3")
var answerElement4 = document.querySelector("#answer4")
console.log(answerElement1.textContent);
console.log(answerElement2.textContent);
console.log(answerElement3.textContent);
console.log(answerElement4.textContent);

var question1Element = document.querySelector(".question-one")

// var answerElement1 = document.querySelector(".answer-one")
// var answerElement2 = document.querySelector(".answer-two")
// var answerElement3 = document.querySelector(".answer-three")
// var answerElement4 = document.querySelector(".answer-four")

var timer = 30;


document.querySelector(".questions").hidden = true;


startQuizElement.addEventListener("click", function () {
    document.querySelector(".start-btn").hidden = true;
    document.querySelector(".questions").hidden = false;
    document.querySelector(".title").hidden = true;
    // questionContainerElement.classList.remove('hide')
    // questionContainerElement.classList.remove('hide')

    startQuiz();
    question();
});



//starts the quiz
function startQuiz() {
    question();
    time();
}

//display question 1
function question() {
    var questionOne = "how old is Dex?";
    question1Element.textContent = questionOne;
    var answerarray = [
        { text: "5", iscorrect: false },
        { text: "2", iscorrect: true },
        { text: "3", iscorrect: false },
        { text: "1", iscorrect: false }
    ]

    answerElement1.textContent = answerarray[0].text;
    answerElement2.textContent = answerarray[1].text;
    answerElement3.textContent = answerarray[2].text;
    answerElement4.textContent = answerarray[3].text;



}

function time() {
    var timerInterval = setInterval(function () {
        timer--;
        timeElement.textContent = timer;
        if (timer === 0) {
            clearInterval(timerInterval);
            // sendMessage();
            // alert("time is up");
        }


    }, 1000);
}


// var questions = [
//     {
//         question: "how old is dex?"
//         answer: [
//             { text: "5", iscorrect: false },
//             { text: "2", iscorrect: true },
//             { text: "3" iscorrect: false },
//             { text: "1" iscorrect: false }
//         ]
//     }
// ]


answerElement1.addEventListener("click", function () {
});
answerElement2.addEventListener("click", function () {
});
answerElement3.addEventListener("click", function () {
});
answerElement4.addEventListener("click", function () {
});




