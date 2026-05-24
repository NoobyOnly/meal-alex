function renderPlanner() {

  const plannerBody =
    document.getElementById('plannerBody');

  plannerBody.innerHTML = '';

  DAYS.forEach(day => {

    const row = document.createElement('tr');

    row.className = 'border-t';

    row.innerHTML += `
      <td class="p-2 font-medium">
        ${day}
      </td>
    `;

    MEAL_TYPES.forEach(type => {

      const select = document.createElement('select');

      select.className =
        'w-full border rounded-lg p-2';

      select.innerHTML = `
        <option value="">
          Izaberi
        </option>

        ${meals.map(meal => `
          <option value="${meal.id}">
            ${meal.name}
          </option>
        `).join('')}
      `;

      const td = document.createElement('td');

      td.className = 'p-2';

      td.appendChild(select);

      row.appendChild(td);
    });

    plannerBody.appendChild(row);
  });
}
