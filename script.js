// -- Varibales
// Selecting counter number
const display = document.querySelector('.counter-preview');
// Selecting all buttons
const allbtns = document.querySelector('#allBtns');
// Create varibale for changing counter number
let value = 0;

// -- Events
// Evnent for when clicked at buttons
allbtns.addEventListener('click', counter);

