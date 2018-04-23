import React from 'react';
import {Link} from "react-router-dom";

import classes from './InfoHeader.css';
import InfoHeaderCentral from './InfoHeaderCentral/InfoHeaderCentral';
import InfoBasket from './InfoBasket/InfoBasket';
import InfoButton from './InfoButton/InfoButton';

const infoHeader = () => (
  <div className={classes.InfoHeader}>
    <div className={classes.InfoLogo}>
      <Link to="/">
        <img src="/img/logo.png" alt="logo" width="200px" height="188px"/>
      </Link>
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
