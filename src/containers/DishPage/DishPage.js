import React, {Component} from 'react';

import classes from './DishPage.css';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import DishDetails from './DishDetails/DishDetails';
import axios from "../../axios-delivery";

class DishPage extends Component {
  state = {
    currentDish: {},
    currentTitle: '',
    currentCategory: '',
    numberOfItems: 1,
    priceOfItem: 80,
    totalPrice: 0,
    isLoading: true
  };

  componentWillMount() {
    this.getCurrentCategory();
    this.calculateTotalPrice();
  }

  componentDidMount() {
    this.getCurrentDish();
  }

  getCurrentCategory() {
    let matchingCategory = this.props.match.params.category;
    let matchingTitle = this.props.match.params.title;
    this.setState({currentCategory: matchingCategory});
    this.setState({currentTitle: matchingTitle});
  }

  getCurrentDish() {
    let localCategory = this.state.currentCategory;
    let localTitle = this.state.currentTitle;
    let composedUrl = `https://food-delivery-react.firebaseio.com/dishes/${localCategory}/${localTitle}.json`;
    axios.get(composedUrl)
      .then(response => {
        console.log(response);
        this.setState({currentDish: response.data});
        this.setState({isLoading: false});
      })
      .catch( error => {
        console.log(error);
      });
  }

  changeNumberOfItems = (type) => {
    let oldNumberItems = this.state.numberOfItems;
    if (type) {
      oldNumberItems++;
      this.setState({numberOfItems: oldNumberItems});
    } else {
      oldNumberItems--;
      this.setState({numberOfItems: oldNumberItems});
    }
    this.calculateTotalPrice();
  };

  calculateTotalPrice() {
    let newPrice = this.state.priceOfItem * this.state.numberOfItems;
    this.setState({totalPrice: newPrice});
  }

  render() {
    let dishContent = null;
    if (this.state.isLoading) {
      dishContent = <div>Loading...</div>
    } else {
      dishContent = <div className={classes.DishPage}>
        <h1>{this.state.currentDish.title}</h1>
        <DishDetails
          itemsNumber={this.state.numberOfItems}
          totalPrice={this.state.totalPrice}
          changeItemsNumber={this.changeNumberOfItems}
        />
      </div>
    }
    return (
      <div className={classes.DishPage}>
        <Breadcrumbs/>
        {dishContent}
      </div>
    )
  }
}

export default DishPage;
