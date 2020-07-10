import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
// import './people_and_mask.css'
import {Container, Row, Col, Button} from 'react-bootstrap';
import image2 from '../../assets/image2.jpg'
import Pagination from '../../modules/Pagination';
import banner from '../../assets/placeholder.png';
import ProgramInfo from "../../programInfo"
import Second_Title from "../../modules/Second_Title"
import MainContents_First from "../../modules/MainContents_First"
import MainContents_Middle from "../../modules/MainContents_Middle"
import MainContents_Important from "../../modules/MainContents_Important"
import MobileShareButton_ch from "../../modules/mobileShareButton-ch";
import Slider from '../../modules/img_slider_final'

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
            subtitle="Behind the Masks"
            title="People and Mask"
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

          <MainContents_Middle style={{color:"#0C3866"}} contents=" What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.">
          </MainContents_Middle>


          <Row>
            <Col lg={{span:8, offset:2}} xs={{span:8, offset:2}}>
              <img src={image2} style={{maxWidth: "100%", height: "auto", width:"100%"}}/>
            </Col>
          </Row>

          <MainContents_Middle style={{color:"#0C3866"}} contents=" What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.">
          </MainContents_Middle>


          <Row>
            <Col lg={{span:8, offset:2}} xs={{span:8, offset:2}}>
              <img src={image2} style={{maxWidth: "100%", height: "auto", width:"100%"}}/>
            </Col>
          </Row>

          <MainContents_Middle style={{color:"#0C3866"}} contents=" What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.What is something that you can see when you look up, no matter
                wherever you are in the world? The sky is one constant no matter
                where you are and what time of day, it is there above the horizon.">
          </MainContents_Middle>

          <MobileShareButton_ch togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPeopleAndMask-ch&amp;src=sdkpreparse"></MobileShareButton_ch>

        </Container>
      </div>


    );
  }

}



export default PeopleAndMask_ch;
