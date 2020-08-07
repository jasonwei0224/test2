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
import ProgramInfo from '../../programInfo';
import Second_Title from "../../modules/Second_Title"
import MainContents_First from "../../modules/MainContents_First"
import MainContents_Middle from "../../modules/MainContents_Middle"
import MainContents_Important from "../../modules/MainContents_Important"
import MainContents_Img from "../../modules/MainContents_img"
import FooterCH from '../footer-ch';
import MobileShareButton from "../../modules/mobileShareButton";
import './unbeingChinese.css';
import HoverImage from "react-hover-image"
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../../modules/MainContents_Important_with_border"
import MainContents_OneArtistCH from "../../modules/MainContents_OneArtistCH"
import tong from '../../assets/Tong.jpg'

function UnbeingChinese() {
  var text= `一個出生在中國的藝術家，掙扎的選擇了放棄「中國人」的身分，到了加拿大。就當他以為別人會以「加拿大人」看待他時，他的「中國人」身分就重新回到他身上。疫情發生了，許多人開始歧視「中國人」的身分，許多政府開始針對「中國」，這個身分又再度產生困擾。然而有「趣」的是，今天所謂的中國化是否也曾經在不同的世代被挑戰了呢？在加拿大，不同族裔的人都曾經為了文化認同而困擾，日裔與越裔的加拿大人都曾有過這樣的經歷。讓我們試著先不要用政治語言來解讀，看看藝術是否可以帶給我們一些有趣的角度？`
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
          artistName="創作：周童"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPaulsApple&amp;src=sdkpreparse"
          color="#D9C739"
        ></ProgramInfo>

      <Second_Title secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>



        <MainContents_Important_With_Border style={{color:"#0C3866"}} contents=" Click Left and right to navigate the art works "></MainContents_Important_With_Border>
        <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
        </MainContents_Middle_Adonis>

        <MainContents_OneArtistCH src={tong} title="周童" contents="asdf
            Despite our geographical differences,
            we all look towards that same sky that looms over our heads,asdf
            Despite our geographical differences,
            we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
            together."></MainContents_OneArtistCH>
          <div className="people_padding"></div>
        <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPaulsApple&amp;src=sdkpreparse" ></MobileShareButton>
      </Container>
      <FooterCH></FooterCH>
    </div>
  );
}

export default UnbeingChinese;
