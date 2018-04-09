import React, { Component }  from 'react';

import classes from './Recommendation.css';
import RecommendationTab from './RecommendationTab/RecommendationTab';
import TabContent from './TabContent/TabContent'

class Recommendation extends Component {
  state = {
    tabCategories: [
      'Пицца',
      'Десерты',
      'Бар',
      'Итальянская кухня',
      'Японская кухня',
      'Гриль BBQ',
      'Славянская кухня',
      'Постное меню'
    ],
    activeCategory: 0
  };

  selectedCategoryHandler = (key) => {
    this.setState({activeCategory: key});
    console.log(key);
  };

  render() {
    return (
      <div className={classes.Recommendation}>
        <h2>Шеф-повар рекомендует</h2>
        <RecommendationTab
          selectedCategory={this.selectedCategoryHandler}
          categories={this.state.tabCategories} />
        <TabContent activeCategory={this.state.activeCategory} />
      </div>
    )
  }
}
export default Recommendation;
