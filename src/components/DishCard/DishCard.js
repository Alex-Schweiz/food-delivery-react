import React from 'react';

import classes from './DishCard.css';

const dishCard = (props) => (
  <div className={classes.DishCard}>
    <img src="/img/card/01.jpg" alt="01"/>
    <div className={classes.DishInfo}>
      <p className={classes.DishTitle}>Супер сыр</p>
      <p>8 кусочков</p>
      <div className={classes.DishAction}>
        <p>107 грн</p>
        <button>Заказать</button>
      </div>
      <p className={classes.DishDescription}>Нежная пицца со сливочным соусом, томатами, сыром моцарелла, пармезаном, охотничьими сосисками, рукколой, паприкой и орегано.</p>
    </div>
  </div>
);

export default dishCard;
