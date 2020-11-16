// Selection of HTML objects
const burger = document.querySelector("#burgerMenu i");
const nav = document.querySelector(".menu");

//function
function toggleNav() {
    burger.classList.toggle("fa-bars");
    burger.classList.toggle("fa-times");
    nav.classList.toggle("menu-active");
}

// click event
burger.addEventListener("click", function() {
    toggleNav();
});