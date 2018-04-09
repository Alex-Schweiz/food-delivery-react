import React from 'react';

import classes from './ReviewItem.css';

const reviewItem = (props) => (
  <div className={classes.ReviewItem}>
    <h3>Name</h3>
    <p>3 АПРЕЛЯ 2018 08:50:11</p>
    <blockquote>
      <p>
        Спасибо за роллы, хорошее качество, цена и сервис. Из всех самая быстрая доставка
      </p>
      <p>Оценка 10 из 10</p>
    </blockquote>
    <div className={classes.ReviewAnswer}>
      <blockquote>
        <img src="/img/logo3.png" alt="03" width="54px" height="48px"/>
        <p>Юрий, рады что Вам всё понравилось!</p>
      </blockquote>
    </div>
  </div>
);

export default reviewItem;
