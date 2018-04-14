import React from 'react';

import SliderShow from '../SliderShow/SliderShow';
import Recommendation from '../ChiefRecommends/Recommendation/Recommendation';
import ReviewsHome from '../ReviewsHome/ReviewsHome';

const homePage = () => (
  <div>
    <SliderShow />
    <Recommendation />
    <ReviewsHome />
  </div>
);

export default homePage;