const throttle = require('lodash.throttle');

const refs = { form: document.querySelector('.feedback-form') };

let feedback_form_state = onLoad();

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
  if (JSON.stringify(feedback_form_state) === '{}') return;
  console.log(feedback_form_state);

  localStorage.removeItem('feedback_form_state');
  event.currentTarget.reset();
  feedback_form_state = {};
}

function onLoad() {
  let result;
  try {
    result = JSON.parse(localStorage.getItem('feedback_form_state'));
    updateForm(result);
  } catch {
    result = {};
  }
  return result;
}

function updateForm(obj) {
  Object.entries(obj).forEach(
    ([key, value]) => (refs.form.elements[key].value = value)
  );
  refs.form.addEventListener('input', throttle(onInput, 500));
  refs.form.addEventListener('submit', onSubmit);
}
