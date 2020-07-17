import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './MainContents.css'

const ImageWithDescription = (props) => {
  return (
    <div>
    <Row>
      <Col xl={{span:6, offset:3}} lg={{span:10, offset:1}} md= {{span:10, offset:1}} xs={{span:10, offset:1}}>
        <img src={props.src} className="mainSection_Img"></img>
      </Col>
    </Row>
    <Row>
      <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md= {{span:10, offset:1}} xs={{span:10, offset:1}}>
        <p className="image_description"> {props.description} </p>
      </Col>
    </Row>
    </div>
  );
}

export default ImageWithDescription;
