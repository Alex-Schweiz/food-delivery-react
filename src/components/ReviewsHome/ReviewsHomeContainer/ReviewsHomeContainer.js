import React from 'react';

import classes from './ReviewsHomeContainer.css';
import ReviewItem from './ReviewItem/ReviewItem';

const reviewsHomeContainer = (props) => (
  <div className={classes.ReviewsHomeContainer}>
    <ReviewItem />
    <ReviewItem />
    <ReviewItem />
  </div>
);

export default reviewsHomeContainer;
