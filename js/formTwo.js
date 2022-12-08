document.addEventListener('DOMContentLoaded', () => {
  const toggleMonthly = document.getElementById('toggle-monthly');
  const btnToggle = document.getElementById('btn-toggler');
  const toggleYearly = document.getElementById('toggle-yearly');
  const spanArcadePrice = document.getElementById('span-arcade-price');
  const spanAdvancedPrice = document.getElementById('span-advanced-price');
  const spanProPrice = document.getElementById('span-pro-price');
  const spanPlanYearlyDiscounts = document.getElementsByClassName('span-plan-discount');
  const itemListPlans = document.getElementsByClassName('item-list-plan');

  let prevSelectedPlan = '';
  btnToggle.addEventListener('click', (e) => {
    e.preventDefault();

    if (toggleMonthly.classList.contains('selected')) {
      toggleMonthly.classList.remove('selected');
      toggleYearly.classList.add('selected');
      btnToggle.classList.remove('monthly');
      btnToggle.classList.add('yearly');

      spanArcadePrice.innerHTML = '$90/yr';
      spanAdvancedPrice.innerHTML = '$120/yr';
      spanProPrice.innerHTML = '$150/yr';

      for (let i = 0; i < spanPlanYearlyDiscounts.length; i++) {
        spanPlanYearlyDiscounts[i].classList.remove('hide');
      }
    } else {
      toggleMonthly.classList.add('selected');
      toggleYearly.classList.remove('selected');
      btnToggle.classList.add('monthly');
      btnToggle.classList.remove('yearly');
    
      spanArcadePrice.innerHTML = '$9/mo';
      spanAdvancedPrice.innerHTML = '$12/mo';
      spanProPrice.innerHTML = '$15/mo';

      for (let i = 0; i < spanPlanYearlyDiscounts.length; i++) {
        spanPlanYearlyDiscounts[i].classList.add('hide');
      }
    }
  });

  for (let i = 0; i < itemListPlans.length; i++) {
    const itemListPlan = itemListPlans[i];

    itemListPlan.addEventListener('click', (e) => {
      if (prevSelectedPlan === '') {
        prevSelectedPlan = i;
      } else {
        itemListPlans[prevSelectedPlan].classList.remove('selected');
      }
      itemListPlan.classList.add('selected');

      prevSelectedPlan = i;
    });
  }
});