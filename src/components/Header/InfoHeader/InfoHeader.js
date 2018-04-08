import React from 'react';

import classes from './InfoHeader.css';
import InfoHeaderCentral from './InfoHeaderCentral/InfoHeaderCentral';
import InfoBasket from './InfoBasket/InfoBasket';
import InfoButton from './InfoButton/InfoButton';

const infoHeader = () => (
  <div className={classes.InfoHeader}>
    <div className={classes.InfoLogo}>
      <img src="/img/logo3.png" alt="logo" width="200px" height="188px"/>
    </div>
    <InfoHeaderCentral />
    <div className={classes.InfoCart}>
      <InfoBasket />
      <InfoButton text="Перезвоните мне"/>
      <InfoButton text="Личный кабинет"/>
      <InfoButton text="Горячая линия"/>
    </div>
  </div>
);

export default infoHeader;
