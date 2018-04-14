import React from 'react';

import classes from './ReviewItem.css';

const reviewItem = (props) => (
  <div className={classes.ReviewItem}>
    <h3>Name</h3>
    <p>3 АПРЕЛЯ 2018 08:50:11</p>
    <blockquote>
      <p>
        Очень хорошая доставка, роллы очень большие и очень вкусные.
        Персонал очень приветливый и самое главное очень ценят своих клиентов.
        Постоянные акции, очень быстрая доставка и самая вкусная еда)
        Очень люблю вас смайлфуд, вы самые лучшие в Одессе
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
