var inPlayer = document.querySelector("#player");
var inSubmit = document.querySelector("#submit");
var outHiTimer = document.querySelector("#timer");
var outScore = document.querySelector("#score");
var outHiScore = document.querySelector("#hiscore");
var outQuestion = document.querySelector("#question");
var outAnswer = document.querySelector("#answer");



var firstQuestion = outQuestion;
var firstQuestion = document.createElement("p");
var testVariables = {
    varOne: "one",
    varTwo: "two",
};
firstQuestion.textContent = [testVariables.varOne, testVariables.varTwo];
outQuestion.append(firstQuestion);


var arrayz = ["Answer 1", "answer 2", "answer 3"];
var answerList = document.createElement("li");
answerList.textContent = arrayz;
outAnswer.appendChild(answerList);
outAnswer.setAttribute("class", "list-group-item");
// yes you can use BOOTSTRAP HERE!!!



console.log(answerList);
console.log(firstQuestion);




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