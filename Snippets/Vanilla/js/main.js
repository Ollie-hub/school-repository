// Selection of HTML objects

const burger = document.querySelector(".burger i");

const nav = document.querySelector(".nav");

//function

function toggleNav() {
    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    nav.classList.toggle("nav-active");
}

// click event

burger.addEventListener("click", function() {
    toggleNav();
});