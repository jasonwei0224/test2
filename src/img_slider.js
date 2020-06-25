import React from 'react';
import sky1 from "./assets/sky1.jpeg";
import sky2 from "./assets/sky2.jpeg";
import sky3 from "./assets/sky3.jpeg";
import sky4 from "./assets/sky4.jpeg";
import SimpleImageSlider from "react-simple-image-slider";

const height = '70vh';
const width = '100%';
class ImgSlider extends React.Component {
    render() {
        const images = [
            { url: sky1 },
            { url: sky2 },
            { url: sky3 },
            { url: sky4 }
        ];

        return (
            <SimpleImageSlider
                width={width}
                height={height}
                images={images}
            />
        );
    }
}
export default ImgSlider;