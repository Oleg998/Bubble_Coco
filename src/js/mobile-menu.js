(() => {
  const mobileMenu = document.querySelector('.header-menu');
  const openMenuBtn = document.querySelector('.open-menu');
  const closeMenuBtn = document.querySelector('.close-btn');

 
  openMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('is-open');
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'inline-block';
});

  closeMenuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('is-open');
    closeMenuBtn.style.display = 'none';
    openMenuBtn.style.display = 'inline-block';
});




  const menuLinks = document.querySelectorAll('.header-list-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');      
    });
  });


  window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
 
  });
})();
