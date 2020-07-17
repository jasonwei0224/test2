import React from 'react';
import homepage_placeholder from "../assets/placeholder.jpg";
/**
 * Third section in Homepage.
 * Props: title - project title.
 * @param {*} props
 */
function HomeMobileProject(props) {
    return (
        <div id="homeMobileProjectRight">
            {/* <Row className="homeMobileProject no-gutters">
                <Col xs="8"className="homeProjectBlankCol"></Col>
                <Col xs="4"className="homeProjectTitleCol">{props.title}</Col>
            </Row> */}
            <div>
                <img id="homeMobileProjectImg" src={props.image}/>
            </div>
            <div id="homeMobileProjectBottomSection">
                <div id="homeMobileProjectType">{props.type}</div>
                <hr id="homeMobileProjectLine"/>
                <div id="homeMobileProjectTitle">{props.title}</div>
            </div>

        </div>
    );
}

export default HomeMobileProject;