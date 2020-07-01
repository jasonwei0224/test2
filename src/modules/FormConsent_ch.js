import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import './FormConsent.css'

const FormConsent_ch = (props) => {
    return (
        <Row style={{marginBottom:"30px"}}>
            <Col xl={{span:1, offset:2}} lg={{span:1, offset:1}} xs={{span:1, offset:1}}>
                <Form.Check aria-label="option 1"/>
                <input type="checkbox" class="custom-control-input" id={props.inputId} checked="" ></input>
            </Col>

            <Col xl={{span:7, offset:0}} lg={{span:9, offset:0}}sm={{span:9, offset:0}}xs={{span:9, offset:0}}>
                <div className="consentLine" style={{color:"#BE0027"}} >我同意多倫多台灣文化節將我所拍攝的照片作為「天空」節目的內容與相關宣傳使用。</div>
            </Col>
         </Row>
        
    );
}

export default FormConsent_ch;
