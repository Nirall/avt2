import React from 'react';
import { brassArrImgs, alumArrImgs, coppArrImgs } from "./images";
import Slider from '../../components/Slider/Slider';
import SamplesImg from './__img/SamplesImg';
import './index.css';

class SamplesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: 'brassListImgs',
      activeSlider: false,
      activeImg: 0,
      isCurrentWidthLess: false,
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeHandler);
    this.resizeHandler();
  }

  titleClickHandler = (section, e) => {
    this.setState({
      activeList: section,
      activeImg: 0,
    })
  }

  imgClickHandler = (index, e) => {
    this.setState({
      activeSlider: true,
      activeImg: index,
    })
  }

  sliderCloseHandler = () => {
    this.setState({
      activeSlider: false,
    })
  }

  resizeHandler = () => {
    if (window.innerWidth < 650) {
      this.setState({
        isCurrentWidthLess: true,
      });
    } else {
      this.setState({
        isCurrentWidthLess: false,
      });
    }
  }

  render() {
    const brassListImgs = brassArrImgs.map((img, index) => {
      return <SamplesImg img = { img } key = { img } index = { index } clickHandler  = { this.imgClickHandler } />
    })
  
    const alumListImgs = alumArrImgs.map((img, index) => {
      return <SamplesImg img = { img } key = { img } index = { index } clickHandler  = { this.imgClickHandler } />
    })
  
    const coppListImgs = coppArrImgs.map((img, index) => {
      return <SamplesImg img = { img } key = { img } index = { index } clickHandler  = { this.imgClickHandler } />
    })

    let activeList;
    let activeArr;

    switch (this.state.activeList) {
      case 'alumListImgs':
        activeList = alumListImgs;
        activeArr = alumArrImgs;
        break;

      case 'coppListImgs':
        activeList = coppListImgs;
        activeArr = coppArrImgs;
        break;

      default:
        activeList = brassListImgs;
        activeArr = brassArrImgs;
    }

    let isShowSlider = (this.state.activeSlider || this.state.isCurrentWidthLess);

    return (
      <div>
        <div className = "top-img samples-img"></div>
        <main className = "main">
          <h1>ОБРАЗЦЫ ИЗДЕЛИЙ</h1>
          <div className = "content">
            <article className = "article">
              Примеры использования нашей продукции:
              <ul>
                <li>Корпус латунный для счетчика жидкостей и газов</li>
                <li>Корпус латунный для насосов</li>
                <li>Латунные коллекторы</li>
                <li>Латунные и алюминиевые крышки и заглушки</li>
                <li>Латунная и алюминиевая фурнитура</li>
                <li>Латунные и алюминиевые клапаны</li>
                <li>Корпуса латунных шаровых кранов, вентилей, задвижек</li>
                <li>Медные контакты</li>
              </ul>
              Характеристики получаемых поковок:
              <ul>
                <li>вес от 0,01 кг до 2 кг</li>
                <li>максимальные размеры поковок (длина х ширина х высота) 100х100х60 мм</li>
                <li>минимальная партия производства 5000 штук</li>
              </ul>
              Характеристики механически обработанных деталей:
              <ul>
                <li>вес от 0,01 кг до 1,4 кг</li>
                <li>максимальные размеры детали (длина х ширина х высота) 120х80х80 мм</li>
                <li>минимальная партия производства 5000 штук</li>
              </ul>
            </article>
            <aside className = "aside">
              <p className = "main-idea">
                Наше автоматизированное современное оборудование гарантируют высокое качество
                продукции и может обеспечить крупносерийное и массовое производство изделий заданной точности.
                <br /> 
                До 500 000 деталей в месяц.
              </p>
            </aside>
          </div>
          <h2>ОБРАЗЦЫ</h2>
          <div className = "samples__titles">
            <div className = "samples__title" onClick = { this.titleClickHandler.bind(this, 'brassListImgs') }>Образцы из латуни</div>
            <div className = "samples__title" onClick = { this.titleClickHandler.bind(this, 'alumListImgs') }>Образцы из алюминия</div>
            <div className = "samples__title" onClick = { this.titleClickHandler.bind(this, 'coppListImgs') }>Образцы из меди</div>
          </div>
          <div className = "samples__images">
            { !this.state.isCurrentWidthLess && activeList }
          </div>
        </main>
        <div className = "samples__wrapper-slider">
          { isShowSlider 
            && <Slider
              images = { activeArr }
              activeImg = { this.state.activeImg }
              active = { this.state.activeSlider }
              onlyFullScreen = { !this.state.isCurrentWidthLess }
              closeObserver = { this.sliderCloseHandler }
              key = { activeArr }
            />
          }
        </div>
      </div>
    )
  }
}

export default SamplesPage;