import React from 'react';
import { Link } from "react-router-dom";

import classes from './DishCard.css';

function dishCard(props) {
  function getProperUrl(slug) {
    return `/dish/pizza/${slug}`
  }
  return (
    <div className={classes.DishCard}>
      <img src={props.dishContent.img} alt="01"/>
      <div className={classes.DishInfo}>
        <Link
          key={props.dishContent.title}
          to={getProperUrl(props.dishContent.slug)}
        >
          <p className={classes.DishTitle}>{props.dishContent.title}</p>
        </Link>
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
  )
};

export default dishCard;
