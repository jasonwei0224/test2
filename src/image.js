import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import mask1 from './mask/mask1.jpg';
import mask2 from './mask/mask2.jpg';
import mask3 from './mask/mask3.jpg';
import mask4 from './mask/mask4.jpg';
import mask5 from './mask/mask5.jpg';
const images = [
    mask1,
    mask2,
    mask3,
    mask4,
    mask5
];

class Image extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: true
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        {/* <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button> */}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Image
