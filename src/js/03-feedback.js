import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

dataFromLocalStorage();

function onSubmitForm(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}








// import throttle from 'lodash.throttle';

// const LOCALSTORAGE_KEY = 'selectedFilters';
// const formEl = document.querySelector('.feedback-form');

// initForm();

// formEl.addEventListener('submit', onFormSubmit);
// formEl.addEventListener('input', throttle(onFormInput, 500));

// function onFormSubmit(evt) {
//   evt.preventDefault();
//   const formData = new FormData(formEl);
//   formData.forEach((value, name) => console.log(value, name));
//   evt.currentTarget.reset();
//   localStorage.removeItem(LOCALSTORAGE_KEY);
// }

// function onFormInput(evt) {
//   let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
//   persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
//   persistedFilters[evt.target.name] = evt.target.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
// }

// function initForm() {
//   let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
//   if (persistedFilters) {
//     persistedFilters = JSON.parse(persistedFilters);
//     Object.entries(persistedFilters).forEach(([name, value]) => {
//       formEl.elements[name].value = value;
//     });
//   }
// }

// import throttle from "lodash.throttle";

// const STORAGE_KEY = 'feedback';
// const formData ={};

// const refs = {
//     form: document.querySelector('.js-feedback'),
//     textarea: document.querySelector('.js-feedback textarea'),
// };

// refs.form.addEventListener('submit', onFormsubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//     // console.log(e.target.name);
//     // console.log(e.target.value);

//     formData[e.target.name] = e.target.value;
//     localStorage.setItem(FORM_STATE, JSON.stringify(formData));
//     console.log(formData);
// });

// populateTextarea();

// function onFormsubmit(evt) {
//     evt.prevenDefault();
//     console.log('Отправляем форму');
//     evt.curentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY);
// };

// function onTextareaInput(evt) {
//     const message = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(message));
// };

// function populateTextarea() {
//     const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
//     if (savedMessage) {
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//     }
// };
