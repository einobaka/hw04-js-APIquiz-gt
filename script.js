var inPlayer = document.querySelector("#player");
var inSubmit = document.querySelector("#submit");
var outHiTimer = document.querySelector("#timer");
var outScore = document.querySelector("#score");
var outHiScore = document.querySelector("#hiscore");
var outQuestion = document.querySelector("#question");
var outAnswer = document.querySelector("#answerblock");
var outResult = document.querySelector("#result");


//create buttons for answers
var qAndA = {
    firstQuestion: "",
    firstAnswer: "",
    secondAnswer: "",
    thirdAnswer: "",
    fourthAnswer: "",

    qAndAOne: function () {
        qAndA.firstQuestion = "question test 0 ";
        qAndA.firstAnswer = "answer 1-0 ";
        qAndA.secondAnswer = "answer 2-0 ";
        qAndA.thirdAnswer = "answer 3-0 ";
        qAndA.fourthAnswer = "answer 4-0 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer + qAndA.correctAnswer;
    },

    qAndATwo: function () {
        qAndA.firstQuestion = "question test 1 ";
        qAndA.firstAnswer = "answer 1-1 ";
        qAndA.secondAnswer = "answer 2-1 ";
        qAndA.thirdAnswer = "answer 3-1 ";
        qAndA.fourthAnswer = "answer 4-1 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAThree: function () {
        qAndA.firstQuestion = "question test 2 ";
        qAndA.firstAnswer = "answer 1-2 ";
        qAndA.secondAnswer = "answer 2-2 ";
        qAndA.thirdAnswer = "answer 3-2 ";
        qAndA.fourthAnswer = "answer 4-2 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAFour: function () {
        qAndA.firstQuestion = "question test 3 ";
        qAndA.firstAnswer = "answer 1-3 ";
        qAndA.secondAnswer = "answer 2-3 ";
        qAndA.thirdAnswer = "answer 3-3 ";
        qAndA.fourthAnswer = "answer 4-3 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAFive: function () {
        qAndA.firstQuestion = "question test 4 ";
        qAndA.firstAnswer = "answer 1-4 ";
        qAndA.secondAnswer = "answer 2-4 ";
        qAndA.thirdAnswer = "answer 3-4 ";
        qAndA.fourthAnswer = "answer 4-4 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

};

console.log(qAndA.correctAnswer)

//answer block to be re-used//

blockOne = function () {

    outAnswer.setAttribute("class", "list-group-item");
    console.log(qAndA.qAndAOne())

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

blockTwo = function () {

    console.log(qAndA.qAndATwo())

    outQuestion.textContent = qAndA.firstQuestion;
    outQuestion.setAttribute("class", "list-group-item list-group-item-info");

    answerList1 = document.createElement("li");
    answerList1.textContent = qAndA.firstAnswer;
    answerList1.setAttribute("class", "list-group-item list-group-item-action");
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
    answerList4.setAttribute("id", "answer");
    outAnswer.append(answerList4);

};

blockThree = function () {

    console.log(qAndA.qAndAThree())

    outQuestion.textContent = qAndA.firstQuestion;
    outQuestion.setAttribute("class", "list-group-item list-group-item-info");

    answerList1 = document.createElement("li");
    answerList1.textContent = qAndA.firstAnswer;
    answerList1.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList1);

    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    outAnswer.append(answerList2);

    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    answerList4.setAttribute("id", "answer");
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
    outAnswer.setAttribute("class", "list-group-item disabled");
    if (e.target.matches("#answer")) {
        outResult.textContent = "Correct!"
        outResult.setAttribute("class", "alert alert-success")
    }
    else {
        outResult.textContent = "Incorrect!"
        outResult.setAttribute("class", "alert alert-danger")
    };

    // clear the board after
});

// Grab player information and store it later
inSubmit.addEventListener("click", askName);
function askName(e) {
    if (e.target.matches("#submit")) {
        var playerName = prompt("Please enter your name.");
        blockOne();
        return inPlayer.textContent = playerName,
            inSubmit.textContent = "Next Question",
            inSubmit.setAttribute("id", "submit1"),
            console.log(playerName);
    }
    else if (e.target.matches("#submit1")) {
        while (outAnswer.hasChildNodes()) {
            outAnswer.removeChild(outAnswer.childNodes[0]);
        }
        outAnswer.setAttribute("class", "list-group-item ");
        blockTwo();
        outResult.textContent = "";
        outResult.setAttribute("class", "");
        inSubmit.setAttribute("id", "submit2");
    }
    else if (e.target.matches("#submit2")) {
        while (outAnswer.hasChildNodes()) {
            outAnswer.removeChild(outAnswer.childNodes[0]);
        }
        outAnswer.setAttribute("class", "list-group-item ");
        blockThree();
        outResult.textContent = "";
        outResult.setAttribute("class", "");
        inSubmit.setAttribute("id", "submit3");
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