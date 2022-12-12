document.addEventListener('DOMContentLoaded', () => {
  const formCheckboxes = document.querySelectorAll('.div-add-on > input');
  
  for (let i = 0; i < formCheckboxes.length; i++) {
    const formCheckbox = formCheckboxes[i];

    formCheckbox.addEventListener('click', (e) => {
      if (formCheckbox.checked) {
        e.target.parentElement.classList.add('selected');
      } else {
        e.target.parentElement.classList.remove('selected');
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