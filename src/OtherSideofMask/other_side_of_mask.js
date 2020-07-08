
import React, { Component } from 'react';
import './other_side_of_mask.css';
import {OBJModel, GLTFModel} from 'react-3d-viewer'
// import {ModelViewer} from 'react-3d-model-viewer';
import image1 from '../assets/image1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgramInfo from "../programInfo";
import Second_Title from "../modules/Second_Title"
import MainContents_First from "../modules/MainContents_First";
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import Footer from '../footer-temp';
import MobileShareButton from "../modules/mobileShareButton";
import MainContents_img from "../modules/MainContents_img";

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
            <ProgramInfo subtitle="Behind the Masks" title="THE OTHER SIDE OF MASK" artistName="Lady Hao Hao" url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask&amp;src=sdkpreparse" color="#D9C739">
            </ProgramInfo>
            <Second_Title secondTitle="Under the same sky project"></Second_Title>
            <MainContents_Important contents=" What is something that you can see when you look up, no matter
                    wherever you are in the world? The sky is one constant no matter
                    where you are and what time of day, it is there above the horizon."></MainContents_Important>

              <MainContents_Middle style={{color:"#0C3866"}} contents=" What is something that you can see when you look up, no matter
                      wherever you are in the world? The sky is one constant no matter
                      where you are and what time of day, it is there above the horizon."></MainContents_Middle>

              <MainContents_img src={image1}  className="img-other-side"></MainContents_img>

              <MainContents_Middle contents=" Despite our geographical differences,
                we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
              together. "></MainContents_Middle>
                <MainContents_img src={image1} className="img-other-side"></MainContents_img>
              <MainContents_Middle contents=" In all that the world has gone through, the unchanging sky gives
              people a sense of hope and anticipation for the feeling of a
              normal day to come again. Furthermore, Indigenous teachings and
              stories about the sky can guide us in these times.
              By giving each image a background story, we can implore others to
              look to the sky and gain strength. In all that the world has gone through, the unchanging sky gives
              people a sense of hope and anticipation for the feeling of a
              normal day to come again. Furthermore, Indigenous teachings and
              stories about the sky can guide us in these times.
              By giving each image a background story, we can implore others to
              look to the sky and gain strength."></MainContents_Middle>

              <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask&amp;src=sdkpreparse"></MobileShareButton>

          </Container>

            <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
        </div>
        );
    }
}

export default OtherSideOfMask;
