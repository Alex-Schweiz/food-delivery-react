import React, {Component} from 'react';

import classes from './MenuPage.css';
/*import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';*/
import DishCard from '../../components/DishCard/DishCard';
import axios from "../../axios-delivery";

class menuPage extends Component {
  state = {
    defaultDishesOrder: [],
    currentDishes: [],
    sortBy: 'default',
    currentCategory: '',
    dishesMap: new Map([
      ['pizza', 'Пицца'],
      ['japanese-sets', 'Сеты'],
      ['japanese-rolls', 'Роллы'],
      ['japanese-salads', 'Салаты'],
      ['japanese-soups', 'Супы'],
      ['japanese-pasta', 'Лапша'],
      ['japanese-rice', 'Горячий рис'],
      ['japanese-sushi', 'Суши'],
      ['italian-pasta', 'Паста'],
      ['italian-salads', 'Салаты'],
      ['italian-soups', 'Супы'],
      ['slavic-soups', 'Супы'],
      ['slavic-cookedFood', 'Приготовленная еда'],
      ['bbq-wings', 'Крылья BBQ'],
      ['bbq-burgers', 'Бургеры'],
      ['kids-menu', 'Детское меню'],
      ['desserts', 'Дессерты'],
      ['bar-drinks', 'Напитки'],
      ['bar-juice', 'Соки'],
      ['bar-beer', 'Пиво'],
      ['bar-craft', 'Фирменные напитки'],
    ]),
    isLoading: true
  };

  componentWillMount() {
    this.getCurrentCategory();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.dishCategory !== nextProps.match.params.dishCategory) {
      this.getCurrentCategory(nextProps.match.params.dishCategory);
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
    this.getCurrentDishes();
  }

  getCurrentCategory(newProps) {
    let matchingCategory = '';
    if (newProps) {
      matchingCategory = newProps;
    } else {
      matchingCategory = this.props.match.params.dishCategory;
    }
    this.setState({currentCategory: matchingCategory}, () => {
      this.getCurrentDishes();
    });
  }

  setDefaultDishes() {
    const menuDishes = this.state.currentDishes.slice();
    this.setState({defaultDishesOrder: menuDishes});
  }

  getCurrentDishes() {
    let localCategory = this.state.currentCategory;
    let composedUrl = `https://food-delivery-react.firebaseio.com/dishes/${localCategory}.json`;
    axios.get(composedUrl)
      .then(response => {
        console.log(response);
        this.setState({currentDishes: Object.keys(response.data).map(i => response.data[i])});
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
            menuCategory={this.state.currentCategory}
            dishContent={dish} />
        ))}
      </div>
    }
    return (
      <div className={classes.MenuPage}>
        {/*<Breadcrumbs/>*/}
        <h1>{this.state.dishesMap.get(this.props.match.params.dishCategory)}</h1>
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
