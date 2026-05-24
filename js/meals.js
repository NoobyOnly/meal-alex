function addMeal() {
  saveData();

  renderApp();
}


function renderMealsList() {

  const mealsList =
    document.getElementById('mealsList');

  const search = document
    .getElementById('mealSearch')
    .value
    .toLowerCase();

  mealsList.innerHTML = '';

  const filteredMeals = meals.filter(meal =>
    meal.name.toLowerCase().includes(search)
  );

  filteredMeals.forEach(meal => {

    const div = document.createElement('div');

    div.className = 'border rounded-xl p-3 mb-3';

    div.innerHTML = `
      <div class="flex justify-between items-center">

        <div>
          <div class="font-bold">${meal.name}</div>
          <div>${meal.price} RSD</div>
        </div>

        <button
          onclick="deleteMeal('${meal.id}')"
          class="bg-red-500 text-white px-3 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>
    `;

    mealsList.appendChild(div);
  });
}
