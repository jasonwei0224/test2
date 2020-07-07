import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import placeHolder from "../assets/placeholder.jpg";

function HomeTopSection() {
    return (
        <div id="homeTopSection">
            <Row id="topSectionRow">
                <Col className="firstCols">
                    <img id='leftImage' src={placeHolder}/>
                </Col>
                <Col id="projectsScroll">
                    <ProjectScrollable/>
                </Col>
            </Row>
        </div>
    );
}

export default HomeTopSection;