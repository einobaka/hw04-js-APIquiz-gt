var inPlayer = document.querySelector("#player");
var inSubmit = document.querySelector("#submit");
var outHiTimer = document.querySelector("#timer");
var outScore = document.querySelector("#score");
var outHiScore = document.querySelector("#hiscore");
var outQuestion = document.querySelector("#question");
var outAnswer = document.querySelector("#answer");
var outResult = document.querySelector("#result");


//create buttons for answers
var qAndA = {
    firstQuestion: "",
    firstAnswer: "",
    secondAnswer: "",
    thirdAnswer: "",
    fourthAnswer: "",

    qAndAOne: function () {
        qAndA.firstQuestion = "question test ";
        qAndA.firstAnswer = "answer 1 ";
        qAndA.secondAnswer = "answer 2 ";
        qAndA.thirdAnswer = "answer 3 ";
        qAndA.fourthAnswer = "answer 4 ";
        
        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer + qAndA.correctAnswer;
    },

    qAndATwo: function () {
        qAndA.firstQuestion = "question test 2 ";
        qAndA.firstAnswer = "answer 1 3 ";
        qAndA.secondAnswer = "answer 2 4 ";
        qAndA.thirdAnswer = "answer 3 5 ";
        qAndA.fourthAnswer = "answer 4 6 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAThree: function () {
        qAndA.firstQuestion = "question test ";
        qAndA.firstAnswer = "answer 1 ";
        qAndA.secondAnswer = "answer 2 ";
        qAndA.thirdAnswer = "answer 3 ";
        qAndA.fourthAnswer = "answer 4 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAFour: function () {
        qAndA.firstQuestion = "question test ";
        qAndA.firstAnswer = "answer 1 ";
        qAndA.secondAnswer = "answer 2 ";
        qAndA.thirdAnswer = "answer 3 ";
        qAndA.fourthAnswer = "answer 4 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAFive: function () {
        qAndA.firstQuestion = "question test ";
        qAndA.firstAnswer = "answer 1 ";
        qAndA.secondAnswer = "answer 2 ";
        qAndA.thirdAnswer = "answer 3 ";
        qAndA.fourthAnswer = "answer 4 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

};
console.log(qAndA.qAndAOne())
console.log(qAndA.correctAnswer)

//answer block to be re-used//

qAndABlockOne = function () {

    outQuestion.textContent = qAndA.firstQuestion;
    outQuestion.setAttribute("class", "list-group-item list-group-item-info");
    console.log(outQuestion);

    answerList1 = document.createElement("li");
    answerList1.textContent = qAndA.firstAnswer;
    answerList1.setAttribute("class", "list-group-item list-group-item-action");
    answerList1.setAttribute("id", "answer");
    outAnswer.append(answerList1);

    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    
    outAnswer.append(answerList2);
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    
    outAnswer.append(answerList3);
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);

};



//answer event listener complete
outAnswer.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
    e.target.setAttribute("class", "list-group-item list-group-item-action active");
    if (e.target.matches("#answer")) {
        outResult.textContent = "Correct!"
        outResult.setAttribute("class", "alert alert-success")
    }
    else {
        outResult.textContent = "Incorrect!"
        outResult.setAttribute("class", "alert alert-danger")
    };
    outAnswer.setAttribute("class", "list-group-item list-group-item-action disabled");
    // clear the board after
});

// Grab player information and store it later
inSubmit.addEventListener("click", askName);
function askName(e) {
    if (e.target.matches("#submit")) {
        var playerName = prompt("Please enter your name.");
        qAndABlockOne();
        return inPlayer.textContent = playerName,
            inSubmit.textContent = "Next Question",
            inSubmit.setAttribute("id", "submit2"),
            console.log(playerName);
    }
    if (e.target.matches("#submit2")) {
        qAndABlockTwo();
    };




};


//create questions and they have to be random, maybe create another questions page??

// inSubmit.addEventListener("click", qAndA);
// function qAndA() {
//     firstQuestion = '';

//     firstQuestion = document.createElement("button"),
//     firstQuestion.textContent = "test again",
//     console.log("this is a test");

//     // outAnswer.textContent = [q1.a2, q1.a3]; 
//     //the answer can come from a different webpage
// };

// fill a variable with button on HTML page

// var q1 = {
//     q: "question example 1",
//     a1: "answer 1",
//     a2: "blueblueblue2",
//     a3: "blueblueblue3",
// }





//figure this out later
// localStorage.setItem("player", inPlayer);
//Replace click to start with "RESTART GAME"

//Countdown of questions next to question?

// have an empty bar that flashes correct or incorrect?