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
import homepage_placeholder_lg from '../assets/homepage_placeholder_lg.jpg';
import Footer from '../footer-temp';

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
            <HomeProjectRight title="UNDER THE SAME SKY PROJECT" image={homepage_placeholder_lg}/>
            <HomeProjectLeft title="WE ARE ALL IN THIS TOGETHER" image={homepage_placeholder_lg}/>
            <HomeProjectRight title="(UN) BEING CHINESE" image={homepage_placeholder_lg}/>
            <HomeProjectLeft title="MIRRORS" image={homepage_placeholder_lg}/>
            <HomeColoredHeader title="BEHIND THE MASK" image={homepage_placeholder_lg}/>
            <HomeProjectRight title="THE OTHER SIDE OF MASK" image={homepage_placeholder_lg}/>
            <HomeProjectLeft title="PAUL'S APPLES" image={homepage_placeholder_lg}/>
            <HomeProjectRight title="PEOPLE AND MASK" image={homepage_placeholder_lg}/>
            <SponsorImgSlider id="sponsorSlider"/>
        </div>
        <div id="homeThirdSectionMobile">
            <HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/>
            <HomeMobileProject type="INTERACTIVE DESIGN" title="UNDER THE SAME SKY PROJECT" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="INTERACTIVE DESIGN" title="WE ARE ALL IN THIS TOGETHER" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="GRAPHIC ART" title="(UN) BEING CHINESE" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="ILLUSTRATION" title="MIRRORS" image={homepage_placeholder_lg}/>
            <HomeColoredHeader title="BEHIND THE MASK" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="CREATIVE ART" title="THE OTHER SIDE OF MASK" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="FINE ART" title="PAUL'S APPLE" image={homepage_placeholder_lg}/>
            <HomeMobileProject type="SKETCH ART" title="PEOPLE AND MASK"image={homepage_placeholder_lg}/>

        </div>
          <Footer content="&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
        </div>
    )
}

export default Home2;