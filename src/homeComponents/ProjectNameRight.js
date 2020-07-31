import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ProjectNameRight(props) {
    return (
        <div id="projectInScroll">
            <Row id="mainRow">
                <Col xl={{span:16, offset:0}} className="projectCols">
                    <a href={props.url}><img id="projectImage" src={props.image}/></a>
                </Col>
            </Row>
        </div>
    )
}

export default ProjectNameRight;
