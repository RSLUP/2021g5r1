let question = document.querySelector(".question");
let choice1 = document.querySelector(".choice1");
let choice2 = document.querySelector(".choice2");
let choice3 = document.querySelector(".choice3");
let choice4 = document.querySelector(".choice4");
let btnNxt = document.querySelector(".btnNxt");
let btnPre = document.querySelector(".btnPre");
document.querySelector(".btnNxt").addEventListener("click", showNext);
document.querySelector(".btnPre").addEventListener("click", showPrevious);

(function () {
  showQuestion(1);
})();

// show question
function showQuestion(id) {
  let currentQuestion = allQuestions.find((x) => x.id == id);
  resetActive();
  question.innerHTML = currentQuestion.question;
  choice1.innerHTML = currentQuestion.options[0];
  choice2.innerHTML = currentQuestion.options[1];
  choice3.innerHTML = currentQuestion.options[2];
  choice4.innerHTML = currentQuestion.options[3];

  localStorage.setItem("questionId", id);

  if (currentQuestion.id == 1) {
    btnPre.classList.add("hide");
  } else {
    btnPre.classList.remove("hide");
  }

  if (currentQuestion.id == 6) {
    btnNxt.classList.add("hide");
  } else {
    btnNxt.classList.remove("hide");
  }
}

function showNext() {
  let questionId = parseInt(localStorage.getItem("questionId"));
  if (questionId < allQuestions.length) {
    showQuestion(questionId + 1);
    btnNxt.classList.remove("hide");
  } else {
    btnNxt.classList.add("hide");
  }

  let SelectOption = document.querySelector("input[type=radio]:checked");
  let optionValue = SelectOption.value;
  let selectedQuestion = allQuestions.find((x) => x.id == currentQuestionId);
  if (selectedQuestion.correct == optionValue) {
    SelectOption.classList.add("correct");
  } else {
    selectOption.classList.add("wrong");
  }
}

function showPrevious() {
  let questionId = parseInt(localStorage.getItem("questionId"));
  if (questionId != 1) {
    showQuestion(questionId - 1);
  } else {
    btnPre.classList.add("hide");
  }
}

function selectedOption(e) {
  resetActive();
  let optionValue = e.getAttribute("value");
  let questionId = parseInt(localStorage.getItem("questionId"));
  let selectedQuestion = allQuestions.find((x) => x.id == questionId);

  if (selectedQuestion.correct == optionValue) {
    e.classList.add("correct");
  } else {
    e.classList.add("wrong");
  }
}

function resetActive() {
  let options = document.querySelectorAll(".label");
  options.forEach((option) => {
    option.classList.remove("wrong");
    option.classList.remove("correct");
  });
}
