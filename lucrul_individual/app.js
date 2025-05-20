const recipes = [];

const form = document.getElementById('recipeForm');
const list = document.getElementById('recipeList');
const searchInput = document.getElementById('searchInput');
const filterCategory = document.getElementById('filterCategory');

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');

form.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const category = document.getElementById('category').value.trim();
  const description = document.getElementById('description').value.trim();

  if (!title || !category || !description) {
    alert("Пожалуйста, заполните все поля.");
    return;
  }

  recipes.push({ title, category, description });
  renderRecipes();
  form.reset();
});

searchInput.addEventListener('input', renderRecipes);
filterCategory.addEventListener('change', renderRecipes);

function renderRecipes() {
  const search = searchInput.value.toLowerCase();
  const filter = filterCategory.value;
  list.innerHTML = '';

  const filtered = recipes.filter(recipe => {
    const matchesCategory = filter === 'all' || recipe.category.toLowerCase() === filter.toLowerCase();
    const matchesSearch = recipe.title.toLowerCase().includes(search);
    return matchesCategory && matchesSearch;
  });

  filtered.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p><strong>Категория:</strong> ${recipe.category}</p>
      <button data-index="${index}">Удалить</button>
    `;

    card.addEventListener('click', e => {
      if (e.target.tagName === 'BUTTON') {
        recipes.splice(index, 1);
        renderRecipes();
      } else {
        showModal(recipe);
      }
    });

    list.appendChild(card);
  });
}

function showModal(recipe) {
  modalTitle.textContent = recipe.title;
  modalCategory.textContent = `Категория: ${recipe.category}`;
  modalDescription.textContent = recipe.description;
  modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
