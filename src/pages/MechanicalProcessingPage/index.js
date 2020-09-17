import React from 'react';
import Slider from '../../components/Slider/Slider';
import Carousel from "../../components/Carousel/Carousel";
import FormOrder from "../../components/Form-order/FormOrder";
import './index.css';

import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';

function MechanicalProcessingPage(props) {
  return (
    <div>
      <div className = "top-img mecn-img"></div>
      <main className = "main">
        <h1>МЕХАНИЧЕСКАЯ ОБРАБОТКА</h1>
        <div className = "content">
          <article className = "article">
            Участок механической обработки состоит из современного высокопроизводительного оборудования:
            <ul>
              <li>агрегатный станок с ЧПУ для обработки прутка (стол на 10 позиций)</li>
              <li>агрегатный станок с ЧПУ для обработки поковок (стол на 10 позиций)</li>
              <li>агрегатный станок с ЧПУ для обработки поковок (стол на 8 позиций)</li>
              <li>агрегатный станок с ЧПУ для изготовления сфер- токарный станок с ЧПУ</li>
              <li>токарный прутковый автомат с ЧПУ</li>
            </ul>
            <p>
              Агрегатные станки имеют максимальную степень автоматизации, что дает возможность
              выпускать продукцию и обеспечивать рабочий процесс эксплуатации оборудования без
              постоянного присутствия оператора
            </p>
            <p>
              Все агрегатные станки имеют высокую производительность – около 20 деталей в минуту,
              надежность и постоянство рабочего цикла, что в результате дает низкую стоимость изделия.
            </p>
            Характеристики получаемых деталей:
            <ul>
              <li>вес от 0,01 кг до 1,4 кг</li>
              <li>максимальные размеры детали (длина х ширина х высота) 120х80х80 мм</li>
              <li>минимальная партия производства 5000 штук</li>
            </ul>
          </article>
          <aside className = "aside">
            <Slider images = { [img1, img2, img3, img4] }></Slider>
            <p className = "main-idea">
              Благодаря высокотехнологичному оборудованию мы можем обеспечить крупносерийное и массовое
              производство изделий заданной точности.
              <br />
              До 500 000 деталей в месяц.
            </p>
          </aside>
        </div>
        <Carousel />
        <FormOrder />
      </main>
    </div>
  )
}

export default MechanicalProcessingPage;