import React from 'react';
import "../../homeComponents/homeCss/homeMain.css";
function HomeSecondSection(props) {
    return (
        <div id="homeSecondSection">
          <div id="homeSecondSectionContetn">{props.header}</div>

        </div>
    );
}

export default HomeSecondSection;
