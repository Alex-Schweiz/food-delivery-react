import React, { Component }  from 'react';

import classes from './Recommendation.css';
import RecommendationTab from './RecommendationTab/RecommendationTab';
import TabContent from './TabContent/TabContent'

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
    tabDishesContent: {
      1: [
        {
          title: "Супер сыр",
          img: "/img/menu/pizza/super-cheese.jpg",
          numberOfPieces: 8,
          price: 107,
          description: "Нежная пицца со сливочным соусом, томатами, сыром моцарелла, пармезаном, охотничьими сосисками, рукколой, паприкой и орегано."
        }, {
          title: "Мексикано",
          img: "/img/menu/pizza/mexicano.jpg",
          numberOfPieces: 8,
          price: 97,
          description: "Ароматная пицца с запеченной курицей, томатами, ветчиной, сыром моцарелла, кукурузой, маслинами, томатным соусом, белым кунжутом и орегано."
        }, {
          title: "4 сезона",
          img: "/img/menu/pizza/four-seasons.jpg",
          numberOfPieces: 8,
          price: 116,
          description: "Пицца, сочетающая в себе 4 разных ярких вкуса. В составе начинки: куриное филе, кукуруза, ананас, кальмары, мидии, снежный краб, бекон, шампиньоны, репчатый лук, томаты, свинина и сыр моцаре..."
        }, {
          title: "4 мяса",
          img: "/img/menu/pizza/four-meats.jpg",
          numberOfPieces: 8,
          price: 123,
          description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
        }
      ],
      2: [
        {
          title: "Наполеон",
          img: "/img/menu/desserts/napoleon.jpg",
          price: 32,
          description: "Торт \"Наполеон\", приготовленный по классическому рецепту, получается легким, нежным, он просто тает во рту."
        }
      ],
      3: [
        {
          title: "Супер сыр",
          img: "/img/menu/pizza/super-cheese.jpg",
          numberOfPieces: 8,
          price: 107,
          description: "Нежная пицца со сливочным соусом, томатами, сыром моцарелла, пармезаном, охотничьими сосисками, рукколой, паприкой и орегано."
        }, {
          title: "Мексикано",
          img: "/img/menu/pizza/mexicano.jpg",
          numberOfPieces: 8,
          price: 97,
          description: "Ароматная пицца с запеченной курицей, томатами, ветчиной, сыром моцарелла, кукурузой, маслинами, томатным соусом, белым кунжутом и орегано."
        }, {
          title: "4 сезона",
          img: "/img/menu/pizza/four-seasons.jpg",
          numberOfPieces: 8,
          price: 116,
          description: "Пицца, сочетающая в себе 4 разных ярких вкуса. В составе начинки: куриное филе, кукуруза, ананас, кальмары, мидии, снежный краб, бекон, шампиньоны, репчатый лук, томаты, свинина и сыр моцаре..."
        }, {
          title: "4 мяса",
          img: "/img/menu/pizza/four-meats.jpg",
          numberOfPieces: 8,
          price: 123,
          description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
        }
      ],
      4: [
        {
          title: "Супер сыр",
          img: "/img/menu/pizza/super-cheese.jpg",
          numberOfPieces: 8,
          price: 107,
          description: "Нежная пицца со сливочным соусом, томатами, сыром моцарелла, пармезаном, охотничьими сосисками, рукколой, паприкой и орегано."
        }, {
          title: "Мексикано",
          img: "/img/menu/pizza/mexicano.jpg",
          numberOfPieces: 8,
          price: 97,
          description: "Ароматная пицца с запеченной курицей, томатами, ветчиной, сыром моцарелла, кукурузой, маслинами, томатным соусом, белым кунжутом и орегано."
        }, {
          title: "4 сезона",
          img: "/img/menu/pizza/four-seasons.jpg",
          numberOfPieces: 8,
          price: 116,
          description: "Пицца, сочетающая в себе 4 разных ярких вкуса. В составе начинки: куриное филе, кукуруза, ананас, кальмары, мидии, снежный краб, бекон, шампиньоны, репчатый лук, томаты, свинина и сыр моцаре..."
        }, {
          title: "4 мяса",
          img: "/img/menu/pizza/four-meats.jpg",
          numberOfPieces: 8,
          price: 123,
          description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
        }
      ],
      5: [
        {
          title: "Супер сыр",
          img: "/img/menu/pizza/super-cheese.jpg",
          numberOfPieces: 8,
          price: 107,
          description: "Нежная пицца со сливочным соусом, томатами, сыром моцарелла, пармезаном, охотничьими сосисками, рукколой, паприкой и орегано."
        }, {
          title: "Мексикано",
          img: "/img/menu/pizza/mexicano.jpg",
          numberOfPieces: 8,
          price: 97,
          description: "Ароматная пицца с запеченной курицей, томатами, ветчиной, сыром моцарелла, кукурузой, маслинами, томатным соусом, белым кунжутом и орегано."
        }, {
          title: "4 сезона",
          img: "/img/menu/pizza/four-seasons.jpg",
          numberOfPieces: 8,
          price: 116,
          description: "Пицца, сочетающая в себе 4 разных ярких вкуса. В составе начинки: куриное филе, кукуруза, ананас, кальмары, мидии, снежный краб, бекон, шампиньоны, репчатый лук, томаты, свинина и сыр моцаре..."
        }, {
          title: "4 мяса",
          img: "/img/menu/pizza/four-meats.jpg",
          numberOfPieces: 8,
          price: 123,
          description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
        }
      ],
      6: [
        {
          title: "Супер сыр",
          img: "/img/menu/pizza/super-cheese.jpg",
          numberOfPieces: 8,
          price: 107,
          description: "Нежная пицца со сливочным соусом, томатами, сыром моцарелла, пармезаном, охотничьими сосисками, рукколой, паприкой и орегано."
        }, {
          title: "Мексикано",
          img: "/img/menu/pizza/mexicano.jpg",
          numberOfPieces: 8,
          price: 97,
          description: "Ароматная пицца с запеченной курицей, томатами, ветчиной, сыром моцарелла, кукурузой, маслинами, томатным соусом, белым кунжутом и орегано."
        }, {
          title: "4 сезона",
          img: "/img/menu/pizza/four-seasons.jpg",
          numberOfPieces: 8,
          price: 116,
          description: "Пицца, сочетающая в себе 4 разных ярких вкуса. В составе начинки: куриное филе, кукуруза, ананас, кальмары, мидии, снежный краб, бекон, шампиньоны, репчатый лук, томаты, свинина и сыр моцаре..."
        }, {
          title: "4 мяса",
          img: "/img/menu/pizza/four-meats.jpg",
          numberOfPieces: 8,
          price: 123,
          description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
        }
      ],
      7: [
        {
          title: "Супер сыр",
          img: "/img/menu/pizza/super-cheese.jpg",
          numberOfPieces: 8,
          price: 107,
          description: "Нежная пицца со сливочным соусом, томатами, сыром моцарелла, пармезаном, охотничьими сосисками, рукколой, паприкой и орегано."
        }, {
          title: "Мексикано",
          img: "/img/menu/pizza/mexicano.jpg",
          numberOfPieces: 8,
          price: 97,
          description: "Ароматная пицца с запеченной курицей, томатами, ветчиной, сыром моцарелла, кукурузой, маслинами, томатным соусом, белым кунжутом и орегано."
        }, {
          title: "4 сезона",
          img: "/img/menu/pizza/four-seasons.jpg",
          numberOfPieces: 8,
          price: 116,
          description: "Пицца, сочетающая в себе 4 разных ярких вкуса. В составе начинки: куриное филе, кукуруза, ананас, кальмары, мидии, снежный краб, бекон, шампиньоны, репчатый лук, томаты, свинина и сыр моцаре..."
        }, {
          title: "4 мяса",
          img: "/img/menu/pizza/four-meats.jpg",
          numberOfPieces: 8,
          price: 123,
          description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
        }
      ],
      8: [
        {
          title: "Супер сыр",
          img: "/img/menu/pizza/super-cheese.jpg",
          numberOfPieces: 8,
          price: 107,
          description: "Нежная пицца со сливочным соусом, томатами, сыром моцарелла, пармезаном, охотничьими сосисками, рукколой, паприкой и орегано."
        }, {
          title: "Мексикано",
          img: "/img/menu/pizza/mexicano.jpg",
          numberOfPieces: 8,
          price: 97,
          description: "Ароматная пицца с запеченной курицей, томатами, ветчиной, сыром моцарелла, кукурузой, маслинами, томатным соусом, белым кунжутом и орегано."
        }, {
          title: "4 сезона",
          img: "/img/menu/pizza/four-seasons.jpg",
          numberOfPieces: 8,
          price: 116,
          description: "Пицца, сочетающая в себе 4 разных ярких вкуса. В составе начинки: куриное филе, кукуруза, ананас, кальмары, мидии, снежный краб, бекон, шампиньоны, репчатый лук, томаты, свинина и сыр моцаре..."
        }, {
          title: "4 мяса",
          img: "/img/menu/pizza/four-meats.jpg",
          numberOfPieces: 8,
          price: 123,
          description: "Мясная пицца с томатным соусом, копченым куриным филе, охотничьими сосисками, салями, томатами, пармезаном, ветчиной и сыром моцарелла, приправленная итальянскими травами."
        }
      ],
    },
    activeCategory: 1
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
        <TabContent
          activeCategory={this.state.activeCategory}
          dishes={this.state.tabDishesContent[this.state.activeCategory]}
        />
      </div>
    )
  }
}
export default Recommendation;
