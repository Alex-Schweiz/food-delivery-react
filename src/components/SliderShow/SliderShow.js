import React, { Component } from 'react';

import classes from './SliderShow.css';

class SliderShow extends Component {
  state = {
    images: [
      '/img/slider/01.jpg',
      '/img/slider/02.jpg'
    ],
    activeSlide: 1
  };

  render() {
    return (
      <div>
        <div className={classes.SliderShow}>
          {/*<img src="/img/slider/02.jpg" alt="01" className={classes.ActiveImage}/>
        <img src="" alt="02" className={classes.InactiveImage}/>*/}
          {/*{this.state.images.map((image) => (
          <img src={image} alt="01" className={classes.ActiveImage}/>
        ))}*/}
          <img src="/img/slider/02.jpg" alt="01" className={classes.ActiveImage}/>
          <a className={classes.Prev}>&#10094;</a>
          <a className={classes.Next}>&#10095;</a>
        </div>
      </div>
    );
  }
}

export default SliderShow;