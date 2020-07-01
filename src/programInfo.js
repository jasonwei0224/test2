import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './programInfo.css'


const ProgramInfo = (props) => {
    return (
        <div style={{marginBottom:"100px"}}>
            <Row className="PI-contents">
                <Col lx={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}}  xs={{span:8, offset:2}}>
                    <Row><p className="PI-subtitle">{props.subtitle}</p></Row>
                    <Row><h1 className="PI-title">{props.title}</h1></Row>
                    <Row className="PI-last">
                        <Col className="PI-artist"><p>{props.artistName}</p></Col>
                        <div className="PI-colButton"><Button className="PI-shareButton" href={props.url}>SHARE WITH FRIENDS</Button></div>
                    </Row>
                </Col>
            </Row>
            <Row className="PI-borderLineBottom" style={{borderBottom:"60px solid "+props.color}}></Row>

        </div>
    );
}

export default ProgramInfo;
