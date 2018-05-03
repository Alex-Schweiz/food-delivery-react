import React from 'react';

import classes from './InfoButton.css';

const InfoButton = (props) => (
  <div className={classes.InfoButton}>
    <p>{props.text}</p>
  </div>
);

export default InfoButton;