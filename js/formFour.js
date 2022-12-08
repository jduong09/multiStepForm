document.addEventListener('DOMContentLoaded', () => {
  const divFormTwo = document.getElementById('form-2');
  const divFormFour = document.getElementById('form-4');
  const btnFooterNext = document.getElementById('btn-footer-next');
  const itemListPlans = document.getElementsByClassName('item-list-plan');
  const toggleMonthly = document.getElementById('toggle-monthly');
  const divAddOns = document.getElementsByClassName('div-add-on');
  const divCheckout = document.createElement('div');
  divCheckout.classList.add('div-checkout');
  let plan;
  let price;
  let duration;
  btnFooterNext.addEventListener('click', () => {
    if (!divFormFour.classList.contains('hide')) {
      let total = 0;
      for (let i = 0; i < itemListPlans.length; i++) {
        const itemListPlan = itemListPlans[i];
    
        if (itemListPlan.classList.contains('selected')) {
          plan = itemListPlan.children[1].children[0].innerHTML;
          price = itemListPlan.children[1].children[1].innerHTML;
        }
      }

      if (toggleMonthly.classList.contains('selected')) {
        duration = 'Monthly';
      } else {
        duration = 'Yearly';
      }

      const checkoutPlan = document.createElement('div');
      const checkoutPlanNameDiv = document.createElement('div');
      const checkoutPlanName = document.createElement('div');
      checkoutPlanName.classList.add('checkout-plan-name');
      checkoutPlanName.innerHTML = `${plan} (${duration})`;

      const btnChangePlan = document.createElement('button');
      btnChangePlan.innerHTML = 'Change';

      btnChangePlan.addEventListener('click', (e) => {
        e.preventDefault();

        divFormFour.classList.add('hide');
        divFormTwo.classList.remove('hide');
      });

      checkoutPlanNameDiv.append(checkoutPlanName, btnChangePlan);

      const checkoutPlanPrice = document.createElement('div');
      checkoutPlanPrice.classList.add('checkout-plan-price')
      checkoutPlanPrice.innerHTML = price;

      if (duration === 'Monthly') {
        total += parseInt(price.substr(1, 1));
      } else {
        total += parseInt(price.substr(1, 2));
      }

      checkoutPlan.append(checkoutPlanNameDiv, checkoutPlanPrice);

      divCheckout.appendChild(checkoutPlan);

      for (let j = 0; j < divAddOns.length; j++) {
        const divAddOn = divAddOns[j];

        if (divAddOn.children[0].checked) {
          const checkoutAddOn = document.createElement('div');
          const checkoutAddOnName = document.createElement('div');
          const checkoutAddOnPrice = document.createElement('div');
          checkoutAddOnName.innerHTML = divAddOn.children[1].children[0].innerHTML;
          checkoutAddOnPrice.innerHTML = divAddOn.children[2].innerHTML;
          console.log(checkoutAddOnName.innerHTML);
          console.log(checkoutAddOnPrice.innerHTML);
          
          /*
          if (duration === 'Monthly') {
            total += parseInt(checkoutAddOnPrice.innerText.substr(1, 1));
          } else {
            total += parseInt(checkoutAddOnPrice.innerText.substr(1, 2));
          }

          */

          checkoutAddOn.append(checkoutAddOnName, checkoutAddOnPrice);
          
          divCheckout.appendChild(checkoutAddOn);
        }
      }

      divFormFour.appendChild(divCheckout);

      const divTotal = document.createElement('div');
      divTotal.classList.add('div-checkout-total');
      
      const divTotalHeader = document.createElement('div');
      
      if (duration === 'Monthly') {
        divTotalHeader.innerHTML = 'Total (per month)';
      } else {
        divTotalHeader.innerHTML = 'Total (per year)';
      }

      const divTotalNumber = document.createElement('div');
      divTotalNumber.innerHTML = total;

      divTotal.append(divTotalHeader, divTotalNumber);

      divFormFour.appendChild(divTotal);
    }
  });

});