import React from 'react';

import classes from './CuisineCategory.css';

const cuisineCategory = (props) => (
  <div className={classes.CuisineCategory}>
    <img src={props.categoryContent.img} alt="01"/>
    <p className={classes.CuisineCategoryName}>{props.categoryContent.title}</p>
  </div>
);

export default cuisineCategory;