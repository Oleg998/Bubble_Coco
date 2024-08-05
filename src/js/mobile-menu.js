
const mobileMenu = document.querySelector('.header-menu');
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-btn');
const backdrop = document.getElementById("backdrop");

openMenuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('is-open');
  openMenuBtn.style.display = 'none';
  closeMenuBtn.style.display = 'inline-block';
  backdrop.classList.toggle("active");
});


closeMenuBtn.addEventListener('click', function() {
  mobileMenu.classList.toggle('is-open');
  closeMenuBtn.style.display = 'none';
  openMenuBtn.style.display = 'inline-block';
  backdrop.classList.remove("active");
});


const menuLinks = document.querySelectorAll('.header-list-link');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    b
  });
});


window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
});
