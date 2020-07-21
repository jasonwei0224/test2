import React from 'react';
import {Row, Col} from 'react-bootstrap';
import "../../homeComponents/homeCss/homeMain.css";
/**
 * Third section in Homepage.
 * Props: title - project title.
 * @param {*} props
 */
function HomeProjectLeft(props) {
    return (
        <div id="homeProjectRight">
            <Row className="thirdSectionHomeProjectRow no-gutters">
                <Col xs="4"className="homeProjectTitleCol">{props.title}</Col>
                <Col xs="8"className="homeProjectBlankCol"><img src={props.image} href={props.location} style={{width:'100%', height:"auto"}}></img></Col>
            </Row>
        </div>
    );
}

export default HomeProjectLeft;
