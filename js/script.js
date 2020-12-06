// Navigation - hamburger-menu 
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
});



// Timeline 
const timeline = document.getElementById("timeline-btn");
const history = document.getElementById("milestones");

timeline.addEventListener("click", () => {
    history.classList.toggle("show");
});
