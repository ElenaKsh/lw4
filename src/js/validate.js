export function validator(value) {
  return {
    error: [],
    getError() {
      return this.error;
    },
    checkValidEmail() {
      const regularExpressionForCheckingMail = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regularExpressionForCheckingMail.test(value)) {
        this.error.push('E-mail невалиден');
      }
      return this;
    },
    checkValidPassword() {
      if (value.length < 6) {
        this.error.push('Пароль невалиден');
      }
      return this;
    },
    checkvalidLength() {
      if (value.length < 1) {
        this.error.push('Поле не заполнено');
      }
      return this;
    },
    isNumber() {
      const numbers = value.match(/\d+|(?<=\()-?\d+(?=\))/g);
      if (numbers !== null) {
        this.error.push('Поле не должно содержать числа');
      }
      return this;
    },
    isChar() {
      if (/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(value)) {
        this.error.push('Поле не должно содержать спецсимволы');
      }
      return this;
    }
  };
}
