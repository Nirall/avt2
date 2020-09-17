import React from 'react';
import './FormTakeCall.css';
import { Link } from 'react-router-dom';

function FormTakeCall(props) {
  const onCloseHandler = () => {
    if (props.observerClose) {
      props.observerClose();
    }
  }

  return (
    <div className = { props.display ? "form-take-call__modal" : "form-take-call__modal form-take-call__modal_none"}>
      <form className = "form-take-call">
        <span
          className = "form-take-call__close"
          onClick = { onCloseHandler }
        >
          &#10006;
        </span>
        <p className = "form-take-call__title">Обратный звонок</p>
        <input type = "text" className = "form-take-call__input" placeholder = "Ф.И.О."/>
        <input type = "text" className = "form-take-call__input" placeholder = "Наименование компании"/>
        <input type = "tel" className = "form-take-call__input" placeholder = "Телефон"/>
        <button
          type = "submit"
          className = "form-take-call__submit"
          onClick = { onCloseHandler }
        >
          Отправить
        </button>
        <p className = "form-take-call__description">
          Указывая свои данные, <Link to = "/privacy">Вы соглашаетесь с нашей Политикой конфиденциальности</Link>
        </p>
      </form>
    </div>
  )

}

export default FormTakeCall;