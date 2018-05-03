import React from 'react';

import classes from './DishIngredients.css';

const DishIngredients = (props) => (
  <div className={classes.DishIngredients}>
    {props.iningredients ? <h2>Ингредиенты</h2> : null}
    <div className={classes.IngredientsContainer}>
      {props.ingredients.map((ingredient, i) => (
        <div className={classes.IngredientItem}>
          <img src={ingredient.imgPath} width="80px" height="53px" alt=""/>
          <p>{ingredient.title}</p>
        </div>
        )
      )}
    </div>
  </div>
);

export default DishIngredients;