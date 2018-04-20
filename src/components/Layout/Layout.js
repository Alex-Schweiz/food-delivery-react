import React from 'react';
import { Route } from "react-router-dom";

import Aux from '../../hoc/Auxx/Auxx';
import Header from '../Header/Header';
import RedMenu from '../../containers/RedMenu/RedMenu';
import HomePage from '../HomePage/HomePage';
import MenuPage from '../../containers/MenuPage/MenuPage';
import CuisinePage from '../../containers/CuisinePage/CuisinePage';
import DishPage from '../../containers/DishPage/DishPage';
import Footer from '../Footer/Footer';

const layout = () => (
  <Aux>
    <Header />
    <RedMenu />
    <Route exact path='/' component={HomePage}/>
    <Route path='/menu/:dishCategory' component={MenuPage}/>
    <Route path='/cuisine/:cuisineType' component={CuisinePage}/>
    <Route path='/dish/:category/:title' component={DishPage}/>
    <Footer />
  </Aux>
);

export default layout;