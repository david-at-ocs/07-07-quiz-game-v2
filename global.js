var question1 = {question: "How many words are in this sentence?", possibleAnswers: "A.1\rB. 55\rC. 345\rD. 7\rE. 4", answer: "D"};
var question2 = {question: "What about this sentence?", possibleAnswers: "A. 1 B. 55 C. 345 D. 7 E. 4", answer: "E"};
var question3 = {question: "And this sentence?", possibleAnswers: "A. 1 B. 55 C. 345 D. 7 E. 3", answer: "E"};
var question4 = {question: "What's your favorite letter.", possibleAnswers: "A. B. C. D. E.", answer: "B"};
var question5 = {question: "Is there a correct answer to this question?", possibleAnswers: "A. Yes B. No C. Not Sure D. Maybe", answer: "A"}
var score = 0;
var count = 0;
var quest;
var choice;

var questionsArray = [question1, question2, question3, question4, question5];

quest = document.getElementById("question");
choice = document.getElementById("choices");


quest.innerText = questionsArray[count].question;
choice.innerText = questionsArray[count].possibleAnswers;



function given_answer() {
    return document.getElementById("answer").value.toUpperCase();
}

function is_correct_answer(answer_text) {
  if (answer_text === questionsArray[count].answer) {
    score++
    return true;
  } else {
    return false;
  }
} 

function update_question_result(correct) {
  if (correct) {
    document.getElementById("question_result").innerText = "Success!";
  } else {
    document.getElementById("question_result").innerText = "Sorry, wrong answer";
  }
}

function process_answer_submission() {
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
}

function next_question() {
  clear_fields();
  set_next_question();
}

function clear_fields() {
  document.getElementById("answer").value = null;
  document.getElementById("question_result").innerText = "";
}

function set_next_question() {
  count++
  quest.innerText = questionsArray[count].question;
  choice.innerText = questionsArray[count].possibleAnswers;
}

// document.getElementById("submitter").onclick = process_answer_submission;
