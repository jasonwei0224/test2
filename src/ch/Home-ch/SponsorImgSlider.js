import React from 'react';
import Slider from 'react-slick';
import placeholder from '../../assets/placeholder.jpg';
import ItemsCarousel from 'react-items-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from'@fortawesome/free-solid-svg-icons';
import { faChevronRight } from'@fortawesome/free-solid-svg-icons';

class SponsorImgSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemIndex: 0
        }
    }
        render() {
          return (
              <div id="home_sponsor_slider">
                  <ItemsCarousel
                    infiniteLoop={true}
                    gutter={12}
                    activePosition={'center'}
                    chevronWidth={60}
                    disableSwipe={false}
                    alwaysShowChevrons={true}
                    numberOfCards={3}
                    slidesToScroll={3}
                    outsideChevron={true}
                    activeItemIndex={this.state.activeItemIndex}
                    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                    rightChevron={
                        <FontAwesomeIcon icon={faChevronRight}/>
                    }
                    leftChevron={
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    }
                  >
                    <div>
                        <img className="home_sponsor_img" src={placeholder}/>
                    </div>
                    <div>
                        <img className="home_sponsor_img" src={placeholder}/>
                    </div>
                    <div>
                        <img className="home_sponsor_img" src={placeholder}/>
                    </div>
                    <div>
                        <img className="home_sponsor_img" src={placeholder}/>
                    </div>

                  </ItemsCarousel>

            </div>
          );
        }
      }

export default SponsorImgSlider;
