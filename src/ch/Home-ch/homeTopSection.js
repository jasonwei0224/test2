import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import placeHolder from "../../assets/placeholder.jpg";
import Slider_home from "../../modules/img_slider_final_home2";
import "../../homeComponents/homeCss/homeMain.css";

function HomeTopSection() {
    return (
        <div id="homeTopSection">
            <Row id="topSectionRow">
                <Col className="firstCols">
                    <Slider_home/>
                    {/* <img id='leftImage' src={placeHolder}/> */}
                </Col>
                <Col id="projectsScroll">
                    <ProjectScrollable/>
                </Col>
            </Row>
        </div>
    );
}

export default HomeTopSection;
