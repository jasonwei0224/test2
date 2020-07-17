import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './img_slider_final.css'
import image1 from '../../src/assets/mask1.jpg'
import image2 from '../../src/assets/mask2.jpg'
import Dots_home from './img_slider_final_dots_home2'
import homepage_placeholder_sm_1 from '../../src/assets/homepage_placeholder_sm_1.jpg';
import homepage_placeholder_sm_2 from '../../src/assets/homepage_placeholder_sm_2.jpg';
import homepage_placeholder_sm_3 from '../../src/assets/homepage_placeholder_sm_3.jpg';

class Slider_home extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        images: [
            homepage_placeholder_sm_1, homepage_placeholder_sm_2, homepage_placeholder_sm_3
        ],
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
       return document.querySelector('.slide_home').clientWidth
    }

    render() {
      return (
        <div className="testPliz">
          <div className="slider_home">

          <div className="slider-wrapper"
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
        </div>


          <LeftArrow
           goToPrevSlide={this.goToPrevSlide}
          />

          <RightArrow
           goToNextSlide={this.goToNextSlide}
          />
          <Dots_home slides={this.state.images} activeIndex={this.state.currentIndex}>asd</Dots_home>

        </div>
      );
    }
  }


  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <div className="slide_home" style={styles}></div>
  }


  const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow_home" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }


  const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow_home" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
export default Slider_home;
