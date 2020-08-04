import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import {Container, Row, Col, Button} from 'react-bootstrap';
import crying from '../../assets/1280-600Crying.jpg';
import panic from '../../assets/1280-600Panic.jpg';
import terrified from '../../assets/1280-600Terrified.jpg'
import crying8 from '../../assets/1280-800Crying.jpg';
import panic8 from '../../assets/1280-800Panic.jpg';
import terrified8 from '../../assets/1280-800Terrified.jpg'
import ladyhaohao from '../../assets/Lady Hao Hao.jpg'
import walter from '../../assets/Walter.jpg'
import Pagination from '../../modules/Pagination';
import banner from '../../assets/placeholder.png';
import ProgramInfoTwoArtistCH from "../programInfoTwoArtist-ch"
import Second_Title from "../../modules/Second_Title"
import MainContents_Middle from "../../modules/MainContents_Middle"
import MainContents_Important_With_Border from "../../modules/MainContents_Important_with_border"
import MainContents_TwoArtistPic_CH from "../../modules/MainContents_TwoArtistPic_CH"
import MainContetns_WithPicture from "../../modules/MainContents_WithPicture"
import Footer from '../../footer-temp';
import Slider from './img_slider_final_people_and_mask'
import MobileShareButton from "../../modules/mobileShareButton";
import "./people_and_mask-ch.css";

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

var text = `聽不見的人，把驚嚇的人當成跳舞的人，\n把質疑的人當成看書的人\n\n
看不到的人，把哭泣的人當成演戲的人，\n把沉默的人當成無知的人\n\n
不開口的人，把恐慌的人當成路過的人，\n把怒吼的人當成唱歌的人\n\n
人有自由，選擇讓耳朵塞住了， 眼睛遮住了，嘴巴堵住了
但是沒有自由可以也讓人，跳不了舞，看不了書，演不了戲，唱不了歌
連裝無知、裝路過的選擇都沒了。
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

          <ProgramInfoTwoArtistCH
            subtitle="口罩之說"
            title="傲慢與偏見"
            artistitle1="創作： "
            artistName1="Lady Hao Hao"
            artistitle2="3D  藝術： "
            artistName2="高于翔"
            url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPeopleAndMask&amp;src=sdkpreparse"
            color="#D9C739">

          </ProgramInfoTwoArtistCH>


          <Second_Title secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>


          <MainContents_Important_With_Border style={{color:"#0C3866"}} contents="創作系列共六件，請將滑鼠移到黃色圓點左右滑動。 "></MainContents_Important_With_Border>

          <MainContents_Middle style={{color:"#0C3866"}} contents={text}>
          </MainContents_Middle>


            {/*<Second_Title secondTitle="藝術家簡介"></Second_Title>
      }  <MainContetns_WithPicture src={ladyhaohao} title="Lady Hao Hao" contents="Despite our geographical differences,
          we all look towards that same sky that looms over our heads,asdf
          Despite our geographical differences,
          we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
          together."></MainContetns_WithPicture>
        <MainContetns_WithPicture src={walter} title="Walter" contents="Despite our geographical differences,
          we all look towards that same sky that looms over our heads,asdf
          Despite our geographical differences,
          we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
          together."></MainContetns_WithPicture>*/}
        <MainContents_TwoArtistPic_CH pic1={ladyhaohao} title1="Lady Hao Hao"contents1="asdf
            我是藝術家" pic2={walter} title2="高宇翔" contents2="asdf
                我是藝術家二"></MainContents_TwoArtistPic_CH>



              <div className="people_padding"></div>
          <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPeopleAndMask&amp;src=sdkpreparse"></MobileShareButton>

        </Container>
        <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
      </div>


    );
  }

}



export default PeopleAndMask;
