import React, {Component} from 'react';

import classes from './MenuPage.css';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import DishCard from '../DishCard/DishCard';

class menuPage extends Component {
  state = {
    menuDishes: [
      {
        title: "Супер сыр",
        img: "/img/menu/pizza/super-cheese.jpg",
        numberOfPieces: 8,
        price: 107,
        description: "Нежная пицца со сливочным соусом, томатами, сыром моцарелла, пармезаном, охотничьими сосисками, рукколой, паприкой и орегано."
      }, {
        title: "Мексикано",
        img: "/img/menu/pizza/mexicano.jpg",
        numberOfPieces: 8,
        price: 97,
        description: "Ароматная пицца с запеченной курицей, томатами, ветчиной, сыром моцарелла, кукурузой, маслинами, томатным соусом, белым кунжутом и орегано."
      }, {
        title: "4 сезона",
        img: "/img/menu/pizza/four-seasons.jpg",
        numberOfPieces: 8,
        price: 116,
        description: "Пицца, сочетающая в себе 4 разных ярких вкуса. В составе начинки: куриное филе, кукуруза, ананас, кальмары, мидии, снежный краб, бекон, шампиньоны, репчатый лук, томаты, свинина и сыр моцаре..."
      }, {
        title: "4 мяса",
        img: "/img/menu/pizza/four-meats.jpg",
        numberOfPieces: 8,
        price: 123,
        description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
      }, {
        title: "4 мяса",
        img: "/img/menu/pizza/four-meats.jpg",
        numberOfPieces: 8,
        price: 123,
        description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
      }, {
        title: "4 мяса",
        img: "/img/menu/pizza/four-meats.jpg",
        numberOfPieces: 8,
        price: 123,
        description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
      }, {
        title: "4 мяса",
        img: "/img/menu/pizza/four-meats.jpg",
        numberOfPieces: 8,
        price: 123,
        description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
      }
    ]
  };

  render() {
    return (
      <div className={classes.MenuPage}>
        <Breadcrumbs/>
        <h1>Пицца</h1>
        <div className={classes.MenuSortablePanel}>
          <h2>Сортировать по</h2>
        </div>
        <div className={classes.DishesContainer}>
          {this.state.menuDishes.map((dish,i) => (
            <DishCard
              key={i}
              dishContent={dish} />
          ))}
        </div>
      </div>
    )
  }
}

export default menuPage;