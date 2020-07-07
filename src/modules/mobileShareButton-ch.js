import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './ButtonModule.css'


const MobileShareButtonCH = (props) => {
    return (
        <div>
            <Row>
                <Col style={{ marginBottom: "50px", textAlign:"center"}} xl={{span:4, offset:4}} lg={{span:8, offset:2}}sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                    <Button variant="primary" type="submit" bsPrefix="mobileShareBtn" ><a href={props.togoUrl}>分享給朋友</a></Button>
                </Col>
            </Row>

        </div>
    );
}

export default MobileShareButtonCH;
