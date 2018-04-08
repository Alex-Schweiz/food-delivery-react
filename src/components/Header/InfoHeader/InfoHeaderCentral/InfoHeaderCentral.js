import React from 'react';

import classes from './InfoHeaderCentral.css';

const infoHeaderCentral = () => (
  <div className={classes.InfoCentral}>
    <div className={classes.InfoDiscount}>
      <p className={classes.StrongText}>10% скидка</p>
      <p className={classes.ItalicText}>при самовывозе</p>
    </div>
    <div className={classes.InfoDelivery}>
      <p className={classes.StrongText}>Бесплатная доставка</p>
      <p className={classes.ItalicText}>от 150 грн. и 110 грн. по</p>
      <p className={classes.ItalicText}>поселку Котовского</p>
    </div>
    <div className={classes.InfoMinimal}>
      <p className={classes.StrongText}>Минимальный заказ</p>
      <p className={classes.ItalicText}>По кухне − 110 грн.</p>
      <p className={classes.ItalicText}>По бару − 300 грн.</p>
    </div>
  </div>
);

export default infoHeaderCentral;
