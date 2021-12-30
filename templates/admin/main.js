// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");
// const navLink = document.querySelectorAll(".nav-link");

// hamburger.addEventListener("click", mobileMenu);
// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }
const buttonMenu = document.querySelector('.adminsystem__button-menu');
const menu = document.querySelector('.adminsystem__menu');

function menuToggle() {
  if (menu.classList.contains('adminsystem__menu--oculto')) {
    menu.classList.remove('adminsystem__menu--oculto');
  } else {
    menu.classList.add('adminsystem__menu--oculto');
  }
}
buttonMenu.addEventListener('click', menuToggle);
