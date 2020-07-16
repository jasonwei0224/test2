import React from 'react';

function HomeSecondSection(props) {
    return (
        <div id="homeSecondSection">
          <div id="homeSecondSectionTitle">{props.title}</div>
          <div id="homeSecondSectionContetn">{props.header}</div>

        </div>
    );
}

export default HomeSecondSection;
