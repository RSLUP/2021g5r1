let questions = document.querySelectorAll(".questions"),
  i;
let answers = document.querySelectorAll(".answers");

// show question
function showQuestion() {
  for (i = 0; i < 3; i++) {
    questions[i].innerHTML = allQuestions[i].question;
    answers[i].innerHTML =
      '<p class="anws">' +
      allQuestions[i].options[0] +
      "</p>" +
      '<p class="anws">' +
      allQuestions[i].options[1] +
      "</p>" +
      '<p class="anws">' +
      allQuestions[i].options[2] +
      "</p>" +
      '<p class="anws">' +
      allQuestions[i].options[3] +
      "</p>";
  }
}
console.log(showQuestion());

// load the other page when clicking next button

// load previous page when clicking previous button

// select the correct option

// select an incorrect option
