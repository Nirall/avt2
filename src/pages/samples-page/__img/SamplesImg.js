import React from 'react';

function SamplesImg(props) {
  return (
    <div
      className = "samples__img"
      style = {{ background: `center/cover no-repeat url(${props.img})`}}
      onClick  = { props.clickHandler.bind(this, props.index) }>
    </div>
  )
}

export default SamplesImg;