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
    isLoading: true
  };

  componentWillMount() {
    this.getCurrentCategory();
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

  render() {
    let dishContent = null;
    if (this.state.isLoading) {
      dishContent = <div>Loading...</div>
    } else {
      dishContent = <div className={classes.DishPage}>
        <h1>{this.state.currentDish.title}</h1>
        <DishDetails />
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
