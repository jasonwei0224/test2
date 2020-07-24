import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import './people_and_mask-ch.css'
import {Container, Row, Col, Button} from 'react-bootstrap';
import image2 from '../../assets/image2.jpg'
import Pagination from '../../modules/Pagination';
import banner from '../../assets/placeholder.png';
import ProgramInfo from "../../programInfo"
import Second_Title from "../../modules/Second_Title"
import MainContents_First from "../../modules/MainContents_First"
import MainContents_Middle_ch from "../../modules/MainContents_Middle_ch"
import MainContents_Important from "../../modules/MainContents_Important"
import MobileShareButton_ch from "../../modules/mobileShareButton-ch";
import Slider from '../../modules/img_slider_final';
import FooterCH from "../footer-ch";

const styles = {
  root: {
    position: 'relative',
  },
  slide: {
    padding: 0,
    minHeight: 100,
    color: '#fff',
  },

};

const styles2 = {
  slide: {
    width:'100%',
    height:'auto',
    color: '#fff',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
  },
};

var text = `聽不見的人，把驚嚇的人當成跳舞的人，把質疑的人當成看書的人\n看不到的人，把哭泣的人當成演戲的人，把沉默的人當成無知的人\n不開口的人，把恐慌的人當成路過的人，把怒吼的人當成唱歌的人 \n人有自由，選擇讓耳朵塞住了， 眼睛遮住了，嘴巴堵住了 \n但是沒有自由可以也讓人，跳不了舞，看不了書，演不了戲，唱不了歌\n連裝無知、裝路過的選擇都沒了。`

class PeopleAndMask_ch extends Component {
  state = {
    index: 0,
  };
  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };


  render() {

    const { index } = this.state;

    return (
      <div>
        <Container fluid>
          {/*}<Row>
            <Col>
              <div style={styles2.root}>
                <SwipeableViews index={index} enableMouseEvents onChangeIndex={this.handleChangeIndex}>
                  <div style={Object.assign({}, styles.slide), {overflow:'hidden'}}><img src={banner}></img></div>
                  <div style={Object.assign({}, styles.slide), {overflow:'hidden'}}><img src={banner}></img></div>
                  <div style={Object.assign({}, styles.slide), {overflow:'hidden'}}><img src={banner}></img></div>
                  <div style={Object.assign({}, styles.slide), {overflow:'hidden'}}><img src={banner}></img></div>
                  <div style={Object.assign({}, styles.slide), {overflow:'hidden'}}><img src={banner}></img></div>
                </SwipeableViews>
                <Pagination dots={5} index={index} onChangeIndex={this.handleChangeIndex} />
              </div>
            </Col>
          </Row>*/}
          <Row>
            <Slider></Slider>
          </Row>
          <ProgramInfo
            subtitle="口罩之說"
            title="傲慢與偏見"
            artistName="Lady Hao Hao"
            url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPeopleAndMask-ch&amp;src=sdkpreparse"
            color="#D9C739">

          </ProgramInfo>

          <Second_Title secondTitle="About This Work:" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>


          <MainContents_Important style={{color:"#0C3866"}} contents=" What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matt
                where you are and what time of day, it is there above the horizon.">

          </MainContents_Important>

          <MainContents_Middle_ch style={{color:"#0C3866", whiteSpace: "pre-line"}} className="people_and_mask_middele" contents={text}>
          </MainContents_Middle_ch>


          <Row>
            <Col lg={{span:8, offset:2}} xs={{span:8, offset:2}}>
              <img src={image2} style={{maxWidth: "100%", height: "auto", width:"100%"}}/>
            </Col>
          </Row>

          <MobileShareButton_ch togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPeopleAndMask-ch&amp;src=sdkpreparse"></MobileShareButton_ch>

        </Container>
        <FooterCH></FooterCH>
      </div>


    );
  }

}



export default PeopleAndMask_ch;
