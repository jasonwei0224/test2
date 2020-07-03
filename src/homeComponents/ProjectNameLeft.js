import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ProjectNameRight(props) {
    return (
        <div id="projectInScroll">
            <Row id="mainRow">
                <Col className="projectCols">
                    <Row className="projectRows">
                        <div id="projectName">{props.name}</div>
                    </Row>
                    <Row className="projectRows">
                        <hr id="projectLine"/>
                    </Row>
                </Col>
                <Col className="projectCols">
                    <img id="projectImage" src={props.image}/>
                </Col>
            </Row>
            
        </div>
    )
}

export default ProjectNameRight;