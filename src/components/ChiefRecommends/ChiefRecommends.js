import React, { Component }  from 'react';

import classes from './ChiefRecommends.css';
import RecommendationTab from './RecommendationTab/RecommendationTab';
import TabContent from './TabContent/TabContent';
import axios from '../../axios-delivery';

class ChiefRecommends extends Component {
  state = {
    tabCategories: [
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
    ],
    activeCategory: "pizza",
    currentTabContent: [],
    isLoading: true
  };

  componentWillMount() {
    this.setState({isLoading: true});
    this.getCurrentTabContent(this.state.activeCategory);
  }

  getCurrentTabContent(id) {
    axios.get(`https://food-delivery-react.firebaseio.com/chiefRecommendations/${id}.json`)
      .then(response => {
        console.log(response);
        this.setState({currentTabContent: response.data});
        this.setState({isLoading: false})
      })
      .catch( error => {
        console.log(error);
      });
  }

  selectedCategoryHandler = (key) => {
    this.setState({activeCategory: key});
    this.getCurrentTabContent(key);
    console.log(key);
  };

  render() {
    let tabDynamicContent = null;
    if (this.state.isLoading) {
      tabDynamicContent = <div>Loading...</div>
    } else {
      tabDynamicContent = <TabContent
        activeCategory={this.state.activeCategory}
        dishes={this.state.currentTabContent}
      />
    }
    return (
      <div className={classes.Recommendation}>
        <h2>Шеф-повар рекомендует</h2>
        <RecommendationTab
          selectedCategory={this.selectedCategoryHandler}
          categories={this.state.tabCategories}
          activeCategory={this.state.activeCategory}/>
        {tabDynamicContent}
      </div>
    )
  }
}
export default ChiefRecommends;
