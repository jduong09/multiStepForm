document.addEventListener('DOMContentLoaded', () => {
  const listStepsItems = document.getElementsByClassName('item-list-step');
  const formOne = document.getElementById('form-1');
  const formTwo = document.getElementById('form-2');
  const formThree = document.getElementById('form-3');
  const formFour = document.getElementById('form-4');
  const divThankYou = document.querySelector('.div-form-thank-you');
  const divNavBtns = document.querySelector('.div-nav-buttons');
  const btnFooterBack = document.getElementById('btn-footer-back');
  const btnFooterNext = document.getElementById('btn-footer-next');
  const btnChangePlan = document.getElementById('btn-change-plan');
  let currentFormStep = 0;
  let formTwoData, formThreeData;

  btnChangePlan.addEventListener('click', (e) => {
    e.preventDefault();
    const itemListSteps = document.getElementsByClassName('item-list-step');

    resetAddOns();

    formFour.classList.add('hide');
    itemListSteps[3].children[0].classList.remove('active');
    formTwo.classList.remove('hide');
    itemListSteps[1].children[0].classList.add('active');
    currentFormStep = 1;
  });

  btnFooterNext.addEventListener('click', (e) => {
    e.preventDefault();

    if (currentFormStep === 0) {
      if (verifyFormOne()) {
        formOne.classList.add('hide');
        formTwo.classList.remove('hide');
        btnFooterBack.classList.remove('hide');
        // sendFormOne() Do something with form 1. For this project, this does not need to be fleshed out
      } else {
        return false;
      }
    } else if (currentFormStep === 1) {
      formTwoData = sendFormTwo();
      formTwo.classList.add('hide');
      formThree.classList.remove('hide');
    } else if (currentFormStep === 2) {
      formThreeData = sendFormThree();
      showCheckout(formTwoData, formThreeData);
      btnFooterNext.innerHTML = 'Complete';
      formThree.classList.add('hide');
      formFour.classList.remove('hide');
    } else if (currentFormStep === 3) {
      formFour.classList.add('hide');
      divThankYou.classList.remove('hide');
      divNavBtns.classList.add('hide');
      return;
    }

    listStepsItems[currentFormStep].children[0].classList.remove('active');
    listStepsItems[currentFormStep + 1].children[0].classList.add('active');

    currentFormStep += 1;
  });

  btnFooterBack.addEventListener('click', (e) => {
    e.preventDefault();

    resetAddOns();

    if (currentFormStep === 0) {
      return;
    } else if (currentFormStep === 1) {
      formTwo.classList.add('hide');
      formOne.classList.remove('hide');
      btnFooterBack.classList.add('hide');
    } else if (currentFormStep === 2) {
      formThree.classList.add('hide');
      formTwo.classList.remove('hide');
    } else if (currentFormStep === 3) {
      btnFooterNext.innerHTML = 'Next Step';
      formFour.classList.add('hide');
      formThree.classList.remove('hide');
    }

    listStepsItems[currentFormStep].children[0].classList.remove('active');
    listStepsItems[currentFormStep - 1].children[0].classList.add('active');
    currentFormStep -= 1;
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 1200) {

    } else {
      
    }
  });
});