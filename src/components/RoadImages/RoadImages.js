import React from 'react';
import './RoadImages.css';

class RoadImages extends React.Component {
  constructor(props) {
    super(props);
    let directionClass = this.props.horizontal ? "road-images__img_forward_horiz" : "road-images__img_forward";
    this.state = {
      directionClass: directionClass,
      images: props.images,
    }
  }

  animationEndHandler = () => {
    const imagesArrCopy  = [...this.state.images];
    const lastArg = imagesArrCopy.pop();
    imagesArrCopy.unshift(lastArg);
    let directionClass = "";
    if (!this.props.horizontal) {
      directionClass = this.state.directionClass === "road-images__img_forward" ? "road-images__img_forward2" : "road-images__img_forward";
    } else {
      directionClass = this.state.directionClass === "road-images__img_forward_horiz" ? "road-images__img_forward2_horiz" : "road-images__img_forward_horiz";
    }
    this.setState({
      images: imagesArrCopy,
      directionClass: directionClass,
    });

    if (this.state.directionClass === "road-images__img_backward") {
      imagesArrCopy.push(imagesArrCopy.shift());
      const directionClass = this.state.directionClass === "road-images__img_forward" ? "road-images__img_forward2" : "road-images__img_forward";
      this.setState({
        images: imagesArrCopy,
        directionClass: directionClass,
      });
    }
  }

  render() {
    const imgList = this.state.images.map((img, index) => {
      return (
        <img
          alt = "летающие картинки"
          className = { "road-images__img " + this.state.directionClass }
          src = { img }
          width = { this.props.width + "px"}
          style = {
            !this.props.horizontal 
            ? { top: 250*(index - 1) + "px", marginTop: this.props.offset }
            : { left: 250*(index - 1) + "px", marginLeft: this.props.offset }
          }
          onAnimationEnd = { index === 0 ? this.animationEndHandler : null }
          key = { img + index }
        />
      )
    });
    return (
      <div className = "road-images">
        { imgList }
      </div>
    )
  }
}

RoadImages.defaultProps = {
  width: 100,
  offset: 0,
}

export default RoadImages;
