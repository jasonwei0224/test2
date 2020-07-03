import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import './FormFile.css'

const FormFile = (props) => {
    return (
        <div>
            <Row style={{marginBottom:"30px"}}>
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} xs={{span:10, offset:1}}>
                    <Form.File.Input required  onChange={props.onChange} id={props.FormId} bsPrefix='formFileInput' name="skyPhoto" />
                        <p className="hintFormFile" > {props.hint} </p>
                </Col>
            </Row>
        </div>
    );
}

export default FormFile;
