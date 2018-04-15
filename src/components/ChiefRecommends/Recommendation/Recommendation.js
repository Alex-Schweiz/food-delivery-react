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
          title: "Оранж",
          img: "/img/menu/bar/orange.jpg",
          price: 48,
          description: "Фирменный напиток Оранж в стеклянной бутылке."
        }, {
          title: "Узвар",
          img: "/img/menu/bar/uzvar.jpg",
          price: 39,
          description: "Фирменный напиток Узвар в стеклянной бутылке"
        }, {
          title: "Имбирно-облепиховый напиток",
          img: "/img/menu/bar/ginger-oblepikha.jpg",
          price: 62,
          description: "Фирменный имбирно-облепиховый напиток в стеклянной бутылке."
        }, {
          title: "Тархун",
          img: "/img/menu/bar/tarhun.jpg",
          price: 56,
          description: "Фирменный напиток Тархун в стекляной бутылке"
        }
      ],
      4: [
        {
          title: "Фунго (грибной)",
          img: "/img/menu/italian/fungo.jpg",
          price: 64,
          description: "Классический грибной крем суп с грибами шампиньонами, репчатым луком, морковью, белым вином."
        }, {
          title: "Лацио",
          img: "/img/menu/italian/lacio.jpg",
          price: 93,
          description: "Паста Фетучини со сливочным соусом, курицей, с шампиньонами и сыром пармезан."
        }, {
          title: "Цезарь с курицей",
          img: "/img/menu/italian/salad-caesar.jpg",
          price: 94,
          description: "Салат из свежих листьев айсберга, лолы, пекинской капусты, латука, помидоров черри, обжаренной курицы, перепелиными яйцами и сухарями, заправлен цитрусовым соусом на основе апельсинового сок..."
        }, {
          title: "Греческий",
          img: "/img/menu/italian/greek.jpg",
          price: 83,
          description: "Классический греческий салат с огурцом, томатом, сладким перцем, сыром Фета , оливками и маслинами, заправлен оливковым маслом со специями."
        }
      ],
      5: [
        {
          title: "Сакура",
          img: "/img/menu/japanese/sakura.jpg",
          price: 107,
          description: "Большой ролл с сыром Филадельфия, снежным крабом, японским омлетом, икрой капеллана и свежим огурцом."
        }, {
          title: "Филадельфия Классик",
          img: "/img/menu/japanese/phil-classic.jpg",
          price: 111,
          description: "Нежный ролл с сыром Филадельфия и свежим лососем."
        }, {
          title: "Чириз",
          img: "/img/menu/japanese/chiriz.jpg",
          price: 84,
          description: "Легкий ролл со свежим лососем, сыром Фета и зеленым луком."
        }, {
          title: "Ясай-маки",
          img: "/img/menu/japanese/yasay-maki.jpg",
          price: 69,
          description: "Овощной ролл со свежим огурцом, помидорами, сладким перцем, листьями салата латук и авокадо."
        }
      ],
      6: [
        {
          title: "Крылышки BBQ (450 грамм)",
          img: "/img/menu/bbq/bbq-wings.jpg",
          price: 111,
          description: "Обжаренное куриное крыло под соусом BBQ"
        }
      ],
      7: [
        {
          title: "Отварные вареники с картошкой (постные)",
          img: "/img/menu/slavic/vareniki.jpg",
          price: 38,
          description: "Вареники ручной лепки из заварного теста с картошкой."
        }, {
          title: "Отварные пельмени с курицей и грибами",
          img: "/img/menu/slavic/pelmeni.jpg",
          price: 47,
          description: "Пельмени ручной лепки из заварного теста с куриным филе, грибами и сыром."
        }, {
          title: "Отварные пельмени свино-говяжие",
          img: "/img/menu/slavic/pelmeni-pig.jpg",
          price: 39,
          description: "Пельмени ручной лепки из заварного теста с говядиной и свининой"
        }, {
          title: "Солянка",
          img: "/img/menu/slavic/solyanka.jpg",
          price: 56,
          description: "Пикантный суп с добавлением свинины, говядины, охотничьих сосисок, овощей: моркови, репчатого лука, солёных огурцов и маслин, со сметаной"
        }
      ],
      8: [
        {
          title: "Отварные вареники с картошкой (постные)",
          img: "/img/menu/slavic/vareniki.jpg",
          price: 38,
          description: "Вареники ручной лепки из заварного теста с картошкой."
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
