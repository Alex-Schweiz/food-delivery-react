import React from 'react';
import {Link} from "react-router-dom";

import classes from './Breadcrumbs.css';

const breadCrumbs = (props) => (
  <ul className={classes.Breadcrumbs}>
    <Link
      to="/"
    >Главная</Link>
    <Link
      to="/"
    >Пицца</Link>
  </ul>
);

export default breadCrumbs;