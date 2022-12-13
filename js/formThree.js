document.addEventListener('DOMContentLoaded', () => {
  const divAddOns = document.getElementsByClassName('div-add-on');
  
  for (let i = 0; i < divAddOns.length; i++) {
    const divAddOn = divAddOns[i];

    divAddOn.addEventListener('click', (e) => {
      e.preventDefault();

      if (divAddOn.classList.contains('selected')) {
        divAddOn.classList.remove('selected');
        divAddOn.children[0].checked = false;
      } else {
        divAddOn.classList.add('selected');
        divAddOn.children[0].checked = true;
      }
    });
  }
});

const sendFormThree = () => {
  const formCheckboxes = document.querySelectorAll('.div-add-on > input');
  let formObj = {};

  for (let i = 0; i < formCheckboxes.length; i++) {
    if (formCheckboxes[i].checked) {
      formObj[i] = {
        name: formCheckboxes[i].getAttribute('data-name'),
        price: formCheckboxes[i].parentElement.children[2].getAttribute('data-price')
      }
    }
  }

  return formObj;
};