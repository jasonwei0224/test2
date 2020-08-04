import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './programInfo.css'


const ProgramInfoTwoArtist = (props) => {
    return (
        <div style={{marginBottom:"100px"}}>
            {/*}<Row className="PI-contents" style={{borderTop: "1px solid " + props.color }}>*/}
                <Col lx={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}}  xs={{span:8, offset:2}}>
                    <Row><p className="PI-subtitle">{props.subtitle}</p></Row>
                    <Row><h1 className="PI-title_twoArtist">{props.title}</h1></Row>
                    <Row className="PI-secondlast">
                        <Col className="PI-artist-two"><p className = "PI-Artist-p">{props.artistitle1}{props.artistName1}</p></Col>
                    </Row>
                    <Row className="PI-last">
                        <Col className="PI-artist-two"><p className = "PI-Artist-p">{props.artistitle2}{props.artistName2}</p></Col>
                        <div className="PI-colButton"><Button className="PI-shareButton" href={props.url}>SHARE WITH FRIENDS</Button></div>
                    </Row>
                </Col>
            {/*}</Row>*/}
            <Row className="PI-borderLineBottom" style={{borderBottom:"45px solid "+props.color}}></Row>

        </div>
    );
}

export default ProgramInfoTwoArtist;
