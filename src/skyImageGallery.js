import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './skyImageGallery.css'


const SkyImageGallery = (props) => {
  return (
    <Row className="SIM-container">
      <Col xl={{span:5}} lg={{span:5}} sm={{span:5}}xs={{span:5}} className="SIM-blue">
        <p className="SIM-artist" style={{marginTop:"auto"}}>{props.artist1}</p>
        <p className="SIM-artist">{props.artist2}</p>
      </Col>
      <Col xl={{span:3}} lg={{span:3}} sm={{span:3}}xs={{span:3}}>
        <img src={props.image1} alt="placeholder" style={{width:"inherit"}}></img>
      </Col>
      <Col xl={{span:3}} lg={{span:3}} sm={{span:3}}xs={{span:3}} style={{paddingLeft:"0"}}>
        <img src={props.image2} alt="placeholder" style={{width:"inherit"}}></img>
      </Col>
      <Col xl={{span:1}} lg={{span:1}} sm={{span:1}}xs={{span:1}} className="SIM-red">
      </Col>
    </Row>
  );
}

export default SkyImageGallery;
