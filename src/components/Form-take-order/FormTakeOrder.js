import React from 'react';
import './FormTakeOrder.css';
import { Link } from 'react-router-dom';

function FormTakeOrder(props) {
  const onCloseHandler = () => {
    if (props.observerClose) {
      props.observerClose();
    }
  }

  return (
    <div className = { props.display ? "form-take-order__modal" : "form-take-order__modal form-take-order__modal_none"}>
      <form className = "form-take-order">
        <span
          className = "form-take-order__close"
          onClick = { onCloseHandler }
        >
          &#10006;
        </span>
        <p className = "form-take-order__title">Отправить заявку</p>
        <input type = "text" className = "form-take-order__input" placeholder = "Ф.И.О."/>
        <input type = "text" className = "form-take-order__input" placeholder = "Наименование компании"/>
        <input type = "email" className = "form-take-order__input" placeholder = "E-mail"/>
        <input type = "tel" className = "form-take-order__input" placeholder = "Телефон"/>
        <p>Прикрепить файл</p>
        <input type = "file" multiple/>
        <input type = "text" className = "form-take-order__input" placeholder = "Сообщение" />
        <button
          type = "submit"
          className = "form-take-order__submit"
          onClick = { onCloseHandler }
        >
          Отправить
        </button>
        <p className = "form-take-order__description">
          Указывая свои данные, <Link to = "/privacy">Вы соглашаетесь с нашей Политикой конфиденциальности</Link>
        </p>
      </form>
    </div>
  )

}

export default FormTakeOrder;