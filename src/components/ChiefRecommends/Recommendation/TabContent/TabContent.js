import React from 'react';

import classes from './TabContent.css';
import DishCard from '../../../DishCard/DishCard'

const tabContent = (props) => (
  <div className={classes.TabContent}>
    <DishCard />
    <DishCard />
    <DishCard />
    <DishCard />
  </div>
);

export default tabContent;
