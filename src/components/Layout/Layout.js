import React from 'react';

import Aux from '../../hoc/Auxx/Auxx';
import Header from '../Header/Header';
import RedMenu from '../RedMenu/RedMenu';
import SliderShow from '../SliderShow/SliderShow';
import Recommendation from '../ChiefRecommends/Recommendation/Recommendation';
import ReviewsHome from '../ReviewsHome/ReviewsHome';

const layout = () => (
  <Aux>
    <Header />
    <RedMenu />
    <SliderShow />
    <main>
      <Recommendation />
      <ReviewsHome />
    </main>
    <div>Footer</div>
  </Aux>
);

export default layout;