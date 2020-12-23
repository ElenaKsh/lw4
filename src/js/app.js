import { validator } from './validate';

function generationError(element, listError) {
  if (listError.length > 0) {
    element.classList.add('form-registration-item__input--error');
    const groupElement = element.parentElement;
    const errorList = groupElement.getElementsByClassName(
      'form-registration-item__error'
    )[0];
    for (let i = 0; i < listError.length; i++) {
      const error = document.createElement('li');
      error.innerHTML = listError[i];
      errorList.append(error);
    }
  }
}

window.onload = function load() {
  const name = document.getElementById('name');
  const surName = document.getElementById('surName');
  const patronymic = document.getElementById('patronymic');
  const email = document.getElementById('email');
  const password = document.getElementById('password');

  const form = document.querySelector('.form-registration');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const errorName = validator(name.value)
      .checkvalidLength()
      .isNumber()
      .isChar()
      .getError();
    const errorSurName = validator(surName.value)
      .checkvalidLength()
      .isNumber()
      .isChar()
      .getError();
    const errorPatronymic = validator(patronymic.value)
      .checkvalidLength()
      .isNumber()
      .isChar()
      .getError();
    const errorEmail = validator(email.value)
      .checkvalidLength()
      .checkValidEmail()
      .getError();
    const errorPassword = validator(password.value)
      .checkvalidLength()
      .checkValidPassword()
      .getError();
    const listsError = document.querySelectorAll(
      '.form-registration-item__error'
    );

    const input = document.getElementsByTagName('input');

    for (let i = 0; i < input.length; i++) {
      input[i].classList.remove('form-registration-item__input--error');
    }
    for (let i = 0; i < listsError.length; i++) {
      const errors = listsError[i].getElementsByTagName('li');
      for (let j = 0; j < errors.length;) {
        errors[j].remove();
      }
    }
    generationError(name, errorName);
    generationError(surName, errorSurName);
    generationError(patronymic, errorPatronymic);
    generationError(email, errorEmail);
    generationError(password, errorPassword);
  });
};
