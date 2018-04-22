import React, {Component} from 'react';

import classes from './CuisinePage.css';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import CuisineCategory from '../../components/CuisineCategory/CuisineCategory';
import axios from "../../axios-delivery";

class CuisinePage extends Component {
  state = {
    currentCategories: [],
    isLoading: true,
    currentCuisine: '',
    categoryMap: new Map([
      ['japanese', 'Японская кухня'],
      ['italian', 'Итальянская кухня'],
      ['slavic', 'Славянская кухня'],
      ['bar', 'Бар'],
      ['bbq', 'Гриль BBQ'],
    ])
  };

  componentWillMount() {
    this.getCurrentCuisine();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.cuisineType !== nextProps.match.params.cuisineType) {
      this.getCurrentCuisine(nextProps.match.params.cuisineType);
    }
  }

  componentDidMount() {
    this.setState({isLoading: true});
    this.getCurrentCategories();
  }

  getCurrentCuisine(newProps) {
    let matchingCategory = '';
    if (newProps) {
      matchingCategory = newProps;
    } else {
      matchingCategory = this.props.match.params.cuisineType;
    }
    this.setState({currentCuisine: matchingCategory}, () => {
      this.getCurrentCategories();
    });
  }

  getCurrentCategories() {
    let localCategory = this.state.currentCuisine;
    let composedUrl= `https://food-delivery-react.firebaseio.com/categories/${localCategory}.json`;
    axios.get(composedUrl)
      .then(response => {
        console.log(response);
        this.setState({currentCategories: Object.keys(response.data).map(i => response.data[i])});
        this.setState({isLoading: false});
        console.log(this.state.currentCategories);
      })
      .catch( error => {
        console.log(error);
      });
  }

  render() {
    let cuisineContent = null;
    if (this.state.isLoading) {
      cuisineContent = <div>Loading...</div>
    } else {
      cuisineContent = <div className={classes.CategoriesContainer}>
        {this.state.currentCategories.map((category,i) => (
          <CuisineCategory
            key={i}
            categoryContent={category} />
        ))}
      </div>
    }
    return (
      <div className={classes.CuisinePage}>
        <Breadcrumbs/>
        <h1>{this.state.categoryMap.get(this.props.match.params.cuisineType)}</h1>
        {cuisineContent}
      </div>
    )
  }
}

export default CuisinePage;
