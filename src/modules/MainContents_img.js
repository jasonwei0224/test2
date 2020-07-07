import React from 'react';
import { Col } from 'react-bootstrap';
import './MainContents.css'

const MainContents_Img = (props) => {
  return (
    <div>
      <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md= {{span:10, offset:1}} xs={{span:10, offset:1}}>
        <img src={props.src} className="mainSection_Img"></img>
      </Col>
    </div>
  );
}

export default MainContents_Img;
