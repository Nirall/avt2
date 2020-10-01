import React, {useState} from 'react';
import './FormOrder.scss';
import Validator from '../../validator';
import Popup from '../Popup/Popup';

function FormOrder(props) {
  const [fullname, fullnameState] = useState('');
  const [fullnameError, fullnameErrorState] = useState('');
  const [company, companyState] = useState('');
  const [companyError, companyErrorState] = useState('');
  const [email, emailState] = useState('');
  const [emailError, emailErrorState] = useState('');
  const [tel, telState] = useState('');
  const [telError, telErrorState] = useState('');
  const [message, messageState] = useState('');
  const [messageError, messageErrorState] = useState('');
  const [fileError, fileErrorState] = useState('');
  const [popupDisplay, popupDisplayState] = useState(false);
  const [popupMessage, popupMessageState] = useState('');
  const validator = new Validator();

  const fullnameHandler = (text) => {
    fullnameState(text);
    fullnameErrorState(validator.fullnameCheck(text));}

  const companyHandler = (text) => {
    companyState(text);
    companyErrorState(validator.companyCheck(text));}

  const emailHandler = (text) => {
    emailState(text);
    emailErrorState(validator.emailCheck(text));}

  const telHandler = (text) => {
    telState(text);
    telErrorState(validator.telCheck(text));}

  const messageHandler = (text) => {
    messageState(text);
    messageErrorState(validator.messageCheck(text));}

  const popupHandler = (text) => {
    popupDisplayState(true);
    popupMessageState(text);
    setTimeout(() => popupDisplayState(false), 3000);
  }

  const errorsHandler = (response) => {
    if (response.title === 'fail' || !response.title) {
      popupHandler('Письмо не отправлено. Ошибка сервера');
      return;
    } else if (response.title === 'success') {
      popupHandler('Письмо успешно отправлено');
      return;
    }

    if (response.data) {
      Object.keys(response.data).map((key) => {
        switch (key) {
          case 'fullnameError':
            fullnameErrorState(response.data[key]);
            break;
          case 'companyError':
            companyErrorState(response.data[key]);
            break;
          case 'emailError':
            emailErrorState(response.data[key]);
            break;
          case 'telError':
            telErrorState(response.data[key]);
            break;
          case 'messageError':
            messageErrorState(response.data[key]);
            break;
          case 'fileError':
            fileErrorState(response.data[key]);
            break;
        }
      });
    }
  }

  let closeBtn = null;
  let title = <h2 className = "form-order__title">Отправить заявку</h2>;
  let header = "Воспользуйтесь формой обратной связи";
  let formClass = "form-order js-form-order";
  let formClassSelector = ".js-form-order";
  let wrapperClass = "form-order-wrapper";

  if (props.type === "popup") {
    closeBtn = <span className = "form-order__close" onClick = { props.onCloseHandler }>&#10006;</span>
    title = null;
    header = "ОТПРАВИТЬ ЗАЯВКУ";
    formClass = "form-order form-order_type_popup js-form-order_type_popup";
    formClassSelector = ".js-form-order_type_popup";
    wrapperClass += " form-order-wrapper_type_popup";
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (fullnameError || companyError || emailError || telError || fileError || messageError) {
      return null;
    }

    const formData = new FormData(document.querySelector(formClassSelector));
    formData.append('form', 'take-order');

    fetch('/order', {
      method: 'post',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => errorsHandler(data))
      .catch((err) => errorsHandler(err));
  }

  return (
    <div className = { wrapperClass }>
      { title }
      <form className = { formClass } action = '/order' method = 'post' onSubmit = { (e) => onSubmitHandler(e) }>
        { closeBtn }
        <p className = "form-order__header">{ header }</p>
        <input
          type = "text" name = "fullname" onChange = { (e) => fullnameHandler(e.target.value) } placeholder = "Ф.И.О."
          className = { fullnameError ? "form-order__input form-order__input_wrong" : "form-order__input" } value = { fullname }
        />
        <div className = "form-order__error"> { fullnameError } </div>
        <input
          type = "text" name = "company" onChange = { (e) => companyHandler(e.target.value) } placeholder = "Наименование компании"
          className = { companyError ? "form-order__input form-order__input_wrong" : "form-order__input" } value = { company }
        />
        <div className = "form-order__error"> { companyError } </div>
        <input
          type = "text" name = "email" onChange = { (e) => emailHandler(e.target.value) } placeholder = "E-mail"
          className = { emailError ? "form-order__input form-order__input_wrong" : "form-order__input" } value = { email }
        />
        <div className = "form-order__error"> { emailError } </div>
        <input
          type = "tel" name = "tel" onChange = { (e) => telHandler(e.target.value) } placeholder = "Телефон"
          className = { telError ? "form-order__input form-order__input_wrong" : "form-order__input" } value = { tel }
        />
        <div className = "form-order__error"> { telError } </div>
        <p>Прикрепить файл</p>
        <input type = "file" name = "file" multiple onChange = { (e) => fileErrorState('') }/>
        <div className = "form-order__error"> { fileError } </div>
        <textarea
          rows = "3"
          type = "text" name = "message" onChange = { (e) => messageHandler(e.target.value) } placeholder = "Сообщение"
          className = { messageError ? "form-order__input form-order__input_wrong" : "form-order__input" } value = { message }
        />
        <div className = "form-order__error"> { messageError } </div>
        <button className = "form-order__btn" type = "submit">Отправить</button>
        <p className = "form-order__description">Указывая свои данные,
          <a href = "/privacy" className = "form-order__reference"> Вы соглашаетесь с нашей Политикой конфиденциальности</a>
        </p>
      </form>
      <Popup display = { popupDisplay } message = { popupMessage }/>
    </div>
  )
}

export default FormOrder;