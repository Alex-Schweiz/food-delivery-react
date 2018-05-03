import React from 'react';
import {Link} from "react-router-dom";

import classes from './Breadcrumbs.css';

const BreadCrumbs = () => (
  <ul className={classes.Breadcrumbs}>
    <Link
      to="/"
    >Главная</Link>
    <Link
      to="/"
    >Пицца</Link>
  </ul>
);

export default BreadCrumbs;