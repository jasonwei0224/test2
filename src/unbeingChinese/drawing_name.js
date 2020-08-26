import React from 'react';
import ImgSlider from '../img_slider';
import { Container, Row, Col, Button} from "react-bootstrap";
import ProgramInfoThinLine from '../programInfoThinLine';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import Second_Title from "../modules/Second_Title"
import MainContents_First from "../modules/MainContents_First"
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_Important from "../modules/MainContents_Important"
import Button1 from "../modules/Button1";
import Footer from "../footer-temp";
import './drawing_name.css'

import Confucius from "../assets/孔子.jpg";
import SonGoku from '../assets/孫悟空.jpg';
import Mao from '../assets/毛澤東.jpg';
import SunWen from '../assets/孫文.jpg';
import Mulan from '../assets/花木蘭.jpg'
import LuXun from '../assets/魯迅.jpg'


function Dekstop_Artist() {

return (
  <div>
  <div className="sky_desktop_artists">
  <div className="drawing_space"></div>
  <Row>
    <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5, offset:1}} sm={{span:8, offset:1}} xs={{span:8, offset:1}} >
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={SonGoku}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" ><div className="DA_artName">MONEY KING</div></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3}} md={{span:5}} sm={{ span:3}} xs={{span:1}} >
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><img style={{width:"100%", height:"auto"}}src={LuXun}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}  className="DA_first_col" style={{textAlign:"center", fontWeight:"bold"}}><div className="DA_artName">LU XUN</div></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5 , offset:1}} sm={{ span:5}} xs={{span:1}}>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><img style={{width:"100%", height:"auto"}}src={Confucius}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" ><div className="DA_artName">CONFUCIUS</div> </Col></Row>
    </Col>
  </Row>

  <Row>
    <div className="sky_space"></div>
      {/*}  <Col xl={{span:3}} lg={{span:3}} md={{span:0}} sm={{ span:0}} xs={{span:0}} className="empty_col"></Col>*/}
    <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5}} sm={{ span:3}} xs={{span:1}}>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={SunWen}></img></Col></Row>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col"  ><div className="DA_artName">SUN YAT-SEN</div></Col></Row>
  </Col>
  <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5, offset:1 }} sm={{ span:3}} xs={{span:3}}>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={Mulan}></img></Col></Row>

  <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" ><div className="DA_artName">MULAN</div></Col></Row>

  </Col>
  <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5}} sm={{ span:3}} xs={{span:3}}>
    <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={Mao}></img></Col></Row>
  <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center", fontWeight:"bold"}} className="DA_first_col" ><div className="DA_artName">MAO ZE-DONG</div></Col></Row>
  </Col>
  </Row>
  <div className="drawing_space"></div>

  </div>
  <div className="sky_mobile_artists">
  <div className="drawing_space"></div>
    <Row>
      <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5, offset:1}} sm={{span:8, offset:1}} xs={{span:8, offset:1}}  className="sky_col_border2">
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={SonGoku}></img></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}} ><div className="DA_artName_mobile">MONEY KING</div></Col></Row>
      </Col>
      <Col xl={{span:2}} lg={{span:3}} md={{span:5}} sm={{ span:3}} xs={{span:1}} className="sky_col_border2">
        <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><img style={{width:"100%", height:"auto"}}src={LuXun}></img></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}}style={{textAlign:"center"}}><div className="DA_artName_mobile">LU XUN</div></Col></Row>
      </Col>
      <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5 , offset:1}} sm={{ span:5}} xs={{span:1}} className="sky_col_border2">
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}><img style={{width:"100%", height:"auto"}}src={Confucius}></img></Col></Row>
        <Row><Col  xl={{span:12}} lg={{span:12}} md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}}><div className="DA_artName_mobile">CONFUCIUS</div></Col></Row>
      </Col>
      <Col xl={{span:2, offset:3}} lg={{span:3, offset:1}} md={{span:5}} sm={{ span:3}} xs={{span:1}}>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={SunWen}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}}><div className="DA_artName_mobile">SUN YAT-SEN</div></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5, offset:1 }} sm={{ span:3}} xs={{span:3}}>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={Mulan}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} style={{textAlign:"center"}}> <div className="DA_artName_mobile">MULAN</div></Col></Row>
    </Col>
    <Col xl={{span:2}} lg={{span:3, offset:0}} md={{span:5}} sm={{ span:3}} xs={{span:3}}>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}} ><img style={{width:"100%", height:"auto"}}src={Mao}></img></Col></Row>
      <Row><Col  xl={{span:12}} lg={{span:12}}  md={{span:12}} sm={{Sspan:12}} xs={{span:12}}style={{textAlign:"center"}}><div className="DA_artName_mobile">MAO ZE-DONG</div></Col></Row>
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
