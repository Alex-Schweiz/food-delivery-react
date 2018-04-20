import React, {Component} from 'react';
import { Link } from "react-router-dom";

import classes from './RedMenu.css';

class redMenu extends Component {
  state = {
    categoriesItems: [
    {
      link: '/menu/pizza',
      title: 'Пицца',
      childrenCategory: null
    }, {
      link: '/cuisine/japanese',
      title: 'Японская кухня',
      childrenCategory: 1
    }, {
      link: '/cuisine/italian',
      title: 'Итальянская кухня',
      childrenCategory: 2
    }, {
      link: '/cuisine/slavic',
      title: 'Славянская кухня',
      childrenCategory: 3
    }, {
      link: '/cuisine/bbq',
      title: 'Гриль BBQ',
      childrenCategory: 4
    }, {
      link: '/menu/kids-menu',
      title: 'Детское меню',
      childrenCategory: null
    }, {
      link: '/menu/desserts',
      title: 'Десерты',
      childrenCategory: null
    }, {
      link: '/cuisine/bar',
      title: 'Бар',
      childrenCategory: 5
    }],
    subCategoryItems: {
      1: [
        {
          link: '/menu/japanese-sets',
          title: 'Сеты'
        }, {
          link: '/menu/japanese-rolls',
          title: 'Роллы'
        }, {
          link: '/menu/japanese-salads',
          title: 'Салаты'
        }, {
          link: '/menu/japanese-soups',
          title: 'Супы'
        }, {
          link: '/menu/japanese-pasta',
          title: 'Лапша'
        }, {
          link: '/menu/japanese-rice',
          title: 'Горячий рис'
        }, {
          link: '/menu/japanese-sushi',
          title: 'Суши'
        }, {
          link: '/cuisine/japanese',
          title: 'Инари'
        }
      ],
      2: [
        {
          link: '/menu/italian-pasta',
          title: 'Паста'
        }, {
          link: '/menu/italian-salads',
          title: 'Салаты'
        }, {
          link: '/menu/italian-soups',
          title: 'Супы'
        }
      ],
      3: [
        {
          link: '/menu/',
          title: 'Закуски'
        }, {
          link: '/menu/slavic-cookedFood',
          title: 'Замороженные пельмени, вареники'
        }, {
          link: '/menu/',
          title: 'Салаты'
        }, {
          link: '/menu/slavic-soups',
          title: 'Супы'
        }, {
          link: '/menu/slavic-cookedFood',
          title: 'Отварные пельмени, вареники'
        }
      ],
      4: [
        {
          link: '/menu/bbq-wings',
          title: 'Крылья BBQ'
        }, {
          link: '/menu/bbq-burgers',
          title: 'Бургеры и картошка'
        }
      ],
      5: [
        {
          link: '/menubar-drinks/bar-drinks',
          title: 'Напитки'
        }, {
          link: '/menu/bar-juice',
          title: 'Соки'
        }, {
          link: '/menu/bar-beer',
          title: 'Пиво'
        }, {
          link: '/menu/bar-craft',
          title: 'Фирменные напитки'
        }
      ]
    },
    selectedSubcategory: 1,
    isBlackMenuOpened: false
  };

  mouseOverRedMenuHandler = (childrenCategory) => {
    if (childrenCategory !== null) {
      this.setState({isBlackMenuOpened: true});
      this.setState({selectedSubcategory: childrenCategory});
    }
  };

  mouseOverBlackMenuHandler = () => {
    this.setState({isBlackMenuOpened: true});
  };

  mouseOutRedMenuHandler = () => {
    this.setState({isBlackMenuOpened: false})
  };

  render() {
    return (
      <div>
        <nav className={classes.RedMenu}>
          {this.state.categoriesItems.map(category => (
            <Link
              key={category.title}
              onMouseOver={() => this.mouseOverRedMenuHandler(category.childrenCategory)}
              onMouseOut={this.mouseOutRedMenuHandler}
              to={category.link}
            >{category.title}</Link>
          ))}
        </nav>
        <nav
          onMouseOver={this.mouseOverBlackMenuHandler}
          onMouseOut={this.mouseOutRedMenuHandler}
          className={classes.BlackMenu}
          style={{display: this.state.isBlackMenuOpened ? 'block' : 'none'}}
        >
          {this.state.subCategoryItems[this.state.selectedSubcategory].map(subcategory => (
            <Link
              key={subcategory.title}
              to={subcategory.link}
            >{subcategory.title}</Link>
          ))}
        </nav>
      </div>
    )
  }
}

export default redMenu;