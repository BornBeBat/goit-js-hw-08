const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
let feedback_form_state = getValue();
const throtledInput = throttle(onInput, 500);

form.addEventListener('input', throtledInput);
form.addEventListener('submit', onSubmit);

function onInput(event) {
  const { name, value } = event.target;
  feedback_form_state[name] = value;

  localStorage.setItem(
    'feedback_form_state',
    JSON.stringify(feedback_form_state)
  );
}

function onSubmit(event) {
  event.preventDefault();

  localStorage.clear();
  event.currentTarget.reset();

  console.log(feedback_form_state);
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
