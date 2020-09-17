import React from 'react';
import './Slider2FIeld.css';

class Slider2FIeld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directionClass: "",
      countArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }

  forward = () => {
    this.setState({
      directionClass: "slider2field__img_forward",
    })
  }

  backward = () => {
    this.setState({
      directionClass: "slider2field__img_backward",
    })
  }

  animationEndHandler = () => {
    const countArrCopy = this.state.countArr;
    if (this.state.directionClass === "slider2field__img_forward") {
      const firstArg = countArrCopy.shift();
      countArrCopy.push(firstArg);
      this.setState({
        directionClass: "",
        countArr: countArrCopy,
      })
    }
    
    if (this.state.directionClass === "slider2field__img_backward") {
      const lastArg = countArrCopy.pop();
      countArrCopy.unshift(lastArg);
      this.setState({
        directionClass: "",
        countArr: countArrCopy,
      })
    }
  }

  render() {
    return (
      <div className = "slider2field">
        <div className = "slider2field__images">
          <div className = { "slider2field__img slider2field__prev-img " + this.state.directionClass }>
            { this.state.countArr[(this.state.countArr.length-1)] }
          </div>
          <div
            className = { "slider2field__img slider2field__first-img " + this.state.directionClass }
            onAnimationEnd = { this.animationEndHandler }
          >
            { this.state.countArr[0] }
          </div>
          <div className = { "slider2field__img slider2field__second-img " + this.state.directionClass }>
            { this.state.countArr[1] }
          </div>
          <div className = { "slider2field__img slider2field__next-img " + this.state.directionClass }>
            { this.state.countArr[2] }
          </div>
          <div className = "slider2field__btn slider2field__btn_left" onClick = { this.backward }>
            &#10096;
          </div>
          <div className = "slider2field__btn slider2field__btn_right" onClick = { this.forward }>
            &#10097;
          </div>
        </div>
      </div>
    )
  }
}

export default Slider2FIeld;