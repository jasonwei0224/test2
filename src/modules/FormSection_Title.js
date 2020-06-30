import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './FormSection_Title.css'

const FormSectionTitle = (props) => {
    return (
        <div>
            <Row>
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}
                    style={{backgroundColor: "#D9C739", marginTop:"2%", marginBottom:"3%", paddingTop:"0.5%",paddingBottom:"0.5%",
                     fontWeight:"bold"}}>
                         <div className="formSectionTitle_title">{props.title}</div>
                </Col>
            </Row>

        </div>
    );
}

export default FormSectionTitle;

