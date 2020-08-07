import React, { Component } from 'react';
import './other_side_of_mask.css';
import {OBJModel} from 'react-3d-viewer'
import image1 from '../assets/image1.jpg';
import ladyhaohao from '../assets/Lady Hao Hao.jpg'
import walter from '../assets/Walter.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgramInfoTwoArtist from "../programInfoTwoArtist"
import Second_Title from "../modules/Second_Title"
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../modules/MainContents_Important_with_border"
import MainContents_TwoArtistPic from "../modules/MainContents_TwoArtistPic"
import Footer from '../footer-temp';
import MobileShareButton from "../modules/mobileShareButton";
import ImageWithDescription from"../modules/MainContent_ImageWithDescription";

var text = `It is said that words can be sharper than a knife, and oftentimes we say things that are hurtful without it ever being our intention. The purpose of masks is to protect us from getting sick or prevent the spreading of disease, but sometimes it is our own actions or words that do more harm.\n
This art piece portrays the irony that on the flip side of every beautiful story and gesture exists its potentially damaging impact. Further, the appearance of the inner side of the mask and its similarity to the media’s images of the SARS-CoV-2 virus reflects that it can be difficult for us to differentiate between what is poisonous and what is beautiful. In these current times, we must examine our past behaviours and reflect on how we can learn from them. It takes courage to understand ourselves and each other, and even more so to own our past mistakes.\n
“The Other Side of Masks” serves as a reminder that our words and actions, in spite of their beauty, can also hold unintentional danger. And just like the two sides of a mask, we must see both sides in order to grow.
`

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
            <Col lg={6} className="model3D-col" >
            <div>
              <OBJModel src="./Bee.obj" textPath="" width="500" height="500"
                  position={{x:0,y:-10,z:0}} style={{backgroundColor:"black"}}/>
              </div>
            </Col>
            <Col lg={6} className="model3D-col" >
            <div>
              <OBJModel src="./Bee.obj" textPath="" width="500" height="500"
                  position={{x:0,y:-10,z:0}} style={{backgroundColor:"black"}}/>
              </div>
            </Col>
          </Row>
          {/*<Row className="other-side-hint">
              <p>Click and drag or scroll to look around</p>
            </Row>*/}
          <ProgramInfoTwoArtist
            subtitle="Behind the Masks"
            title="THE OTHER SIDE OF MASK"
            artistitle1="Sketch Artist: "
            artistName1="Lady Hao Hao"
            artistitle2="3D Artist: "
            artistName2="Walter Kao"
            url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask&amp;src=sdkpreparse"
            color="#D9C739">
          </ProgramInfoTwoArtist>

          <Second_Title secondTitle="HOW TO INTERACT WITH THIS WORK" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
          <MainContents_Important_With_Border style={{color:"#0C3866"}} contents="What is something that you can see when you look up, no matter
            wherever you are in the world? The sky is one constant no matter
            where you are and what time of day, it is there above the horizon."></MainContents_Important_With_Border>
          <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
          </MainContents_Middle_Adonis>


          <MainContents_TwoArtistPic
            pic1={ladyhaohao}
            title1="Lady Hao Hao"
            contents1="asdf
            Despite our geographical differences,
            we all look towards that same sky that looms over our heads,asdf
            Despite our geographical differences,
            we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
            together."
            pic2={walter}
            title2="Walter Kao"
            contents2="asdf
            Despite our geographical differences,
            we all look towards that same sky that looms over our heads,asdf
            Despite our geographical differences,
            we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
            together.">
          </MainContents_TwoArtistPic>
          <div className="people_padding"></div>

          <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask&amp;src=sdkpreparse"></MobileShareButton>
        </Container>

        <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
      </div>
    );
  }
}

export default OtherSideOfMask;
