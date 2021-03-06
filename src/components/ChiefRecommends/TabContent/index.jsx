import React from 'react';

import classes from './TabContent.css';
import DishCard from '../../DishCard/index'

const tabContent = (props) => (
  <div className={classes.TabContent}>
    {props.dishes.map((dish,i) => (
      <DishCard
        key={i}
        menuCategory={props.activeCategory}
        dishContent={dish}
      />
    ))}
    <div className={classes.TabShowMore}>
      <button>Перейти к категории</button>
    </div>
  </div>
);

export default tabContent;
