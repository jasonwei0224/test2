import React from 'react';
import {Row, Col} from 'react-bootstrap';
import homepage_placeholder from "../assets/homepage_placeholder_lg.jpg";
/**
 * Third section in Homepage.
 * Props: title - project title.
 * @param {*} props
 */
function HomeProjectRight(props) {
    return (
        <div id="homeProjectRight">
            <Row className="thirdSectionHomeProjectRow no-gutters">
                <Col xs="8"className="homeProjectBlankCol"></Col>
                <Col xs="4"className="homeProjectTitleCol">{props.title}</Col>
            </Row>
        </div>
    );
}

export default HomeProjectRight;
