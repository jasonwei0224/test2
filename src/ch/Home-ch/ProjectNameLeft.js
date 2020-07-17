import React from 'react';
import { Row, Col } from 'react-bootstrap';

function ProjectNameRight(props) {
    return (
        <div id="projectInScroll">
            <Row id="mainRow">
                <Col xl={{span:5, offset:0}} lg={{span:10, offset:1}} md= {{span:10, offset:1}} xs={{span:10, offset:1}} className="projectCols2">
                        <div id="projectName">{props.name}</div>

                </Col>
                <Col xl={{span:6, offset:1}} className="projectCols">
                    <img id="projectImage" src={props.image}/>
                </Col>
            </Row>

        </div>
    )
}

export default ProjectNameRight;
