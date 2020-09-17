import React from 'react';
import './index.css';

function ContactsPage(props) {
  return (
    <div>
      <div className = "top-img contact-img"></div>
      <main className = "main">
        <article className = "article">
          <h1>Контакты</h1>
          <p>Полное наименование: Общество с ограниченной ответственностью «АВТ Технология»</p>
          <p>Сокращенное наименование: ООО «АВТ»</p>
          <p>Юр. адрес: 620062, Свердловская область, г. Екатеринбург,пр-т Ленина, д. 60а, офис 334</p>
          <p>Тел.: +7 965 548-55-00</p>
          <p>E-mail: avt-technology@mail.ru</p>
          <div className = "ymap">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade0a5058feacdfadf6eb9d6de6950a37102564ae697d3f8eb007e149dbd6a5c0&amp;source=constructor"
              width="100%"
              height="450"
              frameBorder="0"
              title = "ymap"
            ></iframe>
          </div>
          </article>
      </main>
    </div>
  )
}

export default ContactsPage;