import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Col, Button} from 'react-bootstrap'
import player from 'react-video-js-player'
import otherSidePic1 from '../assets/Final_Other_Side_Mask_Blue.jpg'
import otherSidePic2 from '../assets/Final_Other_Side_Mask_Yellow.jpg'
import ReactPlayer from "react-player";
import video1 from '../assets/Mask1.mp4';
import video2 from '../assets/Mask2.mp4';
import './maskInfo.css'

class maskInfo extends Component {
  render() {
    return(
      <div>
    <Container fluid>
    <div className="desktop_mask_info">
      <Row>
        <Col xl={{span:4, offset:2}} lg={{span:4, offset:2}} md= {{span:12, offset:0}} xs={{span:12, offset:0}}><img src={otherSidePic1} style={{width:"100%", height:"auto"}}></img></Col>
        <Col xl={{span:4, offset:0}} lg={{span:4, offset:0}} md= {{span:12, offset:0}} xs={{span:12, offset:0}}><img src={otherSidePic2} style={{width:"100%", height:"auto"}}></img></Col>
      </Row>
      <Row>
        <Col xl={{span:4, offset:2}} lg={{span:4, offset:2}} md= {{span:12, offset:0}} xs={{span:12, offset:0}} className="mask_info_col" style={{textAlign:"center"}}><Button bsPrefix="otherside_artwork_name" className="otherside_artwork_name" >VIRUS OF<br/>UNINTEED AGRESSION</Button></Col>
        <Col xl={{span:4, offset:0}} lg={{span:4, offset:0}} md= {{span:12, offset:0}} xs={{span:12, offset:0}} style={{textAlign:"center"}}><Button bsPrefix="otherside_artwork_name2" className="otherside_artwork_name2">VIRUS OF<br/>SUBCONSCIOUS SUSPICION</Button></Col>
      </Row>
      <Row>
        <Col xl={{span:4, offset:2}} lg={{span:4, offset:2}} md= {{span:12, offset:0}} xs={{span:12, offset:0}}>
        <ReactPlayer
                    controls={false}
                    url={video1}
                    width='100%'
                    height='100%'
                    muted={true}
                    playing={true}
                    loop={true}
                    controls={false}
                /></Col>
        <Col xl={{span:4, offset:0}} lg={{span:4, offset:0}} md= {{span:12, offset:0}} xs={{span:12, offset:0}}>
        <ReactPlayer
                    controls={false}
                    url={video2}
                    width='100%'
                    height='100%'
                    volume="0"
                    muted={true}
                    playing={true}
                    loop={true}
                /></Col>

      </Row>
      </div>

    <div className="mobile_mask_info">
    <Row>
      <Col xl={{span:4, offset:2}} lg={{span:4, offset:2}} md= {{span:10, offset:1}} xs={{span:10, offset:1}}><img src={otherSidePic1} style={{width:"100%", height:"auto"}}></img></Col>
      <Col xl={{span:4, offset:2}} lg={{span:4, offset:2}} md= {{span:12, offset:0}} xs={{span:12, offset:0}} className="mask_info_col" style={{textAlign:"center"}}><Button bsPrefix="otherside_artwork_name_mobile" className="otherside_artwork_name_mobile" >VIRUS OF UNINTEED AGRESSION</Button></Col>
        <Col xl={{span:4, offset:2}} lg={{span:4, offset:2}} md= {{span:10, offset:1}} xs={{span:10, offset:1}}>
        <ReactPlayer
                    controls={true}
                    url={video1}
                    width='100%'
                    height='100%'
                    muted={true}
                    playing={true}
                    loop={true}
                    controls={true}
                />
                </Col>

      </Row>
      <div className="maskInfo_mobile_spacing"> </div>
      <Row>
        <Col xl={{span:4, offset:2}} lg={{span:4, offset:2}} md= {{span:10, offset:1}} xs={{span:10, offset:1}}><img src={otherSidePic2} style={{width:"100%", height:"auto"}}></img></Col>
        <Col xl={{span:4, offset:2}} lg={{span:4, offset:2}} md= {{span:12, offset:0}} xs={{span:12, offset:0}} className="mask_info_col" style={{textAlign:"center"}}><Button bsPrefix="otherside_artwork_name2_mobile" className="otherside_artwork_name2_mobile" >VIRUS OF SUBCONSCIOUS SUSPICION</Button></Col>
          <Col xl={{span:4, offset:2}} lg={{span:4, offset:2}} md= {{span:10, offset:1}} xs={{span:10, offset:1}}>
          <ReactPlayer
                      controls={true}
                      url={video2}
                      width='100%'
                      height='100%'
                      muted={true}
                      playing={true}
                      loop={true}
                      controls={true}
                  />
                  </Col>

        </Row>
        <div className="maskInfo_mobile_spacing"> </div>
    </div>
    </Container>
    </div>
  )
  }
}
export default maskInfo;
