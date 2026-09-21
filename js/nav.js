// Menú hamburguesa para navegación móvil
const navToggle = document.querySelector('.navbar__toggle');
const navMenu = document.querySelector('.navbar__menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('navbar__menu--open');
    navToggle.classList.toggle('navbar__toggle--active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // cierra el menú al elegir una opción (mobile)
  navMenu.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('navbar__menu--open');
      navToggle.classList.remove('navbar__toggle--active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
