import React from 'react';

import classes from './RedMenu.css';

const redMenu = () => (
  <div>
    <nav className={classes.RedMenu}>
      <a href="/">Пицца</a>
      <a href="/">Японская кухня</a>
      <a href="/">Итальянская кухня</a>
      <a href="/">Славянская кухня</a>
      <a href="/">Гриль BBQ</a>
      <a href="/">Детское меню</a>
      <a href="/">Десерты</a>
      <a href="/">Бар</a>
    </nav>
    <nav className={classes.BlackMenu}><a href="/">Сеты</a>
      <a href="/">Роллы</a>
      <a href="/">Салаты</a>
      <a href="/">Супы</a>
      <a href="/">Лапша</a>
      <a href="/">Горячий рис</a>
      <a href="/">Суши</a>
      <a href="/">Инари</a>
    </nav>
  </div>
);

export default redMenu;