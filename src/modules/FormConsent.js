import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import './FormConsent.css'

const FormConsent = (props) => {
    return (
        <Row style={{marginBottom:"30px"}}>
            <Col xl={{span:1, offset:2}} lg={{span:1, offset:1}} xs={{span:1, offset:1}}>
                <Form.Check aria-label="option 1"/>
                <input type="checkbox" class="custom-control-input" id={props.inputId} checked="" ></input>
            </Col>

            <Col xl={{span:7, offset:0}} lg={{span:9, offset:0}}sm={{span:9, offset:0}}xs={{span:9, offset:0}}>
                <div className="consentLine" style={{color:"#BE0027"}} >I consent TAIWANfest to use the submitted photo(s) as part of the &quot;Under the same sky&quot; Project.</div>
            </Col>
         </Row>
        
    );
}

export default FormConsent;
