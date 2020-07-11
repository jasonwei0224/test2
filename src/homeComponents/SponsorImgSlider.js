import React from 'react';
import Slider from 'react-slick';

class SponsorImgSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        accessibility: true,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      return (
        <Slider {...settings}>
          <div>
            <h3>IMG</h3>
          </div>
          <div>
            <h3>IMG</h3>
          </div>
          <div>
            <h3>IMG</h3>
          </div>
          <div>
            <h3>IMG</h3>
          </div>
        </Slider>
      );
    }
  }

  export default SponsorImgSlider;