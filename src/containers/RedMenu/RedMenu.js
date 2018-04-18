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
      link: '/menu/pizza',
      title: 'Итальянская кухня',
      childrenCategory: 2
    }, {
      link: '/menu/pizza',
      title: 'Славянская кухня',
      childrenCategory: 3
    }, {
      link: '/menu/pizza',
      title: 'Гриль BBQ',
      childrenCategory: 4
    }, {
      link: '/menu/pizza',
      title: 'Детское меню',
      childrenCategory: null
    }, {
      link: '/menu/pizza',
      title: 'Десерты',
      childrenCategory: null
    }, {
      link: '/menu/pizza',
      title: 'Бар',
      childrenCategory: 5
    }],
    subCategoryItems: {
      1: [
        {
          link: '/',
          title: 'Сеты'
        }, {
          link: '/',
          title: 'Роллы'
        }, {
          link: '/',
          title: 'Салаты'
        }, {
          link: '/',
          title: 'Супы'
        }, {
          link: '/',
          title: 'Лапша'
        }, {
          link: '/',
          title: 'Горячий рис'
        }, {
          link: '/',
          title: 'Суши'
        }, {
          link: '/',
          title: 'Инари'
        }
      ],
      2: [
        {
          link: '/',
          title: 'Паста'
        }, {
          link: '/',
          title: 'Салаты'
        }, {
          link: '/',
          title: 'Супы'
        }
      ],
      3: [
        {
          link: '/',
          title: 'Закуски'
        }, {
          link: '/',
          title: 'Замороженные пельмени, вареники'
        }, {
          link: '/',
          title: 'Салаты'
        }, {
          link: '/',
          title: 'Супы'
        }, {
          link: '/',
          title: 'Отварные пельмени, вареники'
        }
      ],
      4: [
        {
          link: '/',
          title: 'Крылья BBQ'
        }, {
          link: '/',
          title: 'Бургеры и картошка'
        }
      ],
      5: [
        {
          link: '/',
          title: 'Напитки'
        }, {
          link: '/',
          title: 'Соки'
        }, {
          link: '/',
          title: 'Пиво'
        }, {
          link: '/',
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