import React, {useState} from 'react';
import animate_sample_mao from '../assets/animate_sample_mao.gif';
import sample_mao from '../assets/sample_mao.png';
import { Container, Row, Col } from "react-bootstrap";
import ProgramInfo from '../programInfo';
import Second_Title from "../modules/Second_Title"
import MainContents_First from "../modules/MainContents_First"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import MainContents_Img from "../modules/MainContents_img"
import Footer from "../footer-temp";
import MobileShareButton from "../modules/mobileShareButton";
import './unbeingChinese.css';
import HoverImage from "react-hover-image"
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../modules/MainContents_Important_with_border"
import MainContents_OneArtist from "../modules/MainContents_OneArtist"
import ladyhaohao from '../assets/Lady Hao Hao.jpg'

function UnbeingChinese() {
  var text= `He was born in China and had to make a decision to choose a new identity to become “Canadian”.  While he wants other people to see him like a Canadian, his “Chinese” identity returned right after his arrival in Canada.  During the pandemic, the racial tension between Chinese and the rest has become a focal point and governments around the world have been asking China to be accountable for the pandemic; being Chinese has been challenging.  Ironically, some of the most influential people in Chinese history have all led movements of Un-being Chinese and many Chinese today have also been challenging the ever-sacred Confucianism.  Exactly who is playing the game?  The paradox of evolving or revolving identity isn’t a new phenomenon in Canada, just ask Japanese Canadians or Vietnamese Canadians. Political reasons aside, what is your artistic interpretation?`
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
              <Col><HoverImage src={sample_mao}  hoverSrc={animate_sample_mao} style={{width:'100%', height:"auto"}}></HoverImage></Col>
              <Col><HoverImage src={sample_mao}  hoverSrc={animate_sample_mao} style={{width:'100%', height:"auto"}}></HoverImage></Col>
              <Col><HoverImage src={sample_mao}  hoverSrc={animate_sample_mao} style={{width:'100%', height:"auto"}}></HoverImage></Col>
            </Row>
            <Row>
              <Col><HoverImage src={sample_mao}  hoverSrc={animate_sample_mao} style={{width:'100%', height:"auto"}}></HoverImage></Col>
              <Col><HoverImage src={sample_mao}  hoverSrc={animate_sample_mao} style={{width:'100%', height:"auto"}}></HoverImage></Col>
              <Col><HoverImage src={sample_mao}  hoverSrc={animate_sample_mao} style={{width:'100%', height:"auto"}}></HoverImage></Col>
            </Row>

        <ProgramInfo
          subtitle="I am different, just like you"
          title='「Un」being Chinese'
          artistName="Tong Zhou"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPaulsApple&amp;src=sdkpreparse"
          color="#D9C739"
        ></ProgramInfo>

        <Second_Title secondTitle="HOW TO INTERACT WITH THIS WORK" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>



        <MainContents_Important_With_Border style={{color:"#0C3866"}} contents=" Click Left and right to navigate the art works "></MainContents_Important_With_Border>
        <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
        </MainContents_Middle_Adonis>

        <MainContents_OneArtist src={ladyhaohao} title="Tong Zhou" contents="asdf
            Despite our geographical differences,
            we all look towards that same sky that looms over our heads,asdf
            Despite our geographical differences,
            we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
            together."></MainContents_OneArtist>
          <div className="people_padding"></div>
        <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPaulsApple&amp;src=sdkpreparse" ></MobileShareButton>
      </Container>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default UnbeingChinese;
