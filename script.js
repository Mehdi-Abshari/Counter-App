// -- Varibales
// Selecting counter number
const display = document.querySelector(".counter-preview");
// Selecting all buttons
const allbtns = document.querySelector("#allBtns");
// Selecting increase counter number
const increase = document.querySelector("#increase");
// Selecting reset counter number
const reset = document.querySelector("#reset");
// Selecting decrease counter number
const decrease = document.querySelector("#decrease");
// Create varibale for changing counter number
let value = 0;

// -- Events
// Evnent for when clicked at buttons
allbtns.addEventListener("click", counter);

// -- Functions
// function for increase, decrease and reset number
function counter(e) {
  // Selecting mouse target id
  const btn = e.target.id;
  // Condition for increase number
  if (btn === "increase") {
    value += 1;
  }
  // Condition for decrease number
  else if (btn === "decrease") {
    value -= 1;
  }
  // Condition for reset number
  else if (btn === "reset") {
    value = 0;
  }

  // inner value to display
  display.innerHTML = value;
}

// Changing increase button style
increase.style.cssText =
  "background-color: #4caf50; text-shadow: 2px 2px 4px #000000";
// Changing decrease button style
decrease.style.cssText =
  "background-color: #2196f4; text-shadow: 2px 2px 4px #000000";
// Changing reset button style
reset.style.cssText =
  "background-color: #f44336; text-shadow: 2px 2px 4px #000000";
