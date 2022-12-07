document.addEventListener('DOMContentLoaded', () => {
  const toggleMonthly = document.getElementById('toggle-monthly');
  const btnToggle = document.getElementById('btn-toggler');
  const toggleYearly = document.getElementById('toggle-yearly');

  btnToggle.addEventListener('click', (e) => {
    e.preventDefault();

    if (toggleMonthly.classList.contains('selected')) {
      toggleMonthly.classList.remove('selected');
      toggleYearly.classList.add('selected');
      btnToggle.classList.remove('monthly');
      btnToggle.classList.add('yearly');
    } else {
      toggleMonthly.classList.add('selected');
      toggleYearly.classList.remove('selected');
      btnToggle.classList.add('monthly');
      btnToggle.classList.remove('yearly');
    }
  });
});