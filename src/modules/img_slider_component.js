import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './img_slider_component.css'

const width = '100%';
const height = '1000px';

function ImgSlider_component(props) {
    const images = [
        { url: props.image1 },
        { url: props.image2 },
        { url: props.image3 },
        { url: props.image4 }
    ];
    return (
        <SimpleImageSlider className="testimgslider"
            width={width}
            height={height}
            images={images}
        />
    );
}

export default ImgSlider_component;