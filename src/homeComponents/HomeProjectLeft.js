import React from 'react';
import {Row, Col} from 'react-bootstrap';
/**
 * Third section in Homepage. 
 * Props: title - project title.
 * @param {*} props 
 */
function HomeProjectLeft(props) {
    return (
        <div id="homeProjectRight">
            <Row className="thirdSectionHomeProjectRow">
                <Col xs="4"className="homeProjectTitleCol">{props.title}</Col>
                <Col xs="8"className="homeProjectBlankCol"></Col>
            </Row>
        </div>
    );
}

export default HomeProjectLeft;