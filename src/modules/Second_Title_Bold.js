import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import "./Second_Title.css"

const Second_Title_Bold = (props) => {
    return (
        <div>
            <Row style={{marginTop:"40px"}}>
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
                    <p className ="second_Title_P">{props.secondTitle}</p>
                </Col>
            </Row>

        </div>
    );
}

export default Second_Title_Bold;
