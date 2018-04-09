import React from 'react';

import classes from './ReviewsHome.css';
import ReviewsHomeContainer from './ReviewsHomeContainer/ReviewsHomeContainer';

const reviewsHome = () => (
  <div className={classes.ReviewsHome}>
    <div>
      <h2>Отзывы</h2>
      <button>Написать отзыв</button>
    </div>
    <ReviewsHomeContainer />
    <div className={classes.ReadAll}>
      <a href="/">Читать все отзывы</a>
    </div>
  </div>
);

export default reviewsHome;
