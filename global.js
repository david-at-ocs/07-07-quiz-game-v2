var question1 = {question: "How many words are in this sentence?", possibleAnswers: "a.1\rb. 55\rc. 345\rd. 7\re. 4", answer: "d"};
var question2 = {question: "What about this sentence?", possibleAnswers: "a. 1 b. 55 c. 345 d. 7 e. 4", answer: "e"};
var question3 = {question: "And this sentence?", possibleAnswers: "a. 1 b. 55 c. 345 d. 7 e. 3", answer: "e"};
var question4 = {question: "What's your favorite letter.", possibleAnswers: "a. b. c. d. e.", answer: "b"};
var question5 = {question: "Is there a correct answer to this question?", possibleAnswers: "a. Yes b. No c. Not Sure d. Maybe", answer: "a"}

var quest;
var choice;

quest = document.getElementById("question");
choice = document.getElementById("choices");

quest.innerText = question1.question;
choice.innerText = question1.possibleAnswers;


// function given_answer() {
//  document.getElementById('answer').value
// }

function given_answer() {
    answer = document.getElementById("answer").value;
    console.log(document.getElementById("answer").value);
}