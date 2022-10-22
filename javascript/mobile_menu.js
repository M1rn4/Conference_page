// eslint-disable-next-line no-unused-vars
const hamburger = document.querySelector('#button-hamburger');
// eslint-disable-next-line no-unused-vars
const navMenu = document.querySelector('#navbar-options');
const closeIcon = document.querySelector('#x');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('menu-mobile');
  closeIcon.classList.toggle('close-icon-visible');
});

document.querySelectorAll('.links').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('menu-mobile');
  closeIcon.classList.remove('close-icon-visible');
}));
