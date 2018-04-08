import React from 'react';

import classes from './InfoHeader.css';
import InfoHeaderCentral from './InfoHeaderCentral/InfoHeaderCentral'

const infoHeader = (props) => (
  <div className={classes.InfoHeader}>
    <div className={classes.InfoLogo}>
      <img src="/img/logo2.png" alt="logo" width="200px" height="188px"/>
    </div>
    <InfoHeaderCentral />
    <div className={classes.InfoCart}>
      <p>Cart</p>
    </div>
  </div>
);

export default infoHeader;
