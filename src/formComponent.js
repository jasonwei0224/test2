import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';

const FormComponent = (props) => {
    return (
        <Form.Row style={{marginBottom:"30px"}}>
            <Form.Label className="formLabel" style={{color:"#BE0027"}}as={Col} xl={{span:4, offset:3}} lg={{span:4, offset:1}} xs={{span:4, offset:1}}>{props.title}</Form.Label>
            <Col xl={{span:4, offset:0}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                <Form.Control id={props.id} name={props.name} style={{backgroundColor:"#e9e9e9", borderRadius: "20px"}} type="text" required/>
            </Col>
        </Form.Row>
        
    );
}

export default FormComponent;
