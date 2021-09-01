const menuButton = document.querySelector(".header__burger-menu");
const burgerMenu = document.querySelector(".navigation__menu");

menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("header__burger-menu_open");
    burgerMenu.classList.toggle("navigation__menu_open");
});
