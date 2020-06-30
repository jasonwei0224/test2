import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import './FormComponent.css'

const FormComponent = (props) => {
    return (
        <Row>
            <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control id={props.formId} className={props.formClassName} type="text" placeholder={props.placeHolder} required size="lg"></Form.Control>
            </Col>
        </Row>
        
    );
}

export default FormComponent;
