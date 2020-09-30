import React, { useState } from 'react';
import './FormTakeCall.scss';
import { Link } from 'react-router-dom';
import Validator from '../../validator';
import Popup from '../Popup/Popup';

function FormTakeCall(props) {
  const [fullname, fullnameState] = useState('');
  const [fullnameError, fullnameErrorState] = useState('');
  const [company, companyState] = useState('');
  const [companyError, companyErrorState] = useState('');
  const [tel, telState] = useState('');
  const [telError, telErrorState] = useState('');
  const [popupDisplay, popupDisplayState] = useState(false);
  const [popupMessage, popupMessageState] = useState('');
  const validator = new Validator();

  const fullnameHandler = (text) => {
    fullnameState(text);
    fullnameErrorState(validator.fullnameCheck(text));}

  const companyHandler = (text) => {
    companyState(text);
    companyErrorState(validator.companyCheck(text));}

  const telHandler = (text) => {
    telState(text);
    telErrorState(validator.telReqCheck(text));}

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
          case 'telError':
            telErrorState(response.data[key]);
            break;
        }
      });
    }
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (fullnameError || companyError || telError) {
      return null;
    }

    const formData = new FormData(document.querySelector('.form-call'));
    formData.append('form', 'take-call');

    fetch('/order', {
      method: 'post',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => errorsHandler(data))
      .catch((err) => errorsHandler(err));
  }


  const onCloseHandler = () => {
    if (props.observerClose) {
      props.observerClose();
    }
  }

  return (
    <div className = { props.display ? "form-call__modal" : "form-call__modal form-call__modal_none"}>
      <form className = "form-call" action = '/order' method = 'post' onSubmit = { (e) => onSubmitHandler(e) }>
        <span
          className = "form-call__close"
          onClick = { onCloseHandler }
        >
          &#10006;
        </span>
        <p className = "form-call__title">Обратный звонок</p>
        <input
          type = "text" name = "fullname" onChange = { (e) => fullnameHandler(e.target.value) } placeholder = "Ф.И.О."
          className = { fullnameError ? "form-call__input form-call__input_wrong" : "form-call__input" } value = { fullname }
        />
        <div className = "form-call__error"> { fullnameError } </div>
        <input
          type = "text" name = "company" onChange = { (e) => companyHandler(e.target.value) } placeholder = "Наименование компании"
          className = { companyError ? "form-call__input form-call__input_wrong" : "form-call__input" } value = { company }
        />
        <input
          type = "tel" name = "tel" onChange = { (e) => telHandler(e.target.value) } placeholder = "Телефон"
          className = { telError ? "form-call__input form-call__input_wrong" : "form-call__input" } value = { tel }
        />
        <div className = "form-order__error"> { telError } </div>
        <button
          type = "submit"
          className = "form-call__submit"
          //onClick = { onCloseHandler }
        >
          Отправить
        </button>
        <p className = "form-call__description">Указывая свои данные,
          <Link to = "/privacy" className = "form-call__reference"> Вы соглашаетесь с нашей Политикой конфиденциальности</Link>
        </p>
      </form>
      <Popup display = { popupDisplay } message = { popupMessage }/>
    </div>
  )

}

export default FormTakeCall;