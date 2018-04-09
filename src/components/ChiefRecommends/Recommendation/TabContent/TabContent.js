import React from 'react';

import classes from './TabContent.css';
import DishCard from '../../../DishCard/DishCard'

const tabContent = (props) => (
  <div className={classes.TabContent}>
    <DishCard />
    <DishCard />
    <DishCard />
    <DishCard />
    <div className={classes.TabShowMore}>
      <button>Перейти к категории</button>
    </div>
  </div>
);

export default tabContent;
