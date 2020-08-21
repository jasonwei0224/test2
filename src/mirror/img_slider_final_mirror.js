import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './img_slider_final_mirror.css'

// import Dots from './img_slider_final_dots_mirror_and_mask'

import slide1 from '../assets/artist_taiwan_color.jpg';
import slide2 from '../assets/healthcare_professional_taiwan_color.jpg';
import slide3 from '../assets/fireman_taiwan_color.jpg'
import slide4 from '../assets/dancer-taiwan_color.jpg'
import slide10 from '../assets/child_taiwan_color.jpg'

class MirrorSlider extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        images: [slide1, slide2, slide3, slide4, slide10],
        currentIndex: 0,
        translateValue: 0
      }
    }

    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;

      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }

    goToNextSlide = () => {
      // Exiting the method early if we are at the end of the images array.
      // We also want to reset currentIndex and translateValue, so we return
      // to the first image in the array.
      if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }

      // This will not run if we met the if condition above
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }

    slideWidth = () => {
       return document.querySelector('.slide_mirror').clientWidth
    }

    render() {
      return (
        <div className="slider_mirror">

          <div className="slider-wrapper_mirror"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {
                this.state.images.map((image, i) => (
                  <Slide key={i} image={image} />
                ))
              }
          </div>

          <LeftArrow
           goToPrevSlide={this.goToPrevSlide}
          />

          <RightArrow
           goToNextSlide={this.goToNextSlide}
          />
        {/*}<Dots slides={this.state.images} activeIndex={this.state.currentIndex}>asd</Dots>*/}

        </div>
      );
    }
  }


  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 0%'
    }
    return <div className="slide_mirror" style={styles}></div>
  }


  const LeftArrow = (props) => {
    return (
      <div className="backArrow_mirror arrow_mirror" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left_mirror fa-2x" aria-hidden="true"></i>
      </div>
    );
  }


  const RightArrow = (props) => {
    return (
      <div className="nextArrow_mirror arrow_mirror" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right_mirror fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
export default MirrorSlider;
