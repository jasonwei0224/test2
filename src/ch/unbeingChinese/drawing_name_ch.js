import React from 'react';

import { Container, Row, Col, Button} from "react-bootstrap";

// import './drawing_name.css'

import Confucius from "../../assets/孔子.jpg";
import SonGoku from '../../assets/孫悟空.jpg';
import Mao from '../../assets/毛澤東.jpg';
import SunWen from '../../assets/孫文.jpg';
import Mulan from '../../assets/花木蘭.jpg'
import LuXun from '../../assets/魯迅.jpg'


function Dekstop_Artist() {

return (
  <div>
  <div className="sky_desktop_artists">
  <div className="drawing_space"></div>
  <Row>
    <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5, offset:1}} sm={{span:8, offset:1}} xs={{span:8, offset:1}} >
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={SonGoku}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" ><div className="DA_artName">孫悟空</div></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3}} md={{span:5}} sm={{ span:3}} xs={{span:1}} >
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><img style={{width:"100%", height:"auto"}}src={LuXun}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}  className="DA_first_col" style={{textAlign:"center", fontWeight:"bold"}}><div className="DA_artName">魯迅</div></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5 , offset:1}} sm={{ span:5}} xs={{span:1}}>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><img style={{width:"100%", height:"auto"}}src={Confucius}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" ><div className="DA_artName">孔子</div> </Col></Row>
    </Col>
  </Row>

  <Row>
    <div className="sky_space"></div>
      {/*}  <Col xl={{span:3}} lg={{span:3}} md={{span:0}} sm={{ span:0}} xs={{span:0}} className="empty_col"></Col>*/}
    <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5}} sm={{ span:3}} xs={{span:1}}>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={SunWen}></img></Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col"  ><div className="DA_artName">孫文</div></Col></Row>
  </Col>
  <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5, offset:1 }} sm={{ span:3}} xs={{span:3}}>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={Mulan}></img></Col></Row>

  <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" ><div className="DA_artName">花木蘭</div></Col></Row>

  </Col>
  <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5}} sm={{ span:3}} xs={{span:3}}>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={Mao}></img></Col></Row>
  <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" ><div className="DA_artName">毛澤東</div></Col></Row>
  </Col>
  </Row>
  <div className="drawing_space"></div>

  </div>
  <div className="sky_mobile_artists">
  <div className="drawing_space"></div>
    <Row>
      <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5, offset:1}} sm={{span:8, offset:1}} xs={{span:8, offset:1}}  className="sky_col_border2">
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={SonGoku}></img></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}} ><div className="DA_artName_mobile">孫悟空</div></Col></Row>
      </Col>
      <Col xl={{span:2}} lg={{span:3}} md={{span:5}} sm={{ span:3}} xs={{span:1}} className="sky_col_border2">
        <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><img style={{width:"100%", height:"auto"}}src={LuXun}></img></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}}style={{textAlign:"center"}}><div className="DA_artName_mobile">魯迅</div></Col></Row>
      </Col>
      <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5 , offset:1}} sm={{ span:5}} xs={{span:1}} className="sky_col_border2">
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><img style={{width:"100%", height:"auto"}}src={Confucius}></img></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}}><div className="DA_artName_mobile">孔子</div></Col></Row>
      </Col>
      <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5}} sm={{ span:3}} xs={{span:1}}>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={SunWen}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}}><div className="DA_artName_mobile">孫文</div></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5, offset:1 }} sm={{ span:3}} xs={{span:3}}>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={Mulan}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}}> <div className="DA_artName_mobile">花木蘭</div></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5}} sm={{ span:3}} xs={{span:3}}>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={Mao}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}}><div className="DA_artName_mobile">毛澤東</div></Col></Row>
    </Col>
    </Row>
      <div className="sky_space"></div>
    <Row>
    </Row>
    </div>
    </div>

);
}

export default Dekstop_Artist;
