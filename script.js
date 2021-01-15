// Main variables
const buttonToTop = document.querySelector("#back-to-top");
const darkMode = document.querySelector("#dark-mode-checkbox");

// Event Listeners
buttonToTop.addEventListener("click", topFunction);
darkMode.addEventListener("change", toggleDarkMode);
// Functions
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
// Dark Mode
function toggleDarkMode(){
  document.body.classList.toggle("dark-mode");
}

// responsive header
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
    mainNav.classList.toggle('main-nav');
});