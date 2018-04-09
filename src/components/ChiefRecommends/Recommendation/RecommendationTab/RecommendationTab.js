import React from 'react';

import classes from './RecommendationTab.css';

const recommendationTab = (props) => (
  <div>
    <div className={classes.Tab}>
      {props.categories.map((category, i) => (
        <button
          key={i}
          onClick={() => props.selectedCategory(i)}
          className={classes.TabLink}>{category}</button>
      ))}
    </div>
  </div>
);

export default recommendationTab;
