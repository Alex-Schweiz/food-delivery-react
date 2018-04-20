import React from 'react';

import classes from './DishDetails.css';

const dishDetails = (props) => (
  <div className={classes.DishDetails}>
    <div className={classes.ImageContainer}>
      <img src="/img/menu/pizza/four-cheese.jpg" alt="01"/>
    </div>
    <div className={classes.InfoContainer}>
      <p>Корж на выбор</p>
      <button>

      </button>
    </div>

  </div>
);

export default dishDetails;