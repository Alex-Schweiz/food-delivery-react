import React from 'react';

import classes from './RecommendationTab.css';

const recommendationTab = (props) => (
  <div>
    <div className={classes.Tab}>
      {props.categories.map(category => (
        <button
          key={category.id}
          onClick={() => props.selectedCategory(category.id)}
          className={classes.TabLink}>{category.title}</button>
      ))}
    </div>
  </div>
);

export default recommendationTab;
