import React from 'react';
import { Link } from "react-router-dom";

import classes from './CuisineCategory.css';

function cuisineCategory(props){
  function getProperUrl(slug) {
    return `/menu/${slug}`
  }
  return (
    <div className={classes.CuisineCategory}>
      <Link
        key={props.categoryContent.title}
        to={getProperUrl(props.categoryContent.slug)}
      >
        <img src={props.categoryContent.img} alt="01"/>
        <p className={classes.CuisineCategoryName}>{props.categoryContent.title}</p>
      </Link>
    </div>
  )
}

export default cuisineCategory;