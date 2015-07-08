var question1 = {question: "How many words are in this sentence?", possibleAnswers: "A.1\rB. 55\rC. 345\rD. 7\rE. 4", answer: "D"};
var question2 = {question: "What about this sentence?", possibleAnswers: "A. 1 B. 55 C. 345 D. 7 E. 4", answer: "E"};
var question3 = {question: "And this sentence?", possibleAnswers: "A. 1 B. 55 C. 345 D. 7 E. 3", answer: "E"};
var question4 = {question: "What's your favorite letter.", possibleAnswers: "A. B. C. D. E.", answer: "B"};
var question5 = {question: "Is there a correct answer to this question?", possibleAnswers: "A. Yes B. No C. Not Sure D. Maybe", answer: "A"}

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
    answer = document.getElementById("answer").value.toUpperCase();
    console.log(is_correct_answer(answer));
}

function is_correct_answer(answer_text) {
  if (answer_text === question1.answer) {
    return true;
  } else {
    return false;
  }
} 