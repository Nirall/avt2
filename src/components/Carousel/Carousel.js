import React from 'react';
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import img4 from "./images/4.png";
import img5 from "./images/5.png";

import "./Carousel.css";

import CarouselIcon from "./__icon/CarouselIcon";

const imagesDict = [
  {name: "Заготовка под штамповку", src: img1},
  {name: "Поковка с облоем", src: img2},
  {name: "Поковка без облоя", src: img3},
  {name: "Поковка после дробемета", src: img4},
  {name: "Поковка обработанная", src: img5}, 
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: img1,
      activeName: imagesDict[0].name,
    }
  }

  handleIconClick = (index, e) => {;
    this.setState({
      activeImg: imagesDict[index].src,
      activeName: imagesDict[index].name,
    })
  }

  render() {
    const listIcons = imagesDict.map((img, index) => {
      return <CarouselIcon img = { img.src } handlerClick = { this.handleIconClick } key = { img.name } index = { index } />
    })

    return (
      <div className = "carousel">
        <h2 className = "carousel__title">{ this.state.activeName }</h2>
        <div
          className = "carousel__img"
          style = {{ background: `center/contain no-repeat url(${this.state.activeImg})` }}
        >
        </div>
        <div className = "carousel__icons">
        { listIcons }
        </div>
      </div>
    )
  }
}

export default Carousel;