import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import HomeTopSection from './homeTopSection';
import HomeSecondSection from './homeSecondSection';
import "./homeCss/homeMain.css";
import HomeProjectRight from './HomeProjectRight';
import HomeProjectLeft from './HomeProjectLeft';
import SponsorImgSlider from './SponsorImgSlider';
import HomeColoredHeader from './home_colored_header';


function Home2() {
    return (
        <div id="homeMainDiv">
        <Row id="homeFirstRow">
            <HomeTopSection/>
        </Row>
        <HomeSecondSection header="header"/>
        <div id="homeThirdSection">
            <HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/>
            <HomeProjectRight title="UNDER THE SAME SKY PROJECT"/>
            <HomeProjectLeft title="WE ARE ALL IN THIS TOGETHER"/>
            <HomeProjectRight title="(UN) BEING CHINESE"/>
            <HomeProjectLeft title="MIRRORS"/>
            <HomeColoredHeader title="BEHIND THE MASK"/>
            <HomeProjectRight title="THE OTHER SIDE OF MASK"/>
            <HomeProjectLeft title="PAUL'S APPLES"/>
            <HomeProjectRight title="PEOPLE AND MASK"/>
            <SponsorImgSlider id="sponsorSlider"/>
        </div>
        </div>

    )
}

export default Home2;
