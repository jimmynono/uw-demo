// console.log('Right file');
const form = document.getElementById('connect-form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const selectElement = document.getElementById('contact-kind');
const os = document.getElementById('operating-system');
const employees = document.getElementById('num-of-employees');

const validLength = (input, min) => {
  if (input.value.trim().length >= min) {
    input.parentElement.classList.remove('invalid');
    return true;
  } else {
    input.parentElement.classList.add('invalid');
    return false;
  }
};

const validateEmail = (email) => {
  const re = /\w+@\w+\.\w+/;
  if (re.test(email.value.trim())) {
    email.parentElement.classList.remove('invalid');
    return true;
  } else {
    email.parentElement.classList.add('invalid');
    return false;
  }
};

const handleSelect = (selectElement) => {
  const selectedValue = selectElement.value;
  if (selectedValue === 'business') {
    os.parentElement.classList.remove('hidden');
    employees.parentElement.classList.add('hidden');
  } else if (selectedValue === 'technical') {
    employees.parentElement.classList.remove('hidden');
    os.parentElement.classList.add('hidden');
  }
};

selectElement.addEventListener('change', () => {
  handleSelect(selectElement);
});

form.addEventListener('submit', (e) => {
  if (
    validLength(firstName, 3) &&
    validLength(lastName, 5) &&
    validateEmail(email)
  ) {
    console.log('GOOD FORM');
  } else {
    e.preventDefault();
    console.log('BAD FORM');
  }
});
