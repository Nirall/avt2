import React from 'react';
import Slider from '../../components/Slider/Slider';
import Carousel from "../../components/Carousel/Carousel";
import FormOrder from "../../components/Form-order/FormOrder";
import './index.css';

import img1 from './sliderImgs/1.jpg';
import img2 from './sliderImgs/2.jpg';
import img3 from './sliderImgs/3.jpg';
import img4 from './sliderImgs/4.jpg';
import img5 from './sliderImgs/5.jpg';
import img6 from './sliderImgs/6.jpg';
import img7 from './sliderImgs/7.jpg';
import img8 from './sliderImgs/8.jpg';
import img9 from './sliderImgs/9.jpg';
import img10 from './sliderImgs/10.jpg';

function HotDieForgingPage(props) {
  return (
    <div>
      <div className = "top-img stamp-img"></div>
      <main className = "main">
        <h1>ГОРЯЧАЯ ОБЪЕМНАЯ ШТАМПОВКА</h1>
        <div className = "content">
          <article className = "article">
            Участок горячей объемной штамповки состоит:
            <ul>
              <li>автоматические станки для резки заготовки</li>
              <li>пресс горячештамповочный с комплексом автоматизации усилием 3000 кН</li>
              <li>пресс горячештамповочный с комплексом автоматизации усилием 2000 кН</li>
              <li>вырубной пресс усилием 300 кН</li>
              <li>дробеметная установка</li>
            </ul>
            <p>
              На данном оборудовании изготавливаются поковки весом до 2 кг.< br/>
              Средняя производительность одного горячештамповочного пресса 14 поковок в минуту.
            </p>
            Характеристики получаемых поковок:
            <ul>
              <li>вес от 0,01 кг до 2 кг</li>
              <li>максимальные размеры поковок (длина х ширина х высота) 100х100х60 мм</li>
              <li>минимальная партия производства 5000 штук</li>
            </ul>
          </article>
          <aside className = "aside">
            <Slider images = { [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10] }></Slider>
            <p className = "main-idea">
              Глубокие знания в области цветной металлургии и технологии штамповки
              позволяют обеспечить высокое качество получаемых изделий.
            </p>
          </aside>
        </div>
        <Carousel />
        <FormOrder />
      </main>
    </div>
  )
}

export default HotDieForgingPage;