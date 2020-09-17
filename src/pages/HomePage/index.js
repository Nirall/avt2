import React from 'react';
import { Link } from 'react-router-dom';
import FormOrder from '../../components/Form-order/FormOrder';
import stepsImg from './steps.jpg';
import RoadImages from "../../components/RoadImages/RoadImages";
import imagesArr from "./images";
import './index.css';

function HomePage(props) {
  return (
    <div>
      <div className = "home-img">
        <div className = "home-img__background">
          <div className = "home-img__content">
            <div className = "home-img__content-left">
              <p>Мы производим широкий ассортимент продукции из латуни, алюминия,
              меди и медных сплавов для различных отраслей промышленности.</p>
              <p>Гарантируем высокое качество продукции за счет применения передовых
              технологических процессов.</p>
              <Link to = '/samples' className = "home-img__button">Образцы изделий</Link>
            </div>
            <div className = "home-img__road-images">
              <RoadImages images = { imagesArr[0] }/>
            </div>
            <div className = "home-img__road-images home-img__road-images_additional">
              <RoadImages
                images = { imagesArr[1] }
                width = { 130 }
                offset = { 100 }
              />
            </div>
            <div className = "home-img__road-images home-img__road-images_horiz">
              <RoadImages
                images = { imagesArr[1] }
                width = { 130 }
                horizontal = { true }
              />
            </div>
          </div>
        </div>
      </div>
      <main className = "main">
        <h1 className = "home__title">Производственный процесс</h1>
        <div className = "home__wrapper-steps-img">
          <img className = "home__steps-img" src = { stepsImg } alt = "Этапы процесса"/>
        </div>
        <div className = "home__sections">
          <section className = "home__section">
            <ul className = "home__ul">
              <li>01 - Разработка чертежа изделия</li>
              <li>02 - Изготовление штампов и инструментов</li>
              <li>03 - Закупка сырья</li>
              <li>04 - Нарезка заготовок из прутка</li>
              <li>05 - Горячая объемная штамповка</li>
              <li>06 - Обрезка облоя</li>
              <li>07 - Дробеметная обработка</li>
              <li>08 - Механическая обработка</li>
              <li>09 - Контроль качества продукции</li>
              <li>10 - Упаковка и отгрузка</li>
            </ul>
          </section>
          <section className = "home__section home__description">
          <p>
            Вся структура компании построена на ответственной работе каждого сотрудника на
            любом уровне и вместе с техническим опытом позволяет надежно отслеживать
            весь производственный цикл.</p>
          <p>
            Все этапы производства выполняются собственными силами с тщательным контролем качества каждой операции.
          </p>
          <p>
          Высокие стандарты качества, инновационные решения, внимание к потребностям клиентов и рынка,
          позволяют постоянно совершенствовать производственный процесс.
          </p>
        </section>
        </div>
        <FormOrder />
      </main>
    </div>
  )
}

export default HomePage;