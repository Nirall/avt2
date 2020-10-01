import React from 'react';
import './Footer.scss';
import URLs from '../../URLs';

function Footer(props) {
  const navList = URLs.map((url) => {
    return (
      <a href = { url.path } key = { url.name } className = "footer__link footer__link_uppercase">
        { url.name }
      </a>
    )
  });

  return (
    <footer className = 'footer'>
      <div className = "footer__item footer__item_big">
        <h5 className = 'footer__title'>avt technology</h5>
        <a href = 'mailto:avt-technology@mail.ru' className = 'navbar__link'>avt-technology@mail.ru</a>
        <a href = 'tel:+79655485500' className = 'navbar__link'>+7 965 548-55-00</a>
      </div>
      <div className = "footer__item footer__nav">
        { navList }
      </div>
      <div className = "footer__item footer__about">
        <p>
          Мы производим широкий ассортимент продукции из латуни,
          алюминия, меди и медных сплавов для различных отраслей промышленности.
        </p>
        <p>
          Гарантируем высокое качество продукции за счет применения передовых технологических процессов.
        </p>
      </div>
    </footer>
  )
}

export default Footer;