import React, { useState } from 'react';
import './Popup.scss';

function Popup(props) {
  return (
    <div className = { props.display ? "popup popup_visible" : "popup" }>
      { props.message || 'popup message' }
    </div>
  )
}

export default Popup;