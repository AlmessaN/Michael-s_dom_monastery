
const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".main__nav");

burger.addEventListener('click', openBurger, openBurgerNav);

function openBurger (e) {
   burger.classList.add('active');
    };

  function openBurgerNav (e) {
      nav.classList.add('active');
       };