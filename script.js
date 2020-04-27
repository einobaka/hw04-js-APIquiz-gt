var inPlayer = document.querySelector("#player");
var inSubmit = document.querySelector("#submit");
var outTimer = document.querySelector("#timer");
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
        qAndA.firstQuestion = "Which of the following will allow a new element to be added into the HTML document? ";
        qAndA.firstAnswer = ".append ";
        qAndA.secondAnswer = ".repair ";
        qAndA.thirdAnswer = ".additionally ";
        qAndA.fourthAnswer = ".contrast ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer + qAndA.correctAnswer;
    },

    qAndATwo: function () {
        qAndA.firstQuestion = "question test 2 ";
        qAndA.firstAnswer = "answer 1-2 ";
        qAndA.secondAnswer = "answer 2-2 ";
        qAndA.thirdAnswer = "answer 3-2 ";
        qAndA.fourthAnswer = "answer 4-2 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAThree: function () {
        qAndA.firstQuestion = "question test 3 ";
        qAndA.firstAnswer = "answer 1-3 ";
        qAndA.secondAnswer = "answer 2-3 ";
        qAndA.thirdAnswer = "answer 3-3 ";
        qAndA.fourthAnswer = "answer 4-3 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAFour: function () {
        qAndA.firstQuestion = "question test 4 ";
        qAndA.firstAnswer = "answer 1-4 ";
        qAndA.secondAnswer = "answer 2-4 ";
        qAndA.thirdAnswer = "answer 3-4 ";
        qAndA.fourthAnswer = "answer 4-4 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAFive: function () {
        qAndA.firstQuestion = "question test 5 ";
        qAndA.firstAnswer = "answer 1-5 ";
        qAndA.secondAnswer = "answer 2-5 ";
        qAndA.thirdAnswer = "answer 3-5 ";
        qAndA.fourthAnswer = "answer 4-5 ";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

};

var qOnePoints = "";
//Answer blocks for the quiz
blockOne = function () {

    outAnswer.setAttribute("class", "list-group-item");
    console.log(qAndA.qAndAOne())
    // Question one
    outQuestion.textContent = qAndA.firstQuestion;
    outQuestion.setAttribute("class", "list-group-item list-group-item-info");
    console.log(outQuestion);

    // Answer block one - answer 1
    answerList1 = document.createElement("li");
    answerList1.textContent = qAndA.firstAnswer;
    answerList1.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList1);
    // Correct answer insert
    answerList1.setAttribute("id", "answer");
    qOnePoints = 20;

    // Answer block one - answer 2
    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    outAnswer.append(answerList2);
    qOnePoints = -20;

    // Answer block one - answer 3
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList3);
    qOnePoints = -20;

    // Answer block one - answer 4
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);
    qOnePoints = -20;

    return qOnePoints;


};
console.log(qOnePoints);


blockTwo = function () {

    console.log(qAndA.qAndATwo())
    // Question two
    outQuestion.textContent = qAndA.firstQuestion;
    outQuestion.setAttribute("class", "list-group-item list-group-item-info");

    // Answer block two - answer 1
    answerList1 = document.createElement("li");
    answerList1.textContent = qAndA.firstAnswer;
    answerList1.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList1);

    // Answer block two - answer 2
    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    outAnswer.append(answerList2);

    // Answer block two - answer 3
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList3);

    // Answer block two - answer 4
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);
    // Correct answer insert
    answerList4.setAttribute("id", "answer");

};

blockThree = function () {

    console.log(qAndA.qAndAThree())
    // Question three
    outQuestion.textContent = qAndA.firstQuestion;
    outQuestion.setAttribute("class", "list-group-item list-group-item-info");

    // Answer block three - answer 1
    answerList1 = document.createElement("li");
    answerList1.textContent = qAndA.firstAnswer;
    answerList1.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList1);

    // Answer block three - answer 2
    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    outAnswer.append(answerList2);

    // Answer block three - answer 3
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList3);
    // Correct answer insert
    answerList3.setAttribute("id", "answer");

    // Answer block three - answer 4
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);

};

blockFour = function () {

    console.log(qAndA.qAndAFour())
    // Question four
    outQuestion.textContent = qAndA.firstQuestion;
    outQuestion.setAttribute("class", "list-group-item list-group-item-info");

    // Answer block four - answer 1
    answerList1 = document.createElement("li");
    answerList1.textContent = qAndA.firstAnswer;
    answerList1.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList1);

    // Answer block four - answer 2
    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    outAnswer.append(answerList2);
    // Correct answer insert
    answerList2.setAttribute("id", "answer");

    // Answer block four - answer 3
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList3);

    // Answer block four - answer 4
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);

};

blockFive = function () {

    console.log(qAndA.qAndAFive())
    // Question five
    outQuestion.textContent = qAndA.firstQuestion;
    outQuestion.setAttribute("class", "list-group-item list-group-item-info");

    // Answer block five - answer 1
    answerList1 = document.createElement("li");
    answerList1.textContent = qAndA.firstAnswer;
    answerList1.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList1);

    // Answer block five - answer 2
    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    // Correct answer insert
    answerList2.setAttribute("id", "answer");
    outAnswer.append(answerList2);

    // Answer block five - answer 3
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList3);

    // Answer block five - answer 4
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);

};

outAnswer.addEventListener("click", function (e) {
    e.preventDefault();

    e.target.setAttribute("class", "list-group-item list-group-item-action active");
    outAnswer.setAttribute("class", "list-group-item disabled");

    if (e.target.matches("#answer")) {
        outResult.textContent = "Correct!";
        outResult.setAttribute("class", "alert alert-success");

    }
    else {
        outResult.textContent = "Incorrect!"
        outResult.setAttribute("class", "alert alert-danger")

    };
});
// Timer for the quiz
var secondsLeft = 61;
var timerInterval;
function theTimer() {
    timerInterval = setInterval(screenTimer, 1000);
};

function screenTimer() {
    secondsLeft--;
    outTimer.textContent = secondsLeft;
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        inSubmit.textContent = "GAME OVER";
        inSubmit.setAttribute("id", "finish");

    }
};

// Game start where user hits "submit" and kicks off the game
inSubmit.addEventListener("click", gameStart);
function gameStart(e) {
    // First question block and player name for storage
    if (e.target.matches("#submit")) {
        var playerName = prompt("Please enter your name.");
        blockOne();
        theTimer()
        return inPlayer.textContent = playerName,
            inSubmit.textContent = "Next Question",
            inSubmit.setAttribute("id", "submit1"),
            console.log(playerName);
    }
    // Second question block
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
    // Third question block
    else if (e.target.matches("#submit2")) {
        while (outAnswer.hasChildNodes()) {
            outAnswer.removeChild(outAnswer.childNodes[0]);
        }
        outAnswer.setAttribute("class", "list-group-item ");
        blockThree();
        outResult.textContent = "";
        outResult.setAttribute("class", "");
        inSubmit.setAttribute("id", "submit3");
    }
    // Fourth question block
    else if (e.target.matches("#submit3")) {
        while (outAnswer.hasChildNodes()) {
            outAnswer.removeChild(outAnswer.childNodes[0]);
        }
        outAnswer.setAttribute("class", "list-group-item ");
        blockFour();
        outResult.textContent = "";
        outResult.setAttribute("class", "");
        inSubmit.setAttribute("id", "submit4");
    }
    // Fifth question block
    else if (e.target.matches("#submit4")) {

        while (outAnswer.hasChildNodes()) {
            outAnswer.removeChild(outAnswer.childNodes[0]);
        }
        outAnswer.setAttribute("class", "list-group-item ");
        blockFive();
        outResult.textContent = "";
        outResult.setAttribute("class", "");
        return inSubmit.textContent = "GAME OVER",
            inSubmit.setAttribute("id", "finish");

    }
    // Clear screen for player score
    else if (e.target.matches("#finish")) {

        clearScreen = function () {
            while (outAnswer.hasChildNodes()) {
                outAnswer.removeChild(outAnswer.childNodes[0]);
            }
            outAnswer.setAttribute("class", "");
            outQuestion.setAttribute("class", "")
            outQuestion.textContent = "";
            outResult.setAttribute("class", "")
            outResult.textContent = "";
        };
        clearScreen();
    };

};
