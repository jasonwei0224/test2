import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './home.css'

import mask3 from './assets/mask3.jpg';
import mask5 from './assets/mask5.jpg';

export default class LogoSlider extends Component {
  render() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true
    };
    const sponsors = [mask5, mask3, mask5, mask3, mask5, mask3]
    return (
      <div className="logoSlider">
        <Slider {...settings}>
            {sponsors.map((sponsor, index) => (
                <img key={index} src={sponsor} alt={index}></img>
            ))}
        </Slider>
      </div>
    );
  }
}