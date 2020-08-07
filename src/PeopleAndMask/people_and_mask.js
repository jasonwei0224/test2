import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import {Container, Row, Col, Button} from 'react-bootstrap';
import crying from '../assets/1280-600Crying.jpg';
import panic from '../assets/1280-600Panic.jpg';
import terrified from '../assets/1280-600Terrified.jpg'
import crying8 from '../assets/1280-800Crying.jpg';
import panic8 from '../assets/1280-800Panic.jpg';
import terrified8 from '../assets/1280-800Terrified.jpg'
import ladyhaohao from '../assets/Lady Hao Hao.jpg'
import walter from '../assets/Walter.jpg'
import Pagination from '../modules/Pagination';
import banner from '../assets/placeholder.png';
import ProgramInfoTwoArtist from "../programInfoTwoArtist"
import Second_Title from "../modules/Second_Title"
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../modules/MainContents_Important_with_border"
import MainContents_TwoArtistPic from "../modules/MainContents_TwoArtistPic"
import Footer from '../footer-temp';
import Slider from './img_slider_final_people_and_mask'
import MobileShareButton from "../modules/mobileShareButton";

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

var text = `We pretend hearing nothing - letting people be terrified and stay in doubt.\n
We pretend seeing nothing - Ignoring people who cry or get silenced.\n
We choose saying nothing - despite seeing people who panic or scream.\n
People are free to hear nothing, see nothing and say nothing.\n
But, when the freedom is lost, people may have to live with a life feeling terrified, doubtful, silenced or a life involving constantly screaming, crying or panicking.
`
var images = [crying, panic, terrified]

class PeopleAndMask extends Component {
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
          <div style={{borderTop: "1px solid #D9C739"}}></div>
          <Row>
            <Slider images={images}></Slider>
          </Row>

          <ProgramInfoTwoArtist
            subtitle="Behind the Masks"
            title="PEOPLE & MASK"
            artistitle1="Sketch Artist: "
            artistName1="Lady Hao Hao"
            artistitle2="3D Artist: "
            artistName2="Walter Kao"
            url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPeopleAndMask&amp;src=sdkpreparse"
            color="#D9C739">

          </ProgramInfoTwoArtist>

          <Second_Title secondTitle="HOW TO INTERACT WITH THIS WORK" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>



          <MainContents_Important_With_Border style={{color:"#0C3866"}} contents=" Click Left and right to navigate the art works "></MainContents_Important_With_Border>
          <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
          </MainContents_Middle_Adonis>

        <MainContents_TwoArtistPic pic1={ladyhaohao} title1="Lady Hao Hao"contents1="asdf
            Despite our geographical differences,
            we all look towards that same sky that looms over our heads,asdf
            Despite our geographical differences,
            we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
            together." pic2={walter} title2="Walter Kao" contents2="asdf
                Despite our geographical differences,
                we all look towards that same sky that looms over our heads,asdf
                Despite our geographical differences,
                we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
                together."></MainContents_TwoArtistPic>



              <div className="people_padding"></div>
          <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPeopleAndMask&amp;src=sdkpreparse"></MobileShareButton>

        </Container>
        <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
      </div>


    );
  }

}



export default PeopleAndMask;
