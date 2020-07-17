import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import HomeTopSection from './homeTopSection';
import HomeSecondSection from './homeSecondSection';
import "./homeMain.css";
import HomeProjectRight from './HomeProjectRight';
import HomeProjectLeft from './HomeProjectLeft';
import SponsorImgSlider from './SponsorImgSlider';
import HomeColoredHeader from './home_colored_header';
import HomeColoredHeader2 from './home_colored_header_2';
import HomeMobileIntro from './homeMobileIntro';
import HomeMobileProject from './HomeMobileProject';
import homepage_placeholder_lg from '../../assets/homepage_placeholder_lg.jpg';
import FooterCH from "../footer-ch";
function Home2() {
    return (
        <div id="homeMainDiv">
        <Row id="homeFirstRow">
            <HomeTopSection/>
        </Row>
        <HomeMobileIntro/>
        <HomeSecondSection id="homeSecondSection" header="The world seems to have
          lost its order because we forget to give others space; nature seems to
          be protesting because we forget to be humble. Artists are risk takers
          and they dare to challenge the reality of our society.  For things
          words can’t express, let pictures do the talking.  For the warmth
          people can’t feel, maybe colours can ignite.  To appreciate our
          artists here, time and space are all is required."/>
        <div id="homeThirdSection">

            <HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/>

            <HomeProjectRight title="UNDER THE SAME SKY PROJECT" image={homepage_placeholder_lg}/>
            <HomeProjectLeft title="WE ARE ALL IN THIS TOGETHER" image={homepage_placeholder_lg}/>
            <HomeProjectRight title="(UN) BEING CHINESE" image={homepage_placeholder_lg}/>
            <HomeProjectLeft title="MIRRORS" image={homepage_placeholder_lg}/>

            <HomeColoredHeader2 title="BEHIND THE MASK" image={homepage_placeholder_lg}/>
            <HomeProjectRight title="THE OTHER SIDE OF MASK" image={homepage_placeholder_lg}/>
            <HomeProjectLeft title="PAUL'S APPLES" image={homepage_placeholder_lg}/>
            <HomeProjectRight title="PEOPLE AND MASK" image={homepage_placeholder_lg}/>
          {/*}  <SponsorImgSlider id="sponsorSlider"/>*/}
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
          <FooterCH></FooterCH>
        </div>
    )
}

export default Home2;
