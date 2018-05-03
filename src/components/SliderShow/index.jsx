import React, { Component } from 'react';

import classes from './SliderShow.css';

class SliderShow extends Component {
  state = {
    images: [
      '/img/slider/01.jpg',
      '/img/slider/02.jpg',
      '/img/slider/03.jpg',
      '/img/slider/04.jpg',
      '/img/slider/05.jpg',
      '/img/slider/06.jpg',
      '/img/slider/07.jpg',
      '/img/slider/08.jpg',
      '/img/slider/09.jpg'
    ],
    slideNumber: 0,
    imgUrl: '/img/slider/01.jpg',
    currentImage: 1,
    activeSlide: 1
  };

  componentWillMount() {
    this.setState({slideNumber: this.getSlidesNumber()});
    // setInterval(() => this.changeSlide(true), 2000);
  }

  getSlidesNumber() {
    return this.state.images.length;
  }

  changeSlide(next) {
    let slidesQuantity = this.state.slideNumber;
    let currentSlide = this.state.activeSlide;
    if (next) {
      currentSlide++;
    }
    if (currentSlide > slidesQuantity || currentSlide === 0) {
      currentSlide = 1;
    }
    this.setCurrentImage(currentSlide);
  }

  setCurrentImage(slide) {
    this.setState({activeSlide: slide});
    this.setState({imgUrl: `/img/slider/0${slide}.jpg`})
  }

  render() {
    return (
      <div>
        <div className={classes.SliderShow}>
          {/*<img src="/img/slider/02.jpg" alt="01" className={classes.ActiveImage}/>
        <img src="" alt="02" className={classes.InactiveImage}/>*/}
          {/*{this.state.images.map((image) => (
          <img src={image} alt="01" className={classes.ActiveImage}/>
        ))}*/}
          <img src={this.state.imgUrl} alt="01" className={classes.ActiveImage}/>
          <a onClick={() => this.changeSlide(0)} className={classes.Prev}>&#10094;</a>
          <a onClick={() => this.changeSlide(1)} className={classes.Next}>&#10095;</a>
        </div>
      </div>
    );
  }
}

export default SliderShow;