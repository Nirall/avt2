const validator = require('validator');

class Validator {
  constructor() {
    this.title = '';
    this.data = {
      fullnameError: '',
      companyError: '',
      emailError: '',
      telError: '',
      messageError: '',
    }
  }

  isEmptyCheck = (str) => {
    if (validator.isEmpty(str, { ignore_whitespace: true })) {
      this.title = 'error';
      return "Поле обязательно для заполнения";
    }
  }

  fullnameCheck = (fullname) => {
    if (validator.isEmpty(fullname, { ignore_whitespace: true })) {
      this.title = 'error';
      return "Поле Ф.И.О обязательно для заполнения";
    }
    /*
    if (!/^[а-яА-ЯёЁ]+\s[а-яА-ЯёЁ]+\s[а-яА-ЯёЁ]+$/.test(fullname)) {
      this.title = 'error';
      return 'Введите корректное Ф.И.О формата "Иванов Иван Иваныч"';
    }
    */
    if (fullname.length > 40) {
      this.title = 'error';
      return "Ф.И.О не должно превышать 40 символов";
    }
  }

  companyCheck = (company) => {
    if (!company) return;

    if (company.length > 30) {
      this.title = 'error';
      return "Название компании не должно превышать 30 символов";
    }
  }

  emailCheck = (email) => {
    if (!email) return;

    if (email.length > 20) {
      this.title = 'error';
      return "Название почты не должно превышать 20 символов";
    }

    if (!validator.isEmail(validator.normalizeEmail(email))) {
      this.title = 'error';
      return "Введите корректный email";
    }
  }

  telCheck = (tel) => {
    if (!tel) return;

    if (tel.length > 20) {
      this.title = 'error';
      return "Номер телефона не должен превышать 20 символов";
    }

    if (!/^[\d\+\(\)\-\s]+$/.test(tel)) {
      this.title = 'error';
      return "Введите корректный телефон";
    }
  }

  messageCheck = (message) => {
    if (!message) return;

    if (message.length > 300) {
      this.title = 'error';
      return "Длина сообщения не должна превышать 300 символов";
    }
  }

  formOrderCheck = (body) => {
    Object.keys(body).map((key) => {
      switch (key) {
        case 'fullname':
          this.data.fullnameError = this.fullnameCheck(body[key]);
          break;
        case 'company':
          this.data.companyError = this.companyCheck(body[key]);
          break;
        case 'email':
          this.data.emailError = this.emailCheck(body[key]);
          break;
        case 'tel':
          this.data.telError = this.telCheck(body[key]);
          break;
        case 'message':
          this.data.messageError = this.messageCheck(body[key]);
          break;
      }
    })

    return [this.title, this.data];
  }
}

module.exports = Validator;