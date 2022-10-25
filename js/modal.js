
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".main__nav");
const body = document.querySelector("body");

burger.addEventListener('click', openBurger);

function openBurger (e) {
  burger.classList.toggle('active');
  nav.classList.toggle('active');
  body.classList.toggle('lock');
    };