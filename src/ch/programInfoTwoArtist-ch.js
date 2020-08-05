import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './programInfo-ch.css'


const ProgramInfoTwoArtistCH = (props) => {
    return (
        <div style={{marginBottom:"100px"}}>
            {/*}<Row className="PI-contents" style={{borderTop: "1px solid " + props.color }}>*/}
                <Col lx={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:10, offset:1}}  xs={{span:8, offset:2}}>
                    <Row><p className="PI-subtitle-ch" >{props.subtitle}</p></Row>
                    <Row><h1 className="PI-title_twoArtist-ch" >{props.title}</h1></Row>
                    <Row className="PI-secondlast">
                        <Col className="PI-artist-two-ch"><p className = "PI-Artist-p-ch" >{props.artistitle1}{props.artistName1}</p></Col>
                    </Row>
                    <Row className="PI-last">
                        <Col className="PI-artist-two-ch"><p className = "PI-Artist-p-ch">{props.artistitle2}{props.artistName2}</p></Col>
                        <div className="PI-colButton"><Button className="PI-shareButton" href={props.url}>分享給朋友</Button></div>
                    </Row>
                </Col>
            {/*}</Row>*/}
            <Row className="PI-borderLineBottom" style={{borderBottom:"45px solid "+props.color}}></Row>

        </div>
    );
}

export default ProgramInfoTwoArtistCH;
