import React from 'react';
import './FormTakeOrder.scss';
import { Link } from 'react-router-dom';
import FormOrder from '../Form-order/FormOrder';

function FormTakeOrder(props) {
  const onCloseHandler = () => {
    if (props.observerClose) {
      props.observerClose();
    }
  }

  return (
    <div className = { props.display ? "form-take-order__modal" : "form-take-order__modal form-take-order__modal_none"}>
      <FormOrder type = "popup" onCloseHandler = { onCloseHandler } />
    </div>
  )
}

export default FormTakeOrder;