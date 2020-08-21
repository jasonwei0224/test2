import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './programInfo-ch.css'


const ProgramInfo_ch = (props) => {
    return (
        <div style={{marginBottom:"100px"}}>
            <Row className="PI-contents">
                <Col lx={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}}  xs={{span:8, offset:2}}>
                    <Row><p className="PI-subtitle_twoArtist-ch" >{props.subtitle}</p></Row>
                    <Row><h1 className="PI-title_twoArtist">{props.title}</h1></Row>
                    <Row className="PI-last">
                        <Col className="PI-artist"><p>{props.artistName}</p></Col>
                        <div className="PI-col-button_ch"><Button className="PI-shareButton" href={props.url}>分享給朋友</Button></div>
                    </Row>
                </Col>
            </Row>
            <Row className="PI-borderLineBottom" style={{borderBottom:"60px solid "+props.color}}></Row>

        </div>
    );
}

export default ProgramInfo_ch;
