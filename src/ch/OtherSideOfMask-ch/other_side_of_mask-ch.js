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
            <Row className="other-side-hint-ch"><p>Click and drag or scroll to look around</p></Row>
            <ProgramInfo_ch subtitle="Behind the Masks" title="THE OTHER SIDE OF MASK" artistName="Lady Hao Hao" url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask-ch&amp;src=sdkpreparse" color="#D9C739">
            </ProgramInfo_ch>
            <Second_Title_ch secondTitle="Under the same sky project"></Second_Title_ch>
            <MainContents_Important_ch contents=" What is something that you can see when you look up, no matter
                    wherever you are in the world? The sky is one constant no matter
                    where you are and what time of day, it is there above the horizon."></MainContents_Important_ch>

              <MainContents_Middle_ch style={{color:"#0C3866"}} contents=" What is something that you can see when you look up, no matter
                      wherever you are in the world? The sky is one constant no matter
                      where you are and what time of day, it is there above the horizon."></MainContents_Middle_ch>

              <MainContents_img src={image1}  className="img-other-side"></MainContents_img>

              <MainContents_Middle_ch contents=" Despite our geographical differences,
                we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
              together. "></MainContents_Middle_ch>
                <MainContents_img src={image1} className="img-other-side"></MainContents_img>
              <MainContents_Middle_ch contents=" In all that the world has gone through, the unchanging sky gives
              people a sense of hope and anticipation for the feeling of a
              normal day to come again. Furthermore, Indigenous teachings and
              stories about the sky can guide us in these times.
              By giving each image a background story, we can implore others to
              look to the sky and gain strength. In all that the world has gone through, the unchanging sky gives
              people a sense of hope and anticipation for the feeling of a
              normal day to come again. Furthermore, Indigenous teachings and
              stories about the sky can guide us in these times.
              By giving each image a background story, we can implore others to
              look to the sky and gain strength."></MainContents_Middle_ch>

              <MobileShareButton_ch togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask-ch&amp;src=sdkpreparse"></MobileShareButton_ch>
          </Container>
          <FooterCH/>
        </div>
        );
    }
}

export default OtherSideOfMask_ch;
