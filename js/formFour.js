const showCheckout = (formTwoData, formThreeData) => {
  const divCheckout = document.querySelector('.div-checkout');
  const divCheckoutPlanName = document.querySelector('.checkout-plan-name');
  const divCheckoutPlanPrice = document.querySelector('.checkout-plan-price');  
  const divTotalHeader = document.querySelector('.div-total-header');
  const divTotalAmount = document.querySelector('.div-total-amount');
  let total = 0;

  divCheckoutPlanName.innerHTML = `${formTwoData.name} (${formTwoData.duration})`;

  divCheckoutPlanPrice.innerHTML = formTwoData.duration === 'Monthly' ? `$${formTwoData.price}/mo` : `$${parseInt(formTwoData.price * 10)}/yr`;

  if (formTwoData.duration === 'Monthly') {
    total += parseInt(formTwoData.price);
  } else {
    total += (parseInt(formTwoData.price) * 10);
  }
  
  for (const index in formThreeData) {
    const plan = formThreeData[index];
    
    const checkoutAddOn = document.createElement('div');
    checkoutAddOn.classList.add('checkout-add-on');
    const checkoutAddOnName = document.createElement('div');
    const checkoutAddOnPrice = document.createElement('div');
    checkoutAddOnName.innerHTML = plan.name;

    if (formTwoData.duration === 'Monthly') {
      checkoutAddOnPrice.innerHTML = `+$${plan.price}/mo`;
      total += parseInt(plan.price);
    } else {
      checkoutAddOnPrice.innerHTML = `+$${parseInt(plan.price) * 10}/yr`;
      total += (parseInt(plan.price) * 10);
    }

    checkoutAddOn.append(checkoutAddOnName, checkoutAddOnPrice);
      
    divCheckout.appendChild(checkoutAddOn);
  }
  
  if (formTwoData.duration === 'Monthly') {
    divTotalHeader.innerHTML = 'Total (per month)';
    divTotalAmount.innerHTML = `$${total}/mo`;
  } else {
    divTotalHeader.innerHTML = 'Total (per year)';
    divTotalAmount.innerHTML = `$${total}/yr`;
  }
};

const resetAddOns = () => {
  const divCheckoutAddOns = document.getElementsByClassName('checkout-add-on');
  const copyDivCheckout = Array.from(divCheckoutAddOns);

  for (let i = 0; i < copyDivCheckout.length; i++) {
    copyDivCheckout[i].remove();
  }
};