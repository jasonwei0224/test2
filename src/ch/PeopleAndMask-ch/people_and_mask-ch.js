import React, {Component} from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize, bindKeyboard } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import {Container, Row, Col, Button} from 'react-bootstrap';

import ladyhaohao from '../../assets/Lady Hao Hao.jpg'
import walter from '../../assets/Walter.jpg'
import Pagination from '../../modules/Pagination';
import banner from '../../assets/placeholder.png';
import ProgramInfoTwoArtistCH from "../programInfoTwoArtist-ch"
import Second_Title_ch from "../../modules/Second_TitleCh"
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../../modules/MainContents_Important_with_border"
import MainContents_TwoArtistPic_CH from "../../modules/MainContents_TwoArtistPic_CH"
import Footer from '../../footer-temp';
import Slider from '../../PeopleAndMask/img_slider_final_people_and_mask'
import MobileShareButton from "../../modules/mobileShareButton";
import "./people_and_mask-ch.css";
import MainContents_Important_With_Border_one_bolder from "../../modules/MainContents_Important_with_border_one_bold"

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

var text = `聽不見的人，把驚嚇的人當成跳舞的人，把質疑的人當成看書的人\n看不到的人，把哭泣的人當成演戲的人，把沉默的人當成無知的人\n不開口的人，把恐慌的人當成路過的人，把怒吼的人當成唱歌的人\n\n人有自由，選擇讓耳朵塞住了， 眼睛遮住了，嘴巴堵住了\n\n但是，沒有自由可以也讓人，跳不了舞，看不了書，演不了戲，唱不了歌連裝無知、裝路過的選擇都沒了。
`

var artistText1 = `加拿大台裔藝術家，高中時期移民來到加拿大，但因為寄宿家庭的限制不能畫畫，而回到台灣繼續與藝術為伍。在台灣大學畢業後，再次回到加拿大，在多元的土地上吸收養分。

藝術一直都是她的精神糧食，唯一驕傲。創作對她來說，就是一連串的反思問答，在自我探索的過程中向自己提出一個個問題。近年來對「裝置藝術」的表現形式有著許多的好奇，在加拿大體驗著多元社區，學習著大師與偶像們的創作思維，累積她自己的作品。每次的創作發表，都看見藝術與人們之間的「呼應」、「討論」、「情緒」、「習慣」，探索和多元共舞。
`
var artistText2 = `Emily Carr藝術學院畢業，專攻動畫藝術，熱愛電影，擅長用影像說故事；繪畫是他抒發情緒和連結生活的橋樑，插畫作品奇幻遼闊，充滿想像力與生命力。兼具 2D創作、3D動畫特效與影像剪輯等多方能力，高于翔細膩的心思往往帶給大家意想不到的思考面向，或許會畫畫的人天生有著一本魔法書，他就是那個厲害的魔術師。
`
// var images = [crying, panic, terrified]

var artistTxt1 =`加拿大台裔藝術家，高中時期移民來到加拿大，但因為寄宿家庭的限制不能畫畫，而回到台灣繼續與藝術為伍。在台灣大學畢業後，再次回到加拿大，在多元的土地上吸收養分。

藝術一直都是她的精神糧食，唯一驕傲。創作對她來說，就是一連串的反思問答，在自我探索的過程中向自己提出一個個問題。近年來對「裝置藝術」的表現形式有著許多的好奇，在加拿大體驗著多元社區，學習著大師與偶像們的創作思維，累積她自己的作品。每次的創作發表，都看見藝術與人們之間的「呼應」、「討論」、「情緒」、「習慣」，探索和多元共舞。
`

var artistTxt2=`Emily Carr藝術學院畢業，專攻動畫藝術，熱愛電影，擅長用影像說故事；繪畫是他抒發情緒和連結生活的橋樑，插畫作品奇幻遼闊，充滿想像力與生命力。兼具 2D創作、3D動畫特效與影像剪輯等多方能力，高于翔細膩的心思往往帶給大家意想不到的思考面向，或許會畫畫的人天生有著一本魔法書，他就是那個厲害的魔術師。
`
var instruction1 = `滑鼠點擊左右兩邊的圓點，觀看不同創作。`
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
            <Slider></Slider>
          </Row>

          <ProgramInfoTwoArtistCH
            subtitle="口罩之說"
            title="傲慢與偏見"
            artistitle1="創作： "
            artistName1="Lady Hao Hao"
            artistitle2="3D  藝術： "
            artistName2="高于翔 / Yani-X"
            url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FPeopleAndMask-ch&amp;src=sdkpreparse"
            color="#D9C739">

          </ProgramInfoTwoArtistCH>


          <Second_Title_ch secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title_ch>


            <MainContents_Important_With_Border_one_bolder  style={{color:"#0C3866"}} bold="桌機 / 手機 / 平板: " contents={instruction1} bold2="" contents2=""
            ></MainContents_Important_With_Border_one_bolder>
          <MainContents_Middle_Adonis style={{color:"#0C3866"}} contents={text}>
          </MainContents_Middle_Adonis>




        <MainContents_TwoArtistPic_CH pic1={ladyhaohao} title1="Lady Hao Hao"contents1={artistText1} pic2={walter} title2="高于翔" contents2={artistText2}></MainContents_TwoArtistPic_CH>




              <div className="people_padding"></div>
          <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FPeopleAndMask-ch&amp;src=sdkpreparse"></MobileShareButton>

        </Container>
        <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
      </div>


    );
  }

}



export default PeopleAndMask;
