import React from 'react';
import { Route } from "react-router-dom";

import Aux from '../../hoc/Auxx/Auxx';
import Header from '../Header/Header';
import RedMenu from '../RedMenu/RedMenu';
import HomePage from '../HomePage/HomePage';
import MenuPage from '../MenuPage/MenuPage';
import Footer from '../Footer/Footer';

const layout = () => (
  <Aux>
    <Header />
    <RedMenu />
    <Route exact path='/' component={HomePage}/>
    <Route path='/menu/pizza' component={MenuPage}/>
    <Footer />
  </Aux>
);

export default layout;