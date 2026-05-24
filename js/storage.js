let meals = JSON.parse(
  localStorage.getItem('meals')
) || [];

let weeklyPlan = JSON.parse(
  localStorage.getItem('weeklyPlan')
) || {};

function saveData() {

  localStorage.setItem(
    'meals',
    JSON.stringify(meals)
  );

  localStorage.setItem(
    'weeklyPlan',
    JSON.stringify(weeklyPlan)
  );
}
