import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './sky_v1.css'

import sky1 from "./assets/sky1.jpeg";
import sky2 from "./assets/sky2.jpeg";
import sky3 from "./assets/sky3.jpeg";
import sky4 from "./assets/sky4.jpeg";


export default class ImageSlider extends Component {
  render() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        dots: true
    };
    const sponsors = [sky1, sky2, sky3, sky4]
    return (
      <div className="imageSlider">
        <Slider {...settings}>
            {sponsors.map((sponsor, index) => (
                <img key={index} src={sponsor} alt={index}></img>
            ))}
        </Slider>
      </div>
    );
  }
}
