import React, {Component} from 'react';

import classes from './MenuPage.css';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';
import DishCard from '../DishCard/DishCard';
import axios from "../../axios-delivery";

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
        price: 88,
        description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
      }, {
        title: "4 мяса",
        img: "/img/menu/pizza/four-meats.jpg",
        numberOfPieces: 8,
        price: 183,
        description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
      }, {
        title: "4 мяса",
        img: "/img/menu/pizza/four-meats.jpg",
        numberOfPieces: 8,
        price: 150,
        description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
      }
    ],
    defaultDishesOrder: [],
    currentDishes: [],
    sortBy: 'default',
    isLoading: true
  };

  componentWillMount() {
    this.setState({isLoading: true});
    this.getCurrentDishes();
  }

  setDefaultDishes() {
    const menuDishes = this.state.currentDishes.slice();
    this.setState({defaultDishesOrder: menuDishes});
  }

  getCurrentDishes() {
    axios.get(`https://food-delivery-react.firebaseio.com/menu/pizza.json`)
      .then(response => {
        console.log(response);
        this.setState({currentDishes: response.data});
        this.setState({isLoading: false});
        this.setDefaultDishes();
      })
      .catch( error => {
        console.log(error);
      });
  }

  changeSorting = (event) => {
    let tempDishes = this.state.currentDishes;
    this.setState({sortBy: event.target.value});
    if (event.target.value === 'priceAsc') {
      tempDishes.sort((a, b) => {
        if (a.price < b.price) {
          return 1;
        }
      });
      this.setState({currentDishes: tempDishes});
    }
    if (event.target.value === 'priceDesc') {
      tempDishes.sort((a, b) => {
        if (a.price > b.price) {
          return 1;
        }
      });
      this.setState({currentDishes: tempDishes});
    }
    if (event.target.value === 'default') {
      const menuDishes = this.state.defaultDishesOrder.slice();
      this.setState({currentDishes: menuDishes});
    }
    console.log(event.target.value);
  };

  render() {
    let dishesContent = null;
    if (this.state.isLoading) {
      dishesContent = <div>Loading...</div>
    } else {
      dishesContent = <div className={classes.DishesContainer}>
        {this.state.currentDishes.map((dish,i) => (
          <DishCard
            key={i}
            dishContent={dish} />
        ))}
      </div>
    }
    return (
      <div className={classes.MenuPage}>
        <Breadcrumbs/>
        <h1>Пицца</h1>
        <div className={classes.MenuSortablePanel}>
          <p>Сортировать по</p>
          <select id="sorting" onChange={this.changeSorting}>
            <option value="default">умолчанию</option>
            <option value="priceAsc">по убыванию</option>
            <option value="priceDesc">по возрастанию</option>
          </select>
        </div>
        {dishesContent}
      </div>
    )
  }
}

export default menuPage;