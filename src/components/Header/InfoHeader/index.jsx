import React from 'react';
import {Link} from "react-router-dom";

import classes from './InfoHeader.css';
import InfoHeaderCentral from './InfoHeaderCentral';
import InfoBasket from './InfoBasket';
import Index from './InfoButton';

const InfoHeader = () => (
  <div className={classes.InfoHeader}>
    <div className={classes.InfoLogo}>
      <Link to="/">
        <img src="/img/logo.png" alt="logo" width="200px" height="188px"/>
      </Link>
    </div>
    <InfoHeaderCentral />
    <div className={classes.InfoCart}>
      <InfoBasket />
      <Index text="Перезвоните мне"/>
      <Index text="Личный кабинет"/>
      <Index text="Горячая линия"/>
    </div>
  </div>
);

export default InfoHeader;
