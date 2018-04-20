import React, {Component} from 'react';

import classes from './DishPage.css';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
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
    this.setState({isLoading: true});
    this.getCurrentDish();
  }

  getCurrentCategory() {
    let macthingCategory = this.props.match.params.category;
    let macthingTitle = this.props.match.params.title;
    this.setState({currentCategory: macthingCategory});
    this.setState({currentTitle: macthingTitle});
  }

  getCurrentDish() {
    let localCategory = this.state.currentCategory;
    let localTitle = this.state.currentCategory;
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
      dishContent = <div>
        {this.state.currentDish.title}
      </div>
    }
    return (
      <div>
        <Breadcrumbs/>
        <h1>Dish Page</h1>
        {dishContent}
      </div>
    )
  }
}

export default DishPage;
