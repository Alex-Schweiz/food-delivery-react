import React from 'react';

import classes from './DishDetails.css';
import DishIngredients from './DishIngredients/DishIngredients';
import DishNutrition from './DishNutrition/DishNutrition';

const dishDetails = (props) => (
  <div className={classes.DishDetails}>
      <div className={classes.ImageContainer}>
        <img src={props.dish.img} alt="01"/>
      </div>
      <div className={classes.InfoContainer}>
        <div className={classes.ChooseCountry}>
          <span>Корж на выбор</span>
          <button className={classes.InfoButton}>
            <p>Тонкий 4-5мм.</p>
            <p>как в Италии</p>
          </button>
          <button className={classes.InfoButton}>
            <p>Пышный бортик</p>
            <p>как в Америке</p>
          </button>
        </div>
        <div className={classes.PurchaseInfoBlock}>
          <div className={classes.InfoCounter}>
            <div onClick={() => props.changeItemsNumber(0)}>
              <span>-</span>
            </div>
            <input type="text" value={props.itemsNumber}/>
            <div onClick={() => props.changeItemsNumber(1)}>
              <span>+</span>
            </div>
          </div>
          <div className={classes.OrderButton}>
            Заказать
          </div>
          <div className={classes.QuantityInfo}>
            <span>{props.totalPrice}</span>
            <span>грн</span>
          </div>
        </div>
        <DishIngredients
          ingredients={props.ingredients}
        />
        <DishNutrition
          nutrition={props.dish.nutrition}
        />
      </div>
    </div>
);

export default dishDetails;