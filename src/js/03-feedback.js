const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
let feedback_form_state = getValue();
const throtledInput = throttle(onInput, 500);

form.addEventListener('input', throtledInput);
form.addEventListener('click', onClick);

function onInput(event) {
  const { name, value } = event.target;

  feedback_form_state[name] = value;

  localStorage.setItem(
    'feedback_form_state',
    JSON.stringify(feedback_form_state)
  );
}

function onClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  event.preventDefault();

  console.log(`  email: ${form.email.value} 
  message: ${form.message.value}`);
  localStorage.clear();
  form.email.value = form.message.value = '';
  feedback_form_state = getValue();
}

function getValue() {
  if (localStorage.feedback_form_state) {
    const res = JSON.parse(localStorage.getItem('feedback_form_state'));

    form.email.value = res.email;
    form.message.value = res.message;
    return res;
  }
  return {
    email: '',
    message: '',
  };
}
