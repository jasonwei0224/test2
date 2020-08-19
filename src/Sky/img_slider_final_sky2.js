import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './img_slider_final_sky2.css'
import image1 from '../../src/assets/mask1.jpg'
import image2 from '../../src/assets/mask2.jpg'
import image3 from '../../src/assets/mask3.jpg'
import image4 from '../../src/assets/mask4.jpg'
import image5 from '../../src/assets/mask5.jpg'
// import Dots from './img_slider_final_dots_sky2_and_mask'

class Slider2 extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        images: props.images,
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
       return document.querySelector('.slide_sky2').clientWidth
    }

    render() {
      return (
        <div className="slider_sky2">

          <div className="slider-wrapper_sky2"
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
    return <div className="slide_sky2" style={styles}></div>
  }


  const LeftArrow = (props) => {
    return (
      <div className="backArrow_sky2 arrow_sky2" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left_sky2 fa-2x" aria-hidden="true"></i>
      </div>
    );
  }


  const RightArrow = (props) => {
    return (
      <div className="nextArrow_sky2 arrow_sky2" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right_sky2 fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
export default Slider2;
