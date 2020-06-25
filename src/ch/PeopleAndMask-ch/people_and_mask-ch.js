import React, {Component} from 'react';
import mask1 from '../../assets/mask1.jpg';
import mask2 from '../../assets/mask2.jpg';
import mask3 from '../../assets/mask3.jpg';
import mask4 from '../../assets/mask4.jpg';
import mask5 from '../../assets/mask5.jpg';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import './people_and_mask-ch.css'
import { Button } from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import image2 from '../../assets/image2.jpg'
import Pagination from '../../modules/Pagination';
import banner from '../../assets/placeholder.png';
import ProgramInfo from "../../programInfo"

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
          <Row>
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
          </Row>

          <ProgramInfo subtitle="Behind the Masks" title="People and Mask" artistName="Lady Hao Hao"></ProgramInfo>
 
          <Row className="mainContents">
            <Col lg={{span:8, offset:2}} xs={{span:8, offset:2}}>
              <p className="contentsInParagraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
            <Col lg={{span:8, offset:2}} xs={{span:8, offset:2}}>
              <img src={image2} style={{maxWidth: "100%", height: "auto", width:"100%"}}/>

            </Col>

            <Col lg={{span:8, offset:2}} xs={{span:8, offset:2}}>
              <p className="contentsInParagraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
            <Col lg={{span:8, offset:2}} xs={{span:8, offset:2}}>
              <img src={image2} style={{maxWidth: "100%", height: "auto", width:"100%"}}/>
            </Col>
          </Row>
          <Row>


          </Row>



        </Container>
      </div>


    );
  }

}



export default PeopleAndMask_ch;
