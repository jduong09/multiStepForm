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