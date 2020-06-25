import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './programInfo.css'


const ProgramInfo = (props) => {
    return (
        <div>
            {/*<Row className="borderLine"></Row>*/}
            <Row className="contents">
                <Col lx={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}} sm={{span:9, offset:1}}  xs={{span:8, offset:2}}>
                    <Row><p className="subtitle">{props.subtitle}</p></Row>
                    <Row><h1 className="title">{props.title}</h1></Row>
                    <Row className="last">
                        <Col className="artist"><p>{props.artistName}</p></Col>
                        <div className="col-button"><Button className="share" href={props.url} style={{fontFamily:"sofia-pro"}}>SHARE WITH FRIENDS</Button></div>
                    </Row>
                </Col>
            </Row>
            <Row className="borderLineBottom" style={{borderBottom:"60px solid "+props.color}}></Row>

        </div>
    );
}

export default ProgramInfo;
