import React from 'react';
import {Row, Col} from 'react-bootstrap';
import homepage_placeholder from "../assets/homepage_placeholder_lg.jpg";
/**
 * Third section in Homepage.
 * Props: title - project title.
 * @param {*} props
 */
function homeImage(props) {
    return (
        <div id="homeProjectRight">
            <Row className="thirdSectionHomeProjectRow">
                <Col xs="12"className="homeProjectBlankCol"><img src={props.image} href={props.location} style={{width:'100%', height:"auto"}}></img></Col>
            </Row>
        </div>
    );
}

export default homeImage;
