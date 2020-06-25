import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './programInfo.css'


const ProgramInfoTB = (props) => {
    return (
        <div>
            <Row className="borderLine"></Row>
            <Row className="contents">
                <Col lg={{span:8, offset:2}} xs={{span:8, offset:2}}>
                    <Row><h2 className="subtitle">{props.subtitle}</h2></Row>
                    <Row><h1 className="title">{props.title}</h1></Row>
                    <Row className="last">
                        <Col className="artist"><p>Artist: {props.artistName}</p></Col>
                        <div className="col-button">
                            <Button className="upload" href={props.url}>UPLOAD YOUR SKY</Button>
                            <Button className="share" href={props.url}>SHARE WITH FRIEND</Button>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className="borderLine"></Row>
        </div>
    );
}

export default ProgramInfoTB;
