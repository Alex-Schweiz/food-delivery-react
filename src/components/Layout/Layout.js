import React from 'react';

import Aux from '../../hoc/Auxx/Auxx';
import Header from '../Header/Header';
import RedMenu from '../RedMenu/RedMenu';

const layout = (props) => (
  <Aux>
    <Header />
    <RedMenu />
    <main>
      {props.children}
    </main>
    <div>Footer</div>
  </Aux>
);

export default layout;