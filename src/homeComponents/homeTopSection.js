import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable'

function HomeTopSection() {
    return (
        <div id="homeTopSection">
            <Row id="topSectionRow">
                <Col className="firstCols">
                    HI
                </Col>
                <Col id="projectsScroll" className="firstCols">
                    <ProjectScrollable/>
                </Col>
            </Row>
        </div>
    );
}

export default HomeTopSection;