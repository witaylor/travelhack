import React, { Component } from 'react';
import CarouselButton from "./CarouselButton";
import Card from "../Card";

import './ImageCarousel.css';
import CarouselSlide from "./CarouselSlide";

export default class PhotoCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: props.images,
      currentIndex: 0,
      translateValue: 0,
      isInitialRender: true, // used to autoplay carousel
      slideDuration: props.slideDuration || 5000 // time in milliseconds to show each carousel image for
    };

    this.slideTimer = 0;
  };

  componentWillUnmount() { clearInterval(this.slideTimer); }

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  };

  goToNextSlide = () => {
    let isLastSlide = this.state.currentIndex === this.state.images.length - 1;

    this.setState({
      currentIndex:   isLastSlide ? 0 : this.state.currentIndex + 1,
      translateValue: isLastSlide ? 0 : this.state.translateValue - this.slideWidth()
    });
  };

  slideWidth = () => document.querySelector('.photo-slide').offsetWidth;
  startTimer = () => this.slideTimer = setInterval(this.goToNextSlide, this.state.slideDuration);

  render() {
    if (this.state.isInitialRender) {
      this.startTimer();
      this.setState({ isInitialRender: false });
    }

    return (
      this.state.images === undefined ? null :
      <Card>
        <h1>{ this.props.title || null }</h1>
        <div className="photo-carousel">
          <CarouselSlide
            translate={this.state.translateValue}
            images={this.state.images}
          />

          <CarouselButton
            direction={'left'}
            handler={this.goToPrevSlide}
          />

          <CarouselButton
            direction={'right'}
            handler={this.goToNextSlide}
          />
        </div>
      </Card>
    );
  }
};
