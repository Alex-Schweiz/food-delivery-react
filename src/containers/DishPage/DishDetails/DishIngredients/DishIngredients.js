import React from 'react';

import classes from './DishIngredients.css';

const dishIngredients = (props) => (
  <div className={classes.DishIngredients}>
    <h2>Ингредиенты</h2>
    <div className={classes.IngredientsContainer}>
      <div className={classes.IngredientItem}>
        <img src="/img/ingredients/mozarella.jpg" width="80px" height="53px" alt=""/>
        <p>Моцарелла</p>
      </div>
      <div className={classes.IngredientItem}>
        <img src="/img/ingredients/salami.jpg" width="80px" height="53px" alt=""/>
        <p>Салями</p>
      </div>
      <div className={classes.IngredientItem}>
        <img src="/img/ingredients/salami.jpg" width="80px" height="53px" alt=""/>
        <p>Салями</p>
      </div>
      <div className={classes.IngredientItem}>
        <img src="/img/ingredients/salami.jpg" width="80px" height="53px" alt=""/>
        <p>Салями</p>
      </div>
      <div className={classes.IngredientItem}>
        <img src="/img/ingredients/salami.jpg" width="80px" height="53px" alt=""/>
        <p>Салями</p>
      </div>
      <div className={classes.IngredientItem}>
        <img src="/img/ingredients/salami.jpg" width="80px" height="53px" alt=""/>
        <p>Салями</p>
      </div>
      <div className={classes.IngredientItem}>
        <img src="/img/ingredients/salami.jpg" width="80px" height="53px" alt=""/>
        <p>Салями</p>
      </div>
      <div className={classes.IngredientItem}>
        <img src="/img/ingredients/salami.jpg" width="80px" height="53px" alt=""/>
        <p>Салями</p>
      </div>
      <div className={classes.IngredientItem}>
        <img src="/img/ingredients/salami.jpg" width="80px" height="53px" alt=""/>
        <p>Салями</p>
      </div>
      <div className={classes.IngredientItem}>
        <img src="/img/ingredients/salami.jpg" width="80px" height="53px" alt=""/>
        <p>Салями</p>
      </div>
    </div>
  </div>
);

export default dishIngredients;