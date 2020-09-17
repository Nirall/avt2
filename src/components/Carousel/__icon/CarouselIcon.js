import React from 'react';
import './CarouselIcon.css';

function CarouselIcon(props) {
  return (
    <div
      className = "carousel__icon"
      onClick = { props.handlerClick.bind(this, props.index) }
      style = {{ background: `center/contain no-repeat url(${props.img})` }}
      >
    </div>
  )
}

export default CarouselIcon;