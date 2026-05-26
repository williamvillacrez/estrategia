const slides = document.querySelectorAll('.hero__slide');
const next = document.querySelector('.hero__arrow--right');
const prev = document.querySelector('.hero__arrow--left');

let index = 0;

// función principal
function showSlide(i) {
  slides[index].classList.remove('active');
  index = (i + slides.length) % slides.length;
  slides[index].classList.add('active');
}

// autoplay
setInterval(() => {
  showSlide(index + 1);
}, 4000);

// eventos flechas
next.addEventListener('click', () => {
  showSlide(index + 1);
});

prev.addEventListener('click', () => {
  showSlide(index - 1);
});