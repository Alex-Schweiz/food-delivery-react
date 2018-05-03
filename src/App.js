import React from 'react';
import { BrowserRouter } from "react-router-dom";

import classes from './App.css';

import Layout from './components/Layout';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}
