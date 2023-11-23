const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const feedback_form_state = getValue();
const throtledInput = throttle(onInput, 500);

form.addEventListener('input', throtledInput);
form.addEventListener('click', onClick);

function onInput(event) {
  //   const { email, message} = feedback_form_state;
  const { name, value } = event.target;

  switch (name) {
    case 'email':
      feedback_form_state.email = value;
      //   email = value;
      break;
    case 'message':
      feedback_form_state.message = value;
      //   message = value;
      break;
  }
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

  console.log('email:', form.email.value);
  console.log('message:', form.message.value);
  form.email.value = form.message.value = '';
  localStorage.clear();
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
