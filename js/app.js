function showTab(tabId) {

  document
    .querySelectorAll('.tabContent')
    .forEach(tab => {
      tab.classList.add('hidden');
    });

  document
    .getElementById(tabId)
    .classList.remove('hidden');
}


function renderApp() {

  renderPlanner();

  renderMealsList();

  updateStats();

  updateTotals();
}


renderApp();

