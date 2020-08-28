import React, {useState} from 'react';
import animate_mao from '../../assets/mao.gif';
import mao from '../../assets/mao.png';
import animate_Laozo from '../../assets/Laozo.gif';
import Laozo from '../../assets/Laozo.png';
import animate_Luxun from '../../assets/Luxun.gif';
import Luxun from '../../assets/Luxun.png';
import animate_monkey from '../../assets/monkey.gif';
import monkey from '../../assets/monkey.png';
import animate_mulan from '../../assets/mulan.gif';
import mulan from '../../assets/mulan.png';
import animate_sun from '../../assets/sun.gif';
import sun from '../../assets/sun.png';
import { Container, Row, Col } from "react-bootstrap";
import ProgramInfo from '../programInfo-ch';
import Second_Title from "../../modules/Second_Title"
import MainContents_First from "../../modules/MainContents_First"
import MainContents_Middle from "../../modules/MainContents_Middle"
import MainContents_Important from "../../modules/MainContents_Important"
import MainContents_Img from "../../modules/MainContents_img"
import FooterCH from '../footer-ch';
import MobileShareButton from "../../modules/mobileShareButton-ch";
import './unbeingChinese.css';
import HoverImage from "react-hover-image"
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../../modules/MainContents_Important_with_border"
import MainContents_OneArtistCH from "../../modules/MainContents_OneArtistCH"
import tong from '../../assets/Tong.jpg'
import MainContents_Important_With_Border_two_bolder_ch from "../../modules/MainContents_Important_with_border_two_bold_ch"
import Drawing_Names from "./drawing_name_ch"

function UnbeingChinese() {
  var text= `一個出生在中國，久居加拿大的藝術家， 經過一番掙扎之後，最終選擇了加入了加拿大國籍 。正當他以為別人會以「加拿大人」身分看待他時，他的「中國人」身分還是會被先入為主。疫情發生了，許多人開始歧視「中國人」的身分，許多政府開始針對「中國」，這個身分又再度產生困擾。然而有「趣」的是，今天所謂的中國化是否也曾經在不同的世代被挑戰了呢？在加拿大，不同族裔的人都曾經為了文化認同而困擾，日裔與越裔的加拿大人都曾有過這樣的經歷。讓我們試著先不要用政治語言來解讀，看看藝術是否可以帶給我們一些有趣的角度？`
  var artistTxt =`周童以作品「勇敢的台灣」，於2019年台灣文化節嶄露頭角，這次他將以全新創作「趣中國化」，強勢回歸今年的台灣文化節，探討現今關於民族認同和刻版印象的社會風氣。他將與我們分享其創作的起源，以及身為華裔加拿大人所面臨的身份認同的掙扎。當我們打開心胸，是否就能夠攜手消除人與人之間的歧視?

現今居住於多倫多的加拿大華裔藝術家周童，其作品的核心主要是向定義自我認同的框架提出質疑。作品「勇敢的台灣」，向一群推動台灣成為第一個同性婚姻合法化的亞洲國家的重要人物們致敬。今年，他將展出新作品 – 「趣中國化」，挑戰華人自我對「中國人」的詮釋，進而探討各族裔或世界對於「華人」的歧視議題。
`

  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <Container fluid style={{padding:"0"}}>
            {/*}{isShown ?
              <img
                className="image_active"
                src={animate_sample_mao}></img> :
              <img
                className="image_static"
                src={sample_mao}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}></img>
            }*/}
            <Row>
              <Col lx={{span:4, offset:0}} lg={{span:4, offset:0}} md={{span:6, offset:0}} sm={{span:6, offset:0}}  xs={{span:6, offset:0}}><HoverImage src={monkey}  hoverSrc={animate_monkey} style={{width:'100%', height:"auto"}}></HoverImage></Col>
              <Col lx={{span:4, offset:0}} lg={{span:4, offset:0}} md={{span:6, offset:0}} sm={{span:6, offset:0 }}  xs={{span:6, offset:0}}><HoverImage src={Luxun}  hoverSrc={animate_Luxun} style={{width:'100%', height:"auto"}}></HoverImage></Col>
              <Col lx={{span:4, offset:0}} lg={{span:4, offset:0}} md={{span:6, offset:0}} sm={{span:6, offset:0}}  xs={{span:6, offset:0}}><HoverImage src={Laozo}  hoverSrc={animate_Laozo} style={{width:'100%', height:"auto"}}></HoverImage></Col>
                <Col lx={{span:4, offset:0}} lg={{span:4, offset:0}} md={{span:6, offset:0}} sm={{span:6, offset:1}}  xs={{span:6, offset:0}}><HoverImage src={sun}  hoverSrc={animate_sun} style={{width:'100%', height:"auto"}}></HoverImage></Col>
                <Col lx={{span:4, offset:0}} lg={{span:4, offset:0}} md={{span:6, offset:0}} sm={{span:6, offset:0}}  xs={{span:6, offset:0}}><HoverImage src={mulan}  hoverSrc={animate_mulan} style={{width:'100%', height:"auto"}}></HoverImage></Col>
                <Col lx={{span:4, offset:0}} lg={{span:4, offset:0}} md={{span:6, offset:0}} sm={{span:6, offset:0}}  xs={{span:6, offset:0}}><HoverImage src={mao}  hoverSrc={animate_mao} style={{width:'100%', height:"auto"}}></HoverImage></Col>

          </Row>
          {/*}  <Row>
              <Col lx={{span:4, offset:0}} lg={{span:4, offset:0}} md={{span:6, offset:0}} sm={{span:6, offset:1}}  xs={{span:6, offset:0}}><HoverImage src={sun}  hoverSrc={animate_sun} style={{width:'100%', height:"auto"}}></HoverImage></Col>
              <Col lx={{span:4, offset:0}} lg={{span:4, offset:0}} md={{span:6, offset:0}} sm={{span:6, offset:0}}  xs={{span:6, offset:0}}><HoverImage src={mulan}  hoverSrc={animate_mulan} style={{width:'100%', height:"auto"}}></HoverImage></Col>
              <Col lx={{span:4, offset:0}} lg={{span:4, offset:0}} md={{span:6, offset:0}} sm={{span:6, offset:0}}  xs={{span:6, offset:0}}><HoverImage src={mao}  hoverSrc={animate_mao} style={{width:'100%', height:"auto"}}></HoverImage></Col>
            </Row>*/}

        <ProgramInfo
          subtitle="我跟你的相同，就是我們都不同"
          title='「趣」中國化'
          artistName="藝術家：周童"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FUnbeingChinese-ch&amp;src=sdkpreparse"
          color="#D9C739"
        ></ProgramInfo>

      <Second_Title secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>



        <MainContents_Important_With_Border_two_bolder_ch  style={{color:"#0C3866"}} bold="桌機: " contents="請將滑鼠移至每一張圖片的上方，即可發現藝術家的創意"
        bold2="手機 / 平板: " contents2="請將手指點擊每一張圖片，即可發現藝術家的創意"></MainContents_Important_With_Border_two_bolder_ch>
        <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
        </MainContents_Middle_Adonis>
        <Drawing_Names></Drawing_Names>

        <MainContents_OneArtistCH src={tong} title="周童" contents={artistTxt}></MainContents_OneArtistCH>
          <div className="people_padding"></div>
        <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FUnbeingChinese-ch&amp;src=sdkpreparse"  ></MobileShareButton>
      </Container>
      <FooterCH></FooterCH>
    </div>
  );
}

export default UnbeingChinese;
