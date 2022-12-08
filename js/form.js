document.addEventListener('DOMContentLoaded', () => {
  const listStepsItems = document.getElementsByClassName('item-list-step');
  const formOne = document.getElementById('form-1');
  const formTwo = document.getElementById('form-2');
  const formThree = document.getElementById('form-3');
  const formFour = document.getElementById('form-4');
  const btnFooterBack = document.getElementById('btn-footer-back');
  const btnFooterNext = document.getElementById('btn-footer-next');
  let currentFormStep = 0;

  btnFooterNext.addEventListener('click', (e) => {
    e.preventDefault();

    if (currentFormStep === 0) {
      formOne.classList.add('hide');
      formTwo.classList.remove('hide');
      btnFooterBack.classList.remove('hide');
    } else if (currentFormStep === 1) {
      formTwo.classList.add('hide');
      formThree.classList.remove('hide');
    } else if (currentFormStep === 2) {
      formThree.classList.add('hide');
      formFour.classList.remove('hide');
    } else if (currentFormStep === 3) {
      return;
    }

    listStepsItems[currentFormStep].children[0].classList.remove('active');
    listStepsItems[currentFormStep + 1].children[0].classList.add('active');

    currentFormStep += 1;
  });

  btnFooterBack.addEventListener('click', (e) => {
    e.preventDefault();

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
      formFour.classList.add('hide');
      formThree.classList.remove('hide');
    }

    listStepsItems[currentFormStep].children[0].classList.remove('active');
    listStepsItems[currentFormStep - 1].children[0].classList.add('active');
    currentFormStep -= 1;
  });
});