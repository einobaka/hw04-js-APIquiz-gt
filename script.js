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

        return qAndA.firstQuestion + qAndA.firstAnswer + qAndA.secondAnswer + qAndA.thirdAnswer + qAndA.fourthAnswer
    },

};

console.log(qAndA.qAndAOne())

//answer block to be re-used//
outQuestion.textContent = qAndA.firstQuestion;
console.log(outQuestion);

answerList1 = document.createElement("li");
answerList1.textContent = qAndA.firstAnswer;
answerList1.setAttribute("class", "list-group-item list-group-item-action");
answerList1.setAttribute("id", "answer1");
outAnswer.append(answerList1);

answerList2 = document.createElement("li");
answerList2.textContent = qAndA.secondAnswer;
answerList2.setAttribute("class", "list-group-item list-group-item-action")
answerList2.setAttribute("id", "answer2");
outAnswer.append(answerList2);

answerList3 = document.createElement("li");
answerList3.textContent = qAndA.thirdAnswer;
answerList3.setAttribute("class", "list-group-item list-group-item-action");
answerList3.setAttribute("id", "answer3");
outAnswer.append(answerList3);

answerList4 = document.createElement("li");
answerList4.textContent = qAndA.fourthAnswer;
answerList4.setAttribute("class", "list-group-item list-group-item-action");
answerList4.setAttribute("id", "answer4");
outAnswer.append(answerList4);

//answer event listener complete
outAnswer.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(e);
    e.target.setAttribute("class", "list-group-item list-group-item-action active");
    if (e.target.matches("#answer1")) {
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


console.log(qAndA.firstQuestion);
console.log(qAndA.correctAnswer);




// for (var i = 0; i < inAnswer.length; i++) {
//     var answers = inAnswer[i]; // indexing arrays splits it
//     var userAnswer = "";
//     answerList = document.createElement("li");
//     answerList.textContent = answers;
//     outAnswer.append(answerList);
//     ;
// };




// var firstQuestion = outQuestion;
// var firstQuestion = document.createElement("p");
// var testVariables = {
//     varOne: "one",
//     varTwo: "two",
// };
// firstQuestion.textContent = [testVariables.varOne, testVariables.varTwo];
// outQuestion.append(firstQuestion);


//useable block of code for answers, just need to create the answers and let the buttons become clickable
// questionAndAnswer()
// function questionAndAnswer() {

    // function qABlockone() {

        // outQuestion.textContent = "What is the question?";


        // var inAnswer = [
        //     "answer 1", 
        //     "answer 2",
        //     "answer 3",
        //     "answer 4",          
        // ];
        // console.log(inAnswer[1]);
        // var correctAnswer = inAnswer[1];

        // for (var i = 0; i < inAnswer.length; i++) {

        //     var answers = inAnswer[i]; // indexing arrays splits it
        //     var userAnswer = "";
        //     answerList = document.createElement("li");
        //     answerList.textContent = answers;
        //     outAnswer.append(answerList);
        //     answerList.setAttribute("class", "btn btn-secondary btn-lg btn-block");
        // };     
        // console.log(answerList);

        // answerList.addEventListener("click", function(e) {      

        //     if (e.target === correctAnswer) {

        //         alert("correct!");
        //     }
        //     else {
        //         alert("wrong!");
        //     };
        //     console.log(e.currentTarget);


        // });





    // };

    // function qABlockotwo() {

    //     outQuestion.textContent = "What is the question?";
    //     var inAnswer = ["Answer 1", "answer 2", "answer 3", "answer 4"];

    //     for (var i = 0; i < inAnswer.length; i++) {

    //         var answers = inAnswer[i]; // indexing arrays splits it

    //         answerList = document.createElement("li");
    //         answerList.textContent = answers;
    //         outAnswer.appendChild(answerList);
    //         answerList.setAttribute("class", "btn btn-secondary btn-lg btn-block");
    //     };


    // };

    // return qABlockone(), qABlockotwo()




// };
// yes you can use BOOTSTRAP HERE!!!





//Grab player information and store it later
// inSubmit.addEventListener("click", askName);
// function askName() {
//     var playerName = prompt("Please enter your name.");
//     return inPlayer.textContent = playerName, inSubmit.textContent = "RESTART GAME", console.log(playerName), qAndA();
// };

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