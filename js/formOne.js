const verifyFormOne = () => {
  const name = document.getElementById('input-name');
  const email = document.getElementById('input-email');
  const number = document.getElementById('input-number');
  const letters = /^[a-z ,.'-]+$/i;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const phoneNumber = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/


  if (new RegExp(letters).test(name.value)) {
    console.log('name verified');
    name.parentElement.children[1].classList.add('hide');
    name.classList.remove('error');
  } else {
    console.log('name error');
    name.parentElement.children[1].classList.remove('hide');
    name.classList.add('error');
    return false;
  }

  if (new RegExp(emailRegex).test(email.value)) {
    console.log('email verified');
    email.parentElement.children[1].classList.add('hide');
    email.classList.remove('error');
  } else {
    console.log('email error');
    email.parentElement.children[1].classList.remove('hide');
    email.classList.add('error');
    return false;
  }

  if (new RegExp(phoneNumber).test(number.value)) {
    console.log('phone number verified');
    number.parentElement.children[1].classList.add('hide');
    number.classList.remove('error');
  } else {
    console.log('phone number error');
    number.parentElement.children[1].classList.remove('hide');
    number.classList.add('error');
    return false;
  }

  return true;
}