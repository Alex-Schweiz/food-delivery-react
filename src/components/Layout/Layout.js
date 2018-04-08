import React from 'react';

import Aux from '../../hoc/Auxx/Auxx';
import Header from '../Header/Header';

const layout = (props) => (
  <Aux>
    <Header></Header>
    <main>
      {props.children}
    </main>
    <div>Footer</div>
  </Aux>
);

export default layout;