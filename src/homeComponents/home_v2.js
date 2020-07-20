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
import HomeColoredHeader2 from './home_colored_header_2';
import HomeMobileIntro from './homeMobileIntro';
import HomeMobileProject from './HomeMobileProject';
import homepage_placeholder_lg from '../assets/homepage_placeholder_lg.jpg';
import Footer from '../footer-temp';
import homeImage from './homeImage';
import we_are_all_home_tor from '../assets/we_are_all_home_tor.jpg';
import apple_home from'../assets/apple_home_tor.jpg';
import chinese_home from '../assets/chinese_home_tor.jpg';
import mirror_home_tor from '../assets/mirror_home_tor.jpg';
import otherside_tor from '../assets/otherside_tor.jpg';
import people_and_mask_tor from '../assets/people_and_mask_tor.jpg';
import sky_home_tor from '../assets/sky_home_tor.jpg';

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
            <a href="/Sky"><img className="home_image"src={sky_home_tor} style={{width:'100%', height:"auto"}}></img></a>
              <a href="/IAmDifferent"><img className="home_image" src={we_are_all_home_tor} style={{width:'100%', height:"auto"}}></img></a>
              <a href=""><img className="home_image" src={chinese_home} style={{width:'100%', height:"auto"}}></img></a>
            <a href=""><img className="home_image" src={mirror_home_tor} style={{width:'100%', height:"auto"}}></img></a>

          <HomeColoredHeader2 title="BEHIND THE MASK" image={homepage_placeholder_lg}/>
            <a href=""><img className="home_image" src={otherside_tor} style={{width:'100%', height:"auto"}}></img></a>
            <a href=""><img className="home_image" src={apple_home} style={{width:'100%', height:"auto"}}></img></a>
            <a href=""><img className="home_image" src={people_and_mask_tor} style={{width:'100%', height:"auto"}}></img></a>

          {/*}  <SponsorImgSlider id="sponsorSlider"/>*/}
        </div>
        <div id="homeThirdSectionMobile">
            <HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/>
            <HomeMobileProject url="/Sky"type="INTERACTIVE DESIGN" title="UNDER THE SAME SKY PROJECT" image={homepage_placeholder_lg}/>
            <HomeMobileProject url="/IAmDifferent"type="INTERACTIVE DESIGN" title="WE ARE ALL IN THIS TOGETHER" image={homepage_placeholder_lg}/>
            <HomeMobileProject url=""type="GRAPHIC ART" title="(UN) BEING CHINESE" image={homepage_placeholder_lg}/>
            <HomeMobileProject url=""type="ILLUSTRATION" title="MIRRORS" image={homepage_placeholder_lg}/>
            <HomeColoredHeader title="BEHIND THE MASK" image={homepage_placeholder_lg}/>
            <HomeMobileProject url=""type="CREATIVE ART" title="THE OTHER SIDE OF MASK" image={homepage_placeholder_lg}/>
            <HomeMobileProject url=""type="FINE ART" title="PAUL'S APPLE" image={homepage_placeholder_lg}/>
            <HomeMobileProject url=""type="SKETCH ART" title="PEOPLE AND MASK"image={homepage_placeholder_lg}/>

        </div>
          <Footer content="&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
        </div>
    )
}

export default Home2;
