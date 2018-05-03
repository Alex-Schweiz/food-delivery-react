import React from 'react';

import classes from './DishPage.css';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import DishDetails from './DishDetails';
import axios from "../../axios-delivery";

const INGREDIENT_IMAGES_MAP = new Map([
  ['Моцарелла', 'mozarella'],
  ['Орегано', 'oregano'],
  ['Томаты', 'tomatoes'],
  ['Куриное филе', 'chicken-filet'],
  ['Томатный соус', 'tomato-sous'],
  ['Салями', 'salami'],
  ['Сливочно-чесночный соус', 'sliwki-garlic'],
  ['Сыр Пармезан', 'cheese-parmezan'],
  ['Сыр Дор-Блю', 'cheese-dor-blu'],
  ['Помидоры черри', 'tomatoes-cherry'],
  ['Сыр твердый', 'cheese-tough'],
  ['Ветчина', 'wetchina'],
  ['Охотничьи сосиски', 'hunter-sausages'],
  ['Копченая курица', 'chicken-smoked'],
  ['Шампиньоны', 'champignons'],
  ['Ананасы', 'ananas'],
  ['Бекон', 'bakon'],
  ['Снежный краб', 'snow-crab'],
  ['Кальмар', 'colmar'],
  ['Мидии', 'midii'],
  ['Свинина', 'pork'],
  ['Лук репчатый', 'onions'],
  ['Кукуруза', 'corn'],
  ['Маслины', 'maslins'],
  ['Кунжут', 'kunjut'],
  ['Колбаса пепперони', 'peperoni-sausage'],
  ['Перец Чили', 'pepper-chili'],
  ['Перец смесь', 'pepper-mix'],
  ['Руккола', 'rukkola'],
  ['Сливочный соус', 'sour-sous'],
  ['Сыровяленное мясо', 'meat-vyalenoe'],
  ['Васаби', 'wasabi'],
  ['Лосось', 'salmon'],
  ['Сыр фета', 'cheese-feta'],
  ['Икра Капеллана оранжевая', 'caviar-kapellan'],
  ['Тигровая креветка', 'krevette-tiger'],
  ['Сухари Панко', 'suhari-panko'],
  ['Соевый соус', 'soya-sous'],
  ['Рис', 'rice'],
  ['Нори', 'nori'],
  ['Темпурная мука', 'tempura-muka'],
  ['Имбирь маринованный', 'ginger-smoked'],
  ['Яйцо', 'egg'],
  ['Майонез', 'mayonaise'],
  ['Зеленый лук', 'green_onion'],
  ['Болгарский перец', 'bolgarian_pepper'],
  ['Морковь', 'carrot'],
  ['Лапша Удон', 'pasta_udon'],
  ['Соус тонкацу', 'sous_tonkatsu'],
]);

const INITIAL_STATE = {
  currentDish: {},
  currentTitle: '',
  currentCategory: '',
  numberOfItems: 1,
  priceOfItem: 0,
  totalPrice: 0,
  convertedIngredientArray: [],
  isLoading: true
};

export default class DishPage extends React.Component {
  state = {...INITIAL_STATE};

  componentWillMount() {
    this.getCurrentCategory();
    this.calculateTotalPrice();
  }

  componentDidMount() {
    this.getCurrentDish();
  }

  changeNumberOfItems = (type) => {
    let oldNumberItems = this.state.numberOfItems;
    type ?
      oldNumberItems++ :
      oldNumberItems-- ;
    this.setState({numberOfItems: oldNumberItems}, () => {
      this.calculateTotalPrice();
    });
  };

  calculateTotalPrice() {
    let newPrice = this.state.priceOfItem * this.state.numberOfItems;
    this.setState({totalPrice: newPrice});
  }

  getCurrentCategory() {
    let matchingCategory = this.props.match.params.category;
    let matchingTitle = this.props.match.params.title;
    this.setState({
      currentCategory: matchingCategory,
      currentTitle: matchingTitle
    });
  }

  getCurrentDish() {
    let localCategory = this.state.currentCategory;
    let localTitle = this.state.currentTitle;
    let ingredientArray = [];
    let composedUrl = `https://food-delivery-react.firebaseio.com/dishes/${localCategory}/${localTitle}.json`;
    axios.get(composedUrl)
      .then(response => {
        this.setState({currentDish: response.data});
        this.setState({priceOfItem: response.data.price}, () => {
          this.calculateTotalPrice();
        });
        this.setState({isLoading: false});
        ingredientArray = response.data.ingredients.map(item =>  {
          return ({
              "imgPath": `/img/ingredients/${INGREDIENT_IMAGES_MAP.get(item)}.jpg`,
              "title": item
            }
          )
        });
        this.setState({convertedIngredientArray: ingredientArray});
      })
      .catch( error => {
        console.log(error);
      });
  }

  render() {
    let dishContent = null;
    this.state.isLoading ?
      dishContent = <div>Loading...</div> :
      dishContent = (
        <div className={classes.DishPage}>
          <h1>{this.state.currentDish.title}</h1>
          <DishDetails
            dish={this.state.currentDish}
            ingredients={this.state.convertedIngredientArray}
            itemsNumber={this.state.numberOfItems}
            totalPrice={this.state.totalPrice}
            changeItemsNumber={this.changeNumberOfItems}
          />
        </div>
      );

    return (
      <div className={classes.DishPage}>
        <Breadcrumbs/>
        {dishContent}
      </div>
    )
  }
}
