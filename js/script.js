const menu = document.querySelector(".hamburger-menu");
const menuBars = document.querySelectorAll(".hamburger-menu__bar");
const mobileMenu = document.querySelector(".mobile");

menu.addEventListener("click", () => {
  menuBars[0].classList.toggle("animateBar1");
  menuBars[1].classList.toggle("animateBar2");
  menuBars[2].classList.toggle("animateBar3");
  mobileMenu.classList.toggle("open-menu");
});
