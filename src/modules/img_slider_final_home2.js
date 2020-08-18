import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './img_slider_final.css'
import image1 from '../../src/assets/mask1.jpg'
import image2 from '../../src/assets/mask2.jpg'
import Dots_home from './img_slider_final_dots_home2'
import Sky1 from '../assets/V-Sky1.jpg';
import Sky3 from '../assets/V-Sky3.jpg';
import Sky4 from '../assets/V-Sky4.jpg';
import Sky5 from '../assets/V-Sky5.jpg';
import Sky7 from '../assets/V-Sky7.jpg';
import Sky8 from '../assets/V-Sky8.jpg';
import Sky9 from '../assets/V2-Sky1.jpg';
import Sky10 from '../assets/V2-Sky2.jpg';
import Sky11 from '../assets/V2-Sky3.jpg';
import Sky12 from '../assets/V2-Sky4.jpg';
import Sky13 from '../assets/V2-Sky5.jpg';
import Sky14 from '../assets/V2-Sky6.jpg';
import Sky15 from '../assets/V3-Sky1.jpg';
import Sky16 from '../assets/V3-Sky2.jpg';
import Sky17 from '../assets/V3-Sky3.jpg';
import Sky18 from '../assets/V3-Sky4.jpg';
import Sky19 from '../assets/V3-Sky5.jpg';
import Sky20 from '../assets/V3-Sky6.jpg';
import Sky21 from '../assets/V3-Sky7.jpg';
import Sky22 from '../assets/V3-Sky8.jpg';
// import Sky23 from '../assets/V3-Sky9.jpg';
import Sky24 from '../assets/V3-Sky10.jpg';
import Sky25 from '../assets/V3-Sky11.jpg';
import Sky26 from '../assets/V3-Sky12.jpg';
import Sky27 from '../assets/V3-Sky13.jpg';
import Sky28 from '../assets/V3-Sky14.jpg';
import Sky29 from '../assets/V3-Sky15.jpg';
import Sky30 from '../assets/V3-Sky16.jpg';
import Sky31 from '../assets/V3-Sky17.jpg';
import Sky32 from '../assets/V3-Sky18.jpg';
import Sky33 from '../assets/V3-Sky19.jpg';
import Sky34 from '../assets/V3-Sky20.jpg';
import Sky35 from '../assets/V3-Sky21.jpg';
import Sky36 from '../assets/V3-Sky22.jpg';
import Sky38 from '../assets/V3-Sky23.jpg';
import Sky39 from '../assets/V3-Sky24.jpg';
import Sky40 from '../assets/V3-Sky25.jpg';
import Sky41 from '../assets/V3-Sky26.jpg';
import Sky42 from '../assets/V3-Sky27.jpg';
import Sky43 from '../assets/V3-Sky28.jpg';
import Sky44 from '../assets/V3-Sky29.jpg';
import Sky45 from '../assets/V3-Sky30.jpg';
import Sky46 from '../assets/V3-Sky31.jpg';
import Sky47 from '../assets/V3-Sky32.jpg';
import Sky49 from '../assets/V3-Sky33.jpg';
import Sky48 from '../assets/V3-Sky34.jpg';
import Sky50 from '../assets/V3-Sky35.jpg';
import Sky51 from '../assets/V3-Sky36.jpg';
import Sky52 from '../assets/V3-Sky37.jpg';
import Sky53 from '../assets/V3-Sky38.jpg';
import Sky55 from '../assets/V3-Sky39.jpg';
import Sky54 from '../assets/V3-Sky40.jpg';
import Sky56 from '../assets/V3-Sky41.jpg';
import Sky57 from '../assets/V3-Sky42.jpg';
import Sky58 from '../assets/V3-Sky43.jpg';
import Sky60 from '../assets/V3-Sky44.jpg';
import Sky59 from '../assets/V3-Sky45.jpg';
import Sky61 from '../assets/V3-Sky46.jpg';
import Sky62 from '../assets/V3-Sky47.jpg';
import Sky64 from '../assets/V3-Sky49.jpg';
import Sky63 from '../assets/V3-Sky48.jpg';
import Sky65 from '../assets/V3-Sky50.jpg';
import Sky66 from '../assets/V3-Sky51.jpg';
import Sky67 from '../assets/V3-Sky52.jpg';
import Sky68 from '../assets/V3-Sky53.jpg';
import Sky69 from '../assets/V3-Sky54.jpg';
import Sky70 from '../assets/V3-Sky55.jpg';
import Sky71 from '../assets/V3-Sky56.jpg';






class Slider_home extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        images: [
            Sky42, Sky43, Sky44, Sky45, Sky46, Sky47, Sky48, Sky49, Sky50,
            Sky51, Sky52, Sky53, Sky54, Sky55, Sky56,
            Sky1, Sky3, Sky4, Sky5, Sky7, Sky8, Sky9,
            Sky10, Sky11, Sky12, Sky13, Sky14,
            Sky15,Sky16,Sky17,Sky18,Sky19,Sky20, Sky21,
            Sky22, Sky24, Sky25, Sky26, Sky27, Sky28, Sky29,
            Sky30, Sky31, Sky32, Sky33,Sky34, Sky35, Sky36,
            Sky38, Sky39, Sky40, Sky41, Sky57, Sky58, Sky59, Sky60,
            Sky61, Sky62, Sky63, Sky64, Sky65, Sky66, Sky67, Sky68,
            Sky69, Sky70, Sky71
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
        {/*}<Dots_home slides={this.state.images} activeIndex={this.state.currentIndex}>asd</Dots_home>*/}

        </div>
      );
    }
  }


  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 40%'
    }
    return <div className="slide_home" style={styles}></div>
  }


  const LeftArrow = (props) => {
    return (
      <div className="backArrow_home arrow_home" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }


  const RightArrow = (props) => {
    return (
      <div className="nextArrow_home arrow_home" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
export default Slider_home;
