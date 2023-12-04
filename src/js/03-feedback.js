const throttle = require('lodash.throttle');

const refs = { form: document.querySelector('.feedback-form') };
let feedback_form_state = getValue();

const throtledInput = throttle(onInput, 500);

refs.form.addEventListener('input', throtledInput);
refs.form.addEventListener('submit', onSubmit);

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

  localStorage.removeItem('feedback_form_state');
  // localStorage.clear();
  event.currentTarget.reset();

  console.log(feedback_form_state);
  feedback_form_state = getValue();
}

function getValue() {
  try {
    const res = JSON.parse(localStorage.getItem('feedback_form_state'));
    refs.form.email.value = res.email || '';
    refs.form.message.value = res.message || '';
    return res;
  } catch {
    return {
      email: '',
      message: '',
    };
  }
}
