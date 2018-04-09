import React from 'react';

import classes from './Footer.css';

const footer = (props) => (
  <div className={classes.Footer}>
    <div className={classes.FooterLogo}>
      <img src="/img/logo3.png" alt="03"/>
      <p>Мы делаем моменты особенными!</p>
    </div>
    <div className={classes.FooterPhones}>
      <p>(048) 781-9-555</p>
      <p>(048) 781-9-555</p>
      <p>(048) 781-9-555</p>
      <p>(048) 781-9-555</p>
      <button>Перезвоните мне</button>
    </div>
    <div className={classes.FooterMenu}>
      <a href="/">О нас</a>
      <a href="/">Оплата и доставка</a>
      <a href="/">Акции</a>
      <a href="/">Контакты</a>
      <a href="/">Вакансии</a>
      <a href="/">Отзывы</a>
      <a href="/">Бонусы</a>
    </div>
    <div className={classes.FooterInfo}>
      <p>Круглосуточная доставка еды</p>
      <p>Бесплатная доставка от 150 грн</p>
      <p>Минимальный заказ 110 грн</p>
    </div>

  </div>
);

export default footer;
