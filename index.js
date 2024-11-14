const buttonA = document.querySelector(".button-a");
const buttonB = document.querySelector(".button-b");
const buttonC = document.querySelector(".button-c");

const hideButtonA = document.querySelector(".hide-result-a");
const hideButtonB = document.querySelector(".hide-result-b");
const hideButtonC = document.querySelector(".hide-result-c");

const aDiv = document.querySelector(".a-i");
const bDiv = document.querySelector(".b-i");
const cDiv = document.querySelector(".c-i");

buttonA.addEventListener("click", () => {
  aDiv.style.display = "flex";
});

buttonB.addEventListener("click", () => {
  bDiv.style.display = "flex";
});

buttonC.addEventListener("click", () => {
  cDiv.style.display = "flex";
});

hideButtonA.addEventListener("click", () => {
  aDiv.style.display = "none";
});

hideButtonB.addEventListener("click", () => {
  bDiv.style.display = "none";
});

hideButtonC.addEventListener("click", () => {
  cDiv.style.display = "none";
});
