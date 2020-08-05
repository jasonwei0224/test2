import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './img_slider_final_people_and_mask.css'
// import image1 from '../../src/assets/mask1.jpg'
// import image2 from '../../src/assets/mask2.jpg'
// import image3 from '../../src/assets/mask3.jpg'
// import image4 from '../../src/assets/mask4.jpg'
// import image5 from '../../src/assets/mask5.jpg'
// import Dots from './img_slider_final_dots_people_and_mask'

class Slider extends React.Component {
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
       return document.querySelector('.slide_people').clientWidth
    }

    render() {
      return (
        <div className="slider_people">

          <div className="slider-wrapper_people"
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
        {/*}  <Dots slides={this.state.images} activeIndex={this.state.currentIndex}>asd</Dots>*/}

        </div>
      );
    }
  }


  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'auto 100%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <div className="slide_people" style={styles}></div>
  }


  const LeftArrow = (props) => {
    return (
      <div className="backArrow_people arrow_people" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left_people fa-2x" aria-hidden="true"></i>
      </div>
    );
  }


  const RightArrow = (props) => {
    return (
      <div className="nextArrow_people arrow_people" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right_people fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
export default Slider;
