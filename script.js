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
var questionContainerElement = document.querySelector(".questions");

var answerElement1 = document.querySelector("#answer1");
var answerElement2 = document.querySelector("#answer2");
var answerElement3 = document.querySelector("#answer3");
var answerElement4 = document.querySelector("#answer4");

var answerElement = document.querySelector(".btn");

var numberOfQuestion = 1;
var score = 0;

console.log(answerElement1.textContent);
console.log(answerElement2.textContent);
console.log(answerElement3.textContent);
console.log(answerElement4.textContent);

var question1Element = document.querySelector(".question-one");

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

    // startQuiz();
    time();
    var whichNumberOfQuestion = question1();
    console.log(whichNumberOfQuestion);
    return whichNumberOfQuestion

});

answerElement1.addEventListener("click", function () {
    console.log(event);
    console.log(numberOfQuestion);
    var questionRightOrWrong = checkWhichQuestion(numberOfQuestion, answerElement1.textContent);
    console.log(questionRightOrWrong);
    if (questionRightOrWrong === true) {
        score++
        console.log(score);
        numberOfQuestion++;
        question2(numberOfQuestion);
        console.log(score + " score is");
    }
    else {
        score--;
        console.log(score);
        numberOfQuestion++;
        question2(numberOfQuestion);
        console.log(score + " score is");
    }

});

answerElement2.addEventListener("click", function () {
    console.log(event);
    console.log(numberOfQuestion);
    var questionRightOrWrong = checkWhichQuestion(numberOfQuestion, answerElement2.textContent);
    console.log(questionRightOrWrong);
    if (questionRightOrWrong === true) {
        alert("true");
        score++
        console.log(score);
        numberOfQuestion++;
        question2(numberOfQuestion);
        console.log(score + " score is");
    }
    else {
        alert("false");
        score--;
        console.log(score);
        numberOfQuestion++;
        question2(numberOfQuestion);
        console.log(score + " score is");
    }

});

// answerElement3.addEventListener("click", function () {
//     console.log(event);
//     console.log(numberOfQuestion);
//     checkWhichQuestion(numberOfQuestion);
// });

// answerElement4.addEventListener("click", function () {
//     console.log(event);
//     console.log(numberOfQuestion);
//     checkWhichQuestion(numberOfQuestion);
// });


// answerElement.addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log(event);
// })

//starts the quiz
// function startQuiz() {

//     time();
//     question1();

// }

//display question 1
function question1() {
    var questionOne = "how old is Dex?";
    question1Element.textContent = questionOne;
    var answerarrayq1 = [
        { text: "5", iscorrect: false },
        { text: "2", iscorrect: true },
        { text: "3", iscorrect: false },
        { text: "1", iscorrect: false }
    ]

    answerElement1.textContent = answerarrayq1[0].text;
    answerElement2.textContent = answerarrayq1[1].text;
    answerElement3.textContent = answerarrayq1[2].text;
    answerElement4.textContent = answerarrayq1[3].text;
    numberOfQuestion = 1;

    // return [numberOfQuestion(), answerarrayq1.iscorrect()];
    return numberOfQuestion;
}

function question2(a) {
    var questionOne = "How many lb's does he weigh";
    question1Element.textContent = questionOne;
    var answerarrayq1 = [
        { text: "22", iscorrect: false },
        { text: "25", iscorrect: false },
        { text: "28", iscorrect: true },
        { text: "33", iscorrect: false }
    ]

    answerElement1.textContent = answerarrayq1[0].text;
    answerElement2.textContent = answerarrayq1[1].text;
    answerElement3.textContent = answerarrayq1[2].text;
    answerElement4.textContent = answerarrayq1[3].text;
    numberOfQuestion = 2;

    // return [numberOfQuestion(), answerarrayq1.iscorrect()];
    return numberOfQuestion;
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


function checkWhichQuestion(a, b) {
    console.log(a, b);
    var numberOfQuestion = a;
    // console.log(answerElement1.textContent + " El 1");
    // console.log(answerElement2.textContent + " El 1");
    // console.log(answerElement3.textContent + " El 1");
    // console.log(answerElement4.textContent + " El 1");
    if (a == 1 && b == 2) {
        console.log(answerElement2.textContent + " This is the value of answerElement2.textConect");
        console.log(a + " This is the value of a");
        console.log(typeof a);
        console.log(typeof answerElement2.textContent);
        alert("you are right");
        return true;
    }
    else {
        console.log(answerElement1.textContent + " This is the value of answerElement2.textConect");
        alert("you are wrong");
        return false;
    }

}
// function checkAnswer() {
//     if {
//     }
//     else
// }
