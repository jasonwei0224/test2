import React, { Component } from 'react';
import './other_side_of_mask-ch.css';
import ProgramInfo_ch from "../programInfo-ch"
import {OBJModel, GLTFModel} from 'react-3d-viewer'
import {ModelViewer} from 'react-3d-model-viewer';
import image1 from '../../assets/image1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button} from 'react-bootstrap';
import Second_Title_ch from '../../modules/Second_TitleCh';
import MainContents_Important_ch from "../../modules/MainContents_Important_ch";
import MainContents_Middle_ch from "../../modules/MainContents_Middle_ch";
import Footer from '../../footer-temp';
import MobileShareButton_ch from "../../modules/mobileShareButton-ch";
import MainContents_img from "../../modules/MainContents_img";
import MainContents_OneArtist from "../../modules/MainContents_OneArtist";
import ImageWithDescriptionCH from"../../modules/MainContent_ImageWithDescription_Ch";
import MainContents_First_ch from "../../modules/MainContents_First_ch";
import FooterCH from "../footer-ch";

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
              <Col lg={12} className ="model3D-col-ch">
              <div>
                <OBJModel src="./Bee.obj" textPath="" width="500" height="500"
                   position={{x:0,y:-10,z:0}} style={{backgroundColor:"black"}}/>
               </div>
              </Col>
            </Row>
            {/*<Row className="other-side-hint-ch"><p>Click and drag or scroll to look around</p></Row>*/}
            <ProgramInfo_ch subtitle="口罩之說" title="一罩之隔" artistName="Lady Hao Hao" url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask-ch&amp;src=sdkpreparse" color="#D9C739">
            </ProgramInfo_ch>
            <MainContents_First_ch style={{color:"#0C3866"}} contents="口罩是這次疫情保護人類、對抗病毒的武器；但是當它翻轉180度後，竟然發現口罩內側最貼近我們、隔著自己與別人的那一面，色彩張狂，圖案詭譎，即使你想仔細觀看卻看不清楚！那貌似美麗的畫面是什麼？為什麼這樣美麗的創作，卻包裹在口罩裡面？這是我們希望每一位觀看者看見作品時，都能產生的好奇與疑問。"></MainContents_First_ch>

              <MainContents_Middle_ch style={{color:"#0C3866"}} contents="透過這樣的作品呈現，讓人不禁懷疑，到底那一面是「保護」？那一面是我們應該相信的「真實」？我們常常經由語言與行為，表達傷害與歧視；在這次的疫情裡，我們也看見了許多美麗包裝下的話術，說出來的卻是醜陋的意涵與不實的陳述。這次的疫情如此嚴重，究竟是因為病毒肆虐，還是我們選擇性無視那真實的訊息？"></MainContents_Middle_ch>

              <MainContents_Middle_ch contents="「我在創作這幅畫作時，非常清楚的想要呈現一個美麗的畫面，而這個美麗的畫面卻是人們所害怕的事實。我足足花了兩個星期思考：『它』是什麼樣子？人們何時成為了病毒滋生的溫床，習慣它並與它共存？！ "></MainContents_Middle_ch>

              <MainContents_Middle_ch contents="「內心信仰的藝術品，又該如何說服自己，它很美卻又是病毒。」－ 藝術家Lady Hao Hao"></MainContents_Middle_ch>
                <ImageWithDescriptionCH src={image1} description="What is something that you can see when you look up, no matter"></ImageWithDescriptionCH>
                <div className="emptyBlock"></div>
                <Second_Title_ch secondTitle="How To Interact With this Art Work"></Second_Title_ch>
                <MainContents_Important_ch contents="口罩是這次疫情保護人類、對抗病毒的武器；但是當它翻轉180度後，竟然發現口罩內側最貼近我們、隔著自己與別人的那一面，色彩張狂，圖案詭譎，即使你想仔細觀看卻看不清楚！那貌似美麗的畫面是什麼？為什麼這樣美麗的創作，卻包裹在口罩裡面？這是我們希望每一位觀看者看見作品時，都能產生的好奇與疑問。"></MainContents_Important_ch>
                        <div className="emptyBlock"></div>
              <Second_Title_ch secondTitle="About This Artist"></Second_Title_ch>
                <MainContents_OneArtist src={image1} contents="asdf
                  Despite our geographical differences,
                  we all look towards that same sky that looms over our heads,asdf
                  Despite our geographical differences,
                  we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
                together."></MainContents_OneArtist>



              <MobileShareButton_ch togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask-ch&amp;src=sdkpreparse"></MobileShareButton_ch>
              <div className="emptyBlock2"></div>
        </Container>
          <FooterCH/>
        </div>
        );
    }
}

export default OtherSideOfMask_ch;
