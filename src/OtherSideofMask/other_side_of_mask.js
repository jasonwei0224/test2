
import React, { Component } from 'react';
import './other_side_of_mask.css';
import {OBJModel, GLTFModel} from 'react-3d-viewer'
// import {ModelViewer} from 'react-3d-model-viewer';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/mask1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgramInfo from "../programInfo";
import Second_Title from "../modules/Second_Title"
import MainContents_First from "../modules/MainContents_First";
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import MainContents_WithPicture from "../modules/MainContents_WithPicture"
import Footer from '../footer-temp';
import MobileShareButton from "../modules/mobileShareButton";
import MainContents_img from "../modules/MainContents_img";
import ImageWithDescription from"../modules/MainContent_ImageWithDescription";

class OtherSideOfMask extends Component {
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
            <Col lg={12} className="model3D-col" >
            <div>
              <OBJModel src="./Bee.obj" textPath="" width="500" height="500"
                  position={{x:0,y:-10,z:0}} style={{backgroundColor:"black"}}/>
              </div>
            </Col>
          </Row>
          {/*<Row className="other-side-hint">
              <p>Click and drag or scroll to look around</p>
            </Row>*/}
          <ProgramInfo subtitle="Behind the Masks" title="THE OTHER SIDE OF MASK" artistName="Lady Hao Hao" url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask&amp;src=sdkpreparse" color="#D9C739">
          </ProgramInfo>

          <MainContents_Middle contents="It is said that words can be sharper than a knife, and oftentimes we say things that are hurtful without it ever being our intention. The purpose of masks is to protect us from getting sick or prevent the spreading of disease, but sometimes it is our own actions or words that do more harm."></MainContents_Middle>
          <MainContents_Middle contents="This art piece portrays the irony that on the flip side of every beautiful story and gesture exists its potentially damaging impact. Further, the appearance of the inner side of the mask and its similarity to the media’s images of the SARS-CoV-2 virus reflects that it can be difficult for us to differentiate between what is poisonous and what is beautiful. In these current times, we must examine our past behaviours and reflect on how we can learn from them. It takes courage to understand ourselves and each other, and even more so to own our past mistakes."></MainContents_Middle>
          <MainContents_Middle contents="“The Other Side of Masks” serves as a reminder that our words and actions, in spite of their beauty, can also hold unintentional danger. And just like the two sides of a mask, we must see both sides in order to grow."></MainContents_Middle>
          
          <ImageWithDescription src={image1} description="What is something that you can see when you look up, no matter wherever you are in the world? The sky is one constant no matter where you are and what time of day, it is there above the horizon."></ImageWithDescription>
          
          <Second_Title secondTitle="HOW TO INTERACT WITH THIS WORK"></Second_Title>
          <MainContents_Important contents=" What is something that you can see when you look up, no matter
            wherever you are in the world? The sky is one constant no matter
            where you are and what time of day, it is there above the horizon."></MainContents_Important>

          <Second_Title secondTitle="ABOUT THIS ARTIST"></Second_Title>  
          <MainContents_WithPicture src={image2} contents="asdf
          Despite our geographical differences,
          we all look towards that same sky that looms over our heads,asdf
          Despite our geographical differences,
          we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
          together."></MainContents_WithPicture>

          <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask&amp;src=sdkpreparse"></MobileShareButton>
        </Container>

        <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
      </div>
    );
  }
}

export default OtherSideOfMask;
