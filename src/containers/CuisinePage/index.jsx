import React from 'react';

import classes from './CuisinePage.css';
import Breadcrumbs from '../../components/UI/Breadcrumbs';
import CuisineCategory from '../../components/CuisineCategory';
import axios from "../../axios-delivery";

const CATEGORY_MAP = new Map([
  ['japanese', 'Японская кухня'],
  ['italian', 'Итальянская кухня'],
  ['slavic', 'Славянская кухня'],
  ['bar', 'Бар'],
  ['bbq', 'Гриль BBQ'],
]);

const INITIAL_STATE = {
  currentCategories: [],
  isLoading: true,
  currentCuisine: ''
};

export default class CuisinePage extends React.Component {
  state = {...INITIAL_STATE};

  componentWillMount() {
    this.getCurrentCuisine();
  }

  componentWillReceiveProps(nextProps) {
    this.updateCurrentCuisine(nextProps);
  }

  componentDidMount() {
    this.setState({isLoading: true});
    this.getCurrentCategories();
  }

  updateCurrentCuisine(nextProps) {
    if (this.props.match.params.cuisineType !== nextProps.match.params.cuisineType) {
      this.getCurrentCuisine(nextProps.match.params.cuisineType);
    }
  }

  getCurrentCuisine(newProps) {
    let matchingCategory = '';
    newProps ?
      matchingCategory = newProps :
      matchingCategory = this.props.match.params.cuisineType;
    this.setState({currentCuisine: matchingCategory}, () => {
      this.getCurrentCategories();
    });
  }

  getCurrentCategories() {
    let localCategory = this.state.currentCuisine;
    let composedUrl= `https://food-delivery-react.firebaseio.com/categories/${localCategory}.json`;
    axios.get(composedUrl)
      .then(response => {
        this.setState({
          currentCategories: Object.keys(response.data).map(i => response.data[i]),
          isLoading: false
        });
      })
      .catch( error => {
        console.log(error);
      });
  }

  render() {
    let cuisineContent = null;
    this.state.isLoading ?
      cuisineContent = <div>Loading...</div> :
      cuisineContent = (
        <div className={classes.CategoriesContainer}>
          {this.state.currentCategories.map((category,i) => (
            <CuisineCategory
              key={i}
              categoryContent={category} />
          ))}
        </div>
      );

    return (
      <div className={classes.CuisinePage}>
        <Breadcrumbs/>
        <h1>{CATEGORY_MAP.get(this.props.match.params.cuisineType)}</h1>
        {cuisineContent}
      </div>
    )
  }
}
