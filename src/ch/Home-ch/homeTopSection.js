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
                  <div className="firstColTitle">選自社區朋友提供的天空照片</div>
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
