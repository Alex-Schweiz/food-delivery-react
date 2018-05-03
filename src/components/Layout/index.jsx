import React from 'react';
import { Route } from "react-router-dom";

import Aux from '../../hoc/Auxx/Auxx';
import Header from '../Header';
import RedMenu from '../../containers/RedMenu';
import HomePage from '../HomePage';
import MenuPage from '../../containers/MenuPage';
import CuisinePage from '../../containers/CuisinePage';
import DishPage from '../../containers/DishPage';
import Footer from '../Footer';

const Layout = () => (
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

export default Layout;