const taskContainer = document.getElementById("contId");
const window1 = document.getElementById("window1");
const window2 = document.getElementById("window2");
const window3 = document.getElementById("window3");
const window4 = document.getElementById("window4");
const window5 = document.getElementById("window5");
const window6 = document.getElementById("window6");

const btn1 = document
  .getElementById("btn1")
  .addEventListener("click", showPopup1);
const btn2 = document
  .getElementById("btn2")
  .addEventListener("click", showPopup2);
const btn3 = document
  .getElementById("btn3")
  .addEventListener("click", showPopup3);
const btn4 = document
  .getElementById("btn4")
  .addEventListener("click", showPopup4);
const btn5 = document
  .getElementById("btn5")
  .addEventListener("click", showPopup5);
const btn6 = document
  .getElementById("btn6")
  .addEventListener("click", showPopup6);

const icon1 = document
  .getElementById("icon1")
  .addEventListener("click", closePopup1);
const icon2 = document
  .getElementById("icon2")
  .addEventListener("click", closePopup2);
const icon3 = document
  .getElementById("icon3")
  .addEventListener("click", closePopup3);
const icon4 = document
  .getElementById("icon4")
  .addEventListener("click", closePopup4);
const icon5 = document
  .getElementById("icon5")
  .addEventListener("click", closePopup5);
const icon6 = document
  .getElementById("icon6")
  .addEventListener("click", closePopup6);

function showPopup1() {
  window1.style.visibility = "visible";
  taskContainer.style.visibility = "hidden";
}

function showPopup2() {
  window2.style.visibility = "visible";
  taskContainer.style.visibility = "hidden";
}

function showPopup3() {
  window3.style.visibility = "visible";
  taskContainer.style.visibility = "hidden";
}

function showPopup4() {
  window4.style.visibility = "visible";
  taskContainer.style.visibility = "hidden";
}

function showPopup5() {
  window5.style.visibility = "visible";
  taskContainer.style.visibility = "hidden";
}

function showPopup6() {
  window6.style.visibility = "visible";
  taskContainer.style.visibility = "hidden";
}

// close popup icons
function closePopup1() {
  window1.style.visibility = "hidden";
  taskContainer.style.visibility = "visible";
}

function closePopup2() {
  window2.style.visibility = "hidden";
  taskContainer.style.visibility = "visible";
}

function closePopup3() {
  window3.style.visibility = "hidden";
  taskContainer.style.visibility = "visible";
}

function closePopup4() {
  window4.style.visibility = "hidden";
  taskContainer.style.visibility = "visible";
}

function closePopup5() {
  window5.style.visibility = "hidden";
  taskContainer.style.visibility = "visible";
}

function closePopup6() {
  window6.style.visibility = "hidden";
  taskContainer.style.visibility = "visible";
}
