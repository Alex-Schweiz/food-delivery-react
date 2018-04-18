import React, {Component} from 'react';

import classes from './CuisinePage.css';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';
import CuisineCategory from '../../components/CuisineCategory/CuisineCategory';
import axios from "../../axios-delivery";

class CuisinePage extends Component {
  state = {
    currentCategories: [],
    isLoading: true,
  };

  componentWillMount() {
    this.setState({isLoading: true});
    this.getCurrentCategories();
  }

  getCurrentCategories() {
    axios.get(`https://food-delivery-react.firebaseio.com/menu/japanese.json`)
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
        <h1>Японская кухня</h1>
        {cuisineContent}
      </div>
    )
  }
}

export default CuisinePage;
