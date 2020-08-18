import React, { Component } from 'react';
import './other_side_of_mask-ch.css';
import {OBJModel} from 'react-3d-viewer'
import image1 from '../../assets/image1.jpg';
import ladyhaohao from '../../assets/Lady Hao Hao.jpg'
import walter from '../../assets/Walter.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgramInfoTwoArtistCH from "../programInfoTwoArtist-ch"
import Second_Title_ch from "../../modules/Second_TitleCh"
import MainContents_Middle from "../../modules/MainContents_Middle"
import MainContents_Important_With_Border from "../../modules/MainContents_Important_with_border"
import MainContents_TwoArtistPic_CH from "../../modules/MainContents_TwoArtistPic_CH"
import MobileShareButton_ch from "../../modules/mobileShareButton-ch";
import ImageWithDescriptionCH from"../../modules/MainContent_ImageWithDescription_Ch";
import FooterCH from "../footer-ch";

var text = `口罩是這次疫情保護人類、對抗病毒的武器；但是當它翻轉180度後，竟然發現口罩內側最貼近我們、隔著自己與別人的那一面，色彩張狂，圖案詭譎，即使你想仔細觀看卻看不清楚！那貌似美麗的畫面是什麼？為什麼這樣美麗的創作，卻包裹在口罩裡面？這是我們希望每一位觀看者看見作品時，都能產生的好奇與疑問。\n
透過這樣的作品呈現，讓人不禁懷疑，到底那一面是「保護」？那一面是我們應該相信的「真實」？我們常常經由語言與行為，表達傷害與歧視；在這次的疫情裡，我們也看見了許多美麗包裝下的話術，說出來的卻是醜陋的意涵與不實的陳述。這次的疫情如此嚴重，究竟是因為病毒肆虐，還是我們選擇性無視那真實的訊息？\n
「我在創作這幅畫作時，非常清楚的想要呈現一個美麗的畫面，而這個美麗的畫面卻是人們所害怕的事實。我足足花了兩個星期思考：『它』是什麼樣子？人們何時成為了病毒滋生的溫床，習慣它並與它共存？！\n
「內心信仰的藝術品，又該如何說服自己，它很美卻又是病毒。」－ 藝術家Lady Hao Hao
`
var artistTxt1 =`加拿大台裔藝術家，高中時期移民來到加拿大，但因為寄宿家庭的限制不能畫畫，而回到台灣繼續與藝術為伍。在台灣大學畢業後，再次回到加拿大，在多元的土地上吸收養分。

藝術一直都是她的精神糧食，唯一驕傲。創作對她來說，就是一連串的反思問答，在自我探索的過程中向自己提出一個個問題。近年來對「裝置藝術」的表現形式有著許多的好奇，在加拿大體驗著多元社區，學習著大師與偶像們的創作思維，累積她自己的作品。每次的創作發表，都看見藝術與人們之間的「呼應」、「討論」、「情緒」、「習慣」，探索和多元共舞。
`

var artistTxt2=`Emily Carr藝術學院畢業，專攻動畫藝術，熱愛電影，擅長用影像說故事；繪畫是他抒發情緒和連結生活的橋樑，插畫作品奇幻遼闊，充滿想像力與生命力。兼具 2D創作、3D動畫特效與影像剪輯等多方能力，高于翔細膩的心思往往帶給大家意想不到的思考面向，或許會畫畫的人天生有著一本魔法書，他就是那個厲害的魔術師。
`
class OtherSideOfMask_ch extends Component {
    render() {
        let audio = new Audio("/coughing.mp3")
        const start = () => {
          console.log("clicked")
          audio.play()
        }

        return (
          <div>
            <Container fluid>
              <Row>
                <Col xl={{span:6, offset:0}} lg={{span:12, offset:0}} md= {{span:12, offset:0}} xs={{span:12, offset:0}}className="model3D-col" >
                  <div>
                    <OBJModel src="./Bee.obj" textPath="" width="1800" height="600"
                      position={{x:0,y:-10,z:0}} style={{backgroundColor:"black"}}/>
                  </div>
                </Col>
                {/*}<Col className="middle_text_other" xl={{span:0, offset:0}} lg={{span:11, offset:1}} md= {{span:10, offset:1}} xs={{span:10, offset:1}}>
                  <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>          </MainContents_Middle_Adonis>
                </Col>*/}
                <Col xl={{span:6, offset:0}} lg={{span:12, offset:0}} md= {{span:12, offset:0}} xs={{span:12, offset:0}} className="model3D-col" >
                <div>
                  <OBJModel src="./Bee.obj" textPath="" width="1800" height="600"
                      position={{x:0,y:-10,z:0}} style={{backgroundColor:"black"}}/>
                  </div>
                </Col>
              </Row>
            {/*<Row className="other-side-hint-ch"><p>Click and drag or scroll to look around</p></Row>*/}

            <ProgramInfoTwoArtistCH
            subtitle="口罩之說"
            title="一罩之隔"
            artistitle1="創作： "
            artistName1="Lady Hao Hao"
            artistitle2="3D  藝術： "
            artistName2="高于翔"
            url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask-ch&amp;src=sdkpreparse"
            color="#D9C739">
          </ProgramInfoTwoArtistCH>

          <Second_Title_ch secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title_ch>
          <MainContents_Important_With_Border style={{color:"#0C3866"}} contents="asdfasdfasdfasdfasdfS"></MainContents_Important_With_Border>
          <MainContents_Middle style={{color:"#0C3866"}} contents={text}></MainContents_Middle>


          <MainContents_TwoArtistPic_CH pic1={ladyhaohao} title1="Lady Hao Hao"contents1={artistTxt1} pic2={walter} title2="高宇翔" contents2={artistTxt2}></MainContents_TwoArtistPic_CH>
          <div className="people_padding"></div>

          <MobileShareButton_ch togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask-ch&amp;src=sdkpreparse"></MobileShareButton_ch>
        </Container>
          <FooterCH/>
        </div>
        );
    }
}

export default OtherSideOfMask_ch;
