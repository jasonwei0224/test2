import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './MainContents.css'

const MainContents_Img = (props) => {
  return (
    <div>
    <Row>
      <Col xl={{span:4, offset:2}} lg={{span:4, offset:1}} md= {{span:10, offset:1}} xs={{span:10, offset:1}}>
        <img src={props.src} className="mainSection_two_img"></img>
      </Col>
      <Col  xl={{span:4, offset:0}} lg={{span:4, offset:1}} md= {{span:10, offset:1}} xs={{span:10, offset:1}}>
        <img src={props.src} className="mainSection_two_img"></img>
      </Col>
    </Row>
    </div>
  );
}

export default MainContents_Img;
