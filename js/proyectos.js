const cards = document.querySelectorAll('.proyectos__card');
const filters = document.querySelectorAll('.proyectos__filter');
const pages = document.querySelectorAll('.proyectos__page');

const perPage = 8;

let currentFilter = "todos";
let currentPage = 1;

function getFilteredCards() {
  return [...cards].filter(card => {
    const cat = card.dataset.category;
    return currentFilter === "todos" || cat === currentFilter;
  });
}

function render() {
  const filtered = getFilteredCards();

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;

  cards.forEach(card => {
    const isInFilter = filtered.includes(card);
    card.style.display = "none";

    if (isInFilter) {
      const index = filtered.indexOf(card);
      if (index >= start && index < end) {
        card.style.display = "flex";
      }
    }
  });
}
// FILTROS
filters.forEach(btn => {
  btn.addEventListener('click', () => {

    filters.forEach(b => b.classList.remove('proyectos__filter--active'));
    btn.classList.add('proyectos__filter--active');

    currentFilter = btn.dataset.filter;
    currentPage = 1;

    render();
  });
});

// PAGINACIÓN
pages.forEach(btn => {
  btn.addEventListener('click', () => {

    if (!btn.dataset.page) return;

    pages.forEach(b => b.classList.remove('proyectos__page--active'));
    btn.classList.add('proyectos__page--active');

    currentPage = Number(btn.dataset.page);

    render();
  });
});

// INIT
render();