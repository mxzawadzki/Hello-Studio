document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z\s]{2,50}$/i;

  if (!re.test(name.value)) {
    name.classList.add('contact__invalid');
  } else {
    name.classList.remove('contact__invalid');
  }
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add('contact__invalid');
  } else {
    email.classList.remove('contact__invalid');
  }
}