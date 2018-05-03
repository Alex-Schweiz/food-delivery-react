import React from 'react';

import classes from './ReviewsHomeContainer.css';
import ReviewItem from './ReviewItem/index';

const reviewsHomeContainer = () => (
  <div className={classes.ReviewsHomeContainer}>
    <ReviewItem />
    <ReviewItem />
    <ReviewItem />
  </div>
);

export default reviewsHomeContainer;
