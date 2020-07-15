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
import HomeMobileIntro from './homeMobileIntro';
import HomeMobileProject from './HomeMobileProject';

function Home2() {
    return (
        <div id="homeMainDiv">
            <Row id="homeFirstRow">
                <HomeTopSection/>
            </Row>
            <HomeMobileIntro/>
            <HomeSecondSection id="homeSecondSection" header="header"/>
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
            <div id="homeThirdSectionMobile">
                <HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/>
                <HomeMobileProject type="INTERACTIVE DESIGN" title="UNDER THE SAME SKY PROJECT"/>
                <HomeMobileProject type="INTERACTIVE DESIGN" title="WE ARE ALL IN THIS TOGETHER"/>
                <HomeMobileProject type="GRAPHIC ART" title="(UN) BEING CHINESE"/>
                <HomeMobileProject type="ILLUSTRATION" title="MIRRORS"/>
                <HomeColoredHeader title="BEHIND THE MASK"/>
                <HomeMobileProject type="CREATIVE ART" title="THE OTHER SIDE OF MASK"/>
                <HomeMobileProject type="FINE ART" title="PAUL'S APPLE"/>
                <HomeMobileProject type="SKETCH ART" title="PEOPLE AND MASK"/>
                
            </div>
        </div>
    )
}

export default Home2;
