import React from 'react';

import classes from './DishCard.css';

const dishCard = (props) => (
  <div className={classes.DishCard}>
    <img src={props.dishContent.img} alt="01"/>
    <div className={classes.DishInfo}>
      <p className={classes.DishTitle}>{props.dishContent.title}</p>
      {props.dishContent.numberOfPieces ? <p>{props.dishContent.numberOfPieces} кусочков</p> : ''}
      <div className={classes.DishAction}>
        <p>{props.dishContent.price} грн</p>
        <button>Заказать</button>
      </div>
      <p className={classes.DishDescription}>
        {props.dishContent.description}
      </p>
    </div>
  </div>
);

export default dishCard;
