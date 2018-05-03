import React from 'react';

import classes from './ChiefRecommends.css';
import RecommendationTab from './RecommendationTab';
import TabContent from './TabContent';
import axios from '../../axios-delivery';

const TAB_CATEGORIES = [
  {
    id: "pizza",
    title: "Пицца"
  }, {
    id: "desserts",
    title: "Десерты"
  }, {
    id: "bar-craft",
    title: "Бар"
  }, {
    id: 4,
    title: "Итальянская кухня"
  }, {
    id: 5,
    title: "Японская кухня"
  }, {
    id: "bbq-wings",
    title: "Гриль BBQ"
  }, {
    id: 7,
    title: "Славянская кухня"
  }, {
    id: 8,
    title: "Постное меню"
  }
];

const INITIAL_STATE = {
  activeCategory: "pizza",
  currentTabContent: [],
  isLoading: true
};

export default class ChiefRecommends extends React.Component {
  state = {...INITIAL_STATE};

  componentWillMount() {
    this.setState({isLoading: true});
    this.getCurrentTabContent(this.state.activeCategory);
  }

  selectedCategoryHandler = (key) => {
    this.setState({activeCategory: key});
    this.getCurrentTabContent(key);
  };

  getCurrentTabContent(id) {
    axios.get(`https://food-delivery-react.firebaseio.com/chiefRecommendations/${id}.json`)
      .then(response => {
        this.setState({
            currentTabContent: response.data,
            isLoading: false
        });
      })
      .catch( error => {
        console.log(error);
      });
  }

  render() {
    let tabDynamicContent = null;
    this.state.isLoading ?
      tabDynamicContent = <div>Loading...</div> :
      tabDynamicContent = (
        <TabContent
          activeCategory={this.state.activeCategory}
          dishes={this.state.currentTabContent}
        />
      );

    return (
      <div className={classes.Recommendation}>
        <h2>Шеф-повар рекомендует</h2>
        <RecommendationTab
          selectedCategory={this.selectedCategoryHandler}
          categories={TAB_CATEGORIES}
          activeCategory={this.state.activeCategory}/>
        {tabDynamicContent}
      </div>
    )
  }
}
