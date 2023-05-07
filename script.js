const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', event => {
    mobileMenu();
  })
})

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}