// Set variables from HTML page
var inPlayer = document.querySelector("#player");
var inSubmit = document.querySelector("#submit");
var outTimer = document.querySelector("#timer");
var outScore = document.querySelector("#score");
var outHiScore = document.querySelector("#hiscore");
var outQuestion = document.querySelector("#question");
var outAnswer = document.querySelector("#answerblock");
var outResult = document.querySelector("#result");


// Create buttons for answers
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
        qAndA.firstQuestion = "What does DOM stand for in JavaScript?";
        qAndA.firstAnswer = "Dont Over Master";
        qAndA.secondAnswer = "Document Obstructing Malfunction";
        qAndA.thirdAnswer = "Document Order Model";
        qAndA.fourthAnswer = "Document Object Model";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAThree: function () {
        qAndA.firstQuestion = "What does API stand for in terms programming language?";
        qAndA.firstAnswer = "Any Program Interface";
        qAndA.secondAnswer = "Apple Product Integration";
        qAndA.thirdAnswer = "Application Programming Interface";
        qAndA.fourthAnswer = "Alliance Programmers Incorporated";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAFour: function () {
        qAndA.firstQuestion = "Which of the following tags necessary in order to run JavaScript in a HTML page?";
        qAndA.firstAnswer = "<link></link>";
        qAndA.secondAnswer = "<script></script>";
        qAndA.thirdAnswer = "<p></p>";
        qAndA.fourthAnswer = "<java></java>";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

    qAndAFive: function () {
        qAndA.firstQuestion = "Whice of the following aretypes of loops in JavaScript?";
        qAndA.firstAnswer = "for, there, are, many ";
        qAndA.secondAnswer = "for, for/in, while, for/of";
        qAndA.thirdAnswer = "one, two, three, for";
        qAndA.fourthAnswer = "over, under, for, never";

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

};

// Answer blocks for the quiz
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
    answerList1.setAttribute("id", "answer1");

    // Answer block one - answer 2
    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    outAnswer.append(answerList2);
    answerList2.setAttribute("id", "incorrect");

    // Answer block one - answer 3
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList3);
    answerList3.setAttribute("id", "incorrect");

    // Answer block one - answer 4
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);
    answerList4.setAttribute("id", "incorrect");

};

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
    answerList1.setAttribute("id", "incorrect");

    // Answer block two - answer 2
    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    outAnswer.append(answerList2);
    answerList2.setAttribute("id", "incorrect");

    // Answer block two - answer 3
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList3);
    answerList3.setAttribute("id", "incorrect");

    // Answer block two - answer 4
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);
    // Correct answer insert
    answerList4.setAttribute("id", "answer2");

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
    answerList1.setAttribute("id", "incorrect");

    // Answer block three - answer 2
    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    outAnswer.append(answerList2);
    answerList2.setAttribute("id", "incorrect");

    // Answer block three - answer 3
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList3);
    // Correct answer insert
    answerList3.setAttribute("id", "answer3");

    // Answer block three - answer 4
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);
    answerList4.setAttribute("id", "incorrect");

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
    answerList1.setAttribute("id", "incorrect");

    // Answer block four - answer 2
    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    outAnswer.append(answerList2);
    // Correct answer insert
    answerList2.setAttribute("id", "answer4");

    // Answer block four - answer 3
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList3);
    answerList3.setAttribute("id", "incorrect");

    // Answer block four - answer 4
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);
    answerList4.setAttribute("id", "incorrect");

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
    answerList1.setAttribute("id", "incorrect");

    // Answer block five - answer 2
    answerList2 = document.createElement("li");
    answerList2.textContent = qAndA.secondAnswer;
    answerList2.setAttribute("class", "list-group-item list-group-item-action")
    // Correct answer insert
    outAnswer.append(answerList2);
    answerList2.setAttribute("id", "answer5");

    // Answer block five - answer 3
    answerList3 = document.createElement("li");
    answerList3.textContent = qAndA.thirdAnswer;
    answerList3.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList3);
    answerList3.setAttribute("id", "incorrect");

    // Answer block five - answer 4
    answerList4 = document.createElement("li");
    answerList4.textContent = qAndA.fourthAnswer;
    answerList4.setAttribute("class", "list-group-item list-group-item-action");
    outAnswer.append(answerList4);
    answerList4.setAttribute("id", "incorrect");

};

// Score Keeper object
var scores = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    total: 0,
};

// Click event listenser for answers // point addition

outAnswer.addEventListener("click", function (e) {
    e.preventDefault();
    e.target.setAttribute("class", "list-group-item list-group-item-action active");
    outAnswer.setAttribute("class", "list-group-item disabled");

    userPointsOne = function () {
        if (e.target.matches("#answer1")) {
            outResult.textContent = "Correct!";
            outResult.setAttribute("class", "alert alert-success");
            scores.first = 20;
            return scores.first;
        }
    };
    userPointsOne();

    userPointsTwo = function () {
        if (e.target.matches("#answer2")) {
            outResult.textContent = "Correct!";
            outResult.setAttribute("class", "alert alert-success");
            scores.second = 20;
            return scores.second;
        }
    };
    userPointsTwo();

    userPointsThree = function () {
        if (e.target.matches("#answer3")) {
            outResult.textContent = "Correct!";
            outResult.setAttribute("class", "alert alert-success");
            scores.third = 20;
            return scores.third;
        }
    };
    userPointsThree();

    userPointsFour = function () {
        if (e.target.matches("#answer4")) {
            outResult.textContent = "Correct!";
            outResult.setAttribute("class", "alert alert-success");
            scores.fourth = 20;
            return scores.fourth;
        }

    };
    userPointsFour();

    userPointsFifth = function () {
        if (e.target.matches("#answer5")) {
            outResult.textContent = "Correct!";
            outResult.setAttribute("class", "alert alert-success");
            scores.fifth = 20;
            return scores.fifth;
        }
    };
    userPointsFifth();

    incorrect = function () {
        if (e.target.matches("#incorrect")) {
            outResult.textContent = "Incorrect, you just lost 5 seconds!"
            outResult.setAttribute("class", "alert alert-danger")
        };
    };
    incorrect();

    // Store score
    var playerScore = scores.first + scores.second + scores.third + scores.fourth + scores.fifth;
    console.log(playerScore);
    outScore.textContent = "SCORE: " + playerScore + " POINTS";
    scores.total = playerScore;
    return scores.total;

});

// Timer for the quiz
var secondsLeft = 61;
var timerInterval;
theTimer = function () {
    timerInterval = setInterval(screenTimer, 1000);
};
screenTimer = function () {
    secondsLeft--;
    outTimer.textContent = "TIMER: " + secondsLeft;
    outTimer.setAttribute("class", "text-danger")
    if (secondsLeft === 0) {
        clearInterval(timerInterval);
        inSubmit.textContent = "GAME OVER";
        inSubmit.setAttribute("id", "finish");
    }
};
// Subtracts time 5 seconds from the game if user answers incorrectly
outAnswer.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.matches("#incorrect")) {
        secondsLeft -= 5;
    }
    else if (secondsLeft === 0) {
        clearInterval(timerInterval);
    };
});


// Game start where user hits "submit" and kicks off the game
var player = {
    name: "",
};
inSubmit.addEventListener("click", gameStart);
function gameStart(e) {

    // First question block and player name for storage
    if (e.target.matches("#submit")) {
        player.name = prompt("Please enter your name.");
        blockOne();
        theTimer()
        return inPlayer.textContent = "PLAYER: " + player.name,
            inSubmit.textContent = "Next Question",
            inSubmit.setAttribute("id", "submit1"),
            player.name,
            console.log(player.name);
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
        return inSubmit.textContent = "FINAL SUBMIT",
            inSubmit.setAttribute("id", "finish");

    }
    // Clear screen for player score
    else if (e.target.matches("#finish")) {
        localStorage.setItem("name", JSON.stringify(player.name));
        localStorage.setItem("score", JSON.stringify(scores.total));
        while (outAnswer.hasChildNodes()) {
            outAnswer.removeChild(outAnswer.childNodes[0]);
        }
        clearInterval(timerInterval);
        outQuestion.setAttribute("class", "")
        outQuestion.textContent = "";
        outAnswer.setAttribute("class", "");
        outResult.textContent = "";
        outResult.setAttribute("class", "");
        inSubmit.textContent = "SAVE SCORE & RESTART";
        inSubmit.setAttribute("id", "restart");
    }
    else if (e.target.matches("#restart")) {
        location.reload()
    };
};
// Call user storage function
userLastScore();

// User stats from storage
function userLastScore() {
    player.name = JSON.parse(localStorage.getItem("name"));
    scores.total = JSON.parse(localStorage.getItem("score"));
    outHiScore.textContent = "LAST GAME: " + player.name + " with " + scores.total + " points";

};
