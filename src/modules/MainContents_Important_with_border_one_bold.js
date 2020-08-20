import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './MainContents.css'

const MainContents_Important_With_Border_one_bolder = (props) => {
    return (
        <div>
            <Row className="mainSection_Important_Row_border">
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
                    <p style={{fontFamily: props.font}}> <span style={{fontWeight:"bold"}}>{props.bold}</span> {props.contents}</p>
                    <div className="main_borderline" ></div>
                </Col>

            </Row>
        </div>
    );
}

export default MainContents_Important_With_Border_one_bolder;
