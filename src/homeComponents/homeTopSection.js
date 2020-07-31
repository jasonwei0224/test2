import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import placeHolder from "../assets/placeholder.jpg";
import Slider_home from "../modules/img_slider_final_home2";
import sky_top_tor from '../assets/sky_top_tor.jpg'
import different_top_tor from '../assets/different_top_tor.jpg';
import otherside_top_tor from '../assets/otherside_top_tor.jpg';
import apple_top_tor from '../assets/apple_top_tor.jpg';
import mirror_top_tor from '../assets/mirror_top_tor.jpg';
import people_and_mask_top_tor from '../assets/people_and_mask_top_tor.jpg';
import ProjectNameRight from "./ProjectNameRight";
import ProjectNameLeft from "./ProjectNameLeft";

function HomeTopSection() {
    return (
        <div id="homeTopSection">
            <Row id="topSectionRow">
                <Col className="firstCols">
                  <div className="firstColTitle">SELECTED SKY PHOTOS <br></br> FROM PEOPLE LIKE YOU</div>
                    <Slider_home/>
                    {/* <img id='leftImage' src={placeHolder}/> */}
                </Col>
                <Col id="projectsScroll">
                  <div id="projectsScrollingSection">
                    <div className="ScrollableTitle">CHOOSE A GALLERY <br></br>TO VIEW THE ARTWORKS </div>
                    <ProjectNameRight url="/sky"image={sky_top_tor} name="Sky"/>
                    <ProjectNameLeft url="/IAmDifferent"image={different_top_tor} name="I am different, just like you"/>
                    <ProjectNameRight url="" image={mirror_top_tor} name="Mirrors"/>

                      <ProjectNameRight  url="" image={people_and_mask_top_tor} name=""/>
                    <ProjectNameLeft  url="" image={apple_top_tor} name="Paul's Apples"/>
                    <ProjectNameRight   url="" image={otherside_top_tor} name="The Other Side of Mask"/>
                      <div id="emptySpace"></div>
                  </div>
                </Col>
            </Row>
        </div>
    );
}

export default HomeTopSection;
