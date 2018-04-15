import React, { Component }  from 'react';

import classes from './Recommendation.css';
import RecommendationTab from './RecommendationTab/RecommendationTab';
import TabContent from './TabContent/TabContent';
import axios from '../../../axios-delivery';

class Recommendation extends Component {
  state = {
    tabCategories: [
      {
        id: 1,
        title: "Пицца"
      }, {
        id: 2,
        title: "Десерты"
      }, {
        id: 3,
        title: "Бар"
      }, {
        id: 4,
        title: "Итальянская кухня"
      }, {
        id: 5,
        title: "Японская кухня"
      }, {
        id: 6,
        title: "Гриль BBQ"
      }, {
        id: 7,
        title: "Славянская кухня"
      }, {
        id: 8,
        title: "Постное меню"
      }
    ],
    activeCategory: 1,
    currentTabContent: [],
    isLoading: true
  };

  componentDidMount() {
    this.setState({isLoading: true});
    this.getCurrentTabContent(1)
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
          categories={this.state.tabCategories} />
        {tabDynamicContent}
      </div>
    )
  }
}
export default Recommendation;
