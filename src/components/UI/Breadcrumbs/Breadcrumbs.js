import React from 'react';

import classes from './Breadcrumbs.css';

const breadCrumbs = (props) => (
  <ul className={classes.Breadcrumbs}>
    <li>
      <a className={classes.BreadcrumbAnchor} href="/">Главная</a>
    </li>
    <li>
      <a className={classes.BreadcrumbActive} href="/">Пицца</a>
    </li>
  </ul>
);

export default breadCrumbs;