import React from 'react';

import classes from './DishNutrition.css';

const DishNutrition = (props) => (
  <div className={classes.DishNutrition}>
    <div className={classes.NutritionItem}>
      <span>Калорийность: {props.nutrition.calories}</span>
    </div>
    <div className={classes.NutritionItem}>
      <span>Белки: {props.nutrition.protein}</span>
    </div>
    <div className={classes.NutritionItem}>
      <span>Жиры: {props.nutrition.fats}</span>
    </div>
    <div className={classes.NutritionItem}>
      <span>Углеводы: {props.nutrition.glicides}</span>
    </div>
  </div>
);

export default DishNutrition;