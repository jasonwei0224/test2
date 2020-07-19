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
import we_are_all_home_tor from '../../assets/we_are_all_home_tor.jpg';
import apple_home from'../../assets/apple_home_tor.jpg';
import chinese_home from '../../assets/chinese_home_tor.jpg';
import mirror_home_tor from '../../assets/mirror_home_tor.jpg';
import otherside_tor from '../../assets/otherside_tor.jpg';
import people_and_mask_tor from '../../assets/people_and_mask_tor.jpg';
import sky_home_tor from '../../assets/sky_home_tor.jpg';

function Home2() {
    return (
        <div id="homeMainDiv">
        <Row id="homeFirstRow">
            <HomeTopSection/>
        </Row>
        <HomeMobileIntro/>
        <HomeSecondSection id="homeSecondSection" header="世界的紛亂，可能是我們人
          沒有給彼此空間；大自然的抗議，可能是我們沒有跟它保持距離。藝術家具有冒險的精神
          ，挑戰現實的勇氣。文字無法傳達的，讓畫面來說話；感受不到的溫度，讓顏色來點燃。
          在這裡欣賞藝術家的作品，唯一需要的是時間與空間。"/>
        <div id="homeThirdSection">
          <HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/>
          <img href= "" className="home_image"src={sky_home_tor} style={{width:'100%', height:"auto"}}></img>
          <img className="home_image" src={we_are_all_home_tor} style={{width:'100%', height:"auto"}}></img>
          <img className="home_image" src={chinese_home} style={{width:'100%', height:"auto"}}></img>
          <img className="home_image" src={mirror_home_tor} style={{width:'100%', height:"auto"}}></img>

        <HomeColoredHeader2 title="BEHIND THE MASK" image={homepage_placeholder_lg}/>
          <img className="home_image" src={otherside_tor} style={{width:'100%', height:"auto"}}></img>
          <img className="home_image" src={apple_home} style={{width:'100%', height:"auto"}}></img>
          <img className="home_image" src={people_and_mask_tor} style={{width:'100%', height:"auto"}}></img>

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
