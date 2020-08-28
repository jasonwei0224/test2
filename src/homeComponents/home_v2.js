import React, { Component, useRef, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import HomeTopSection from './homeTopSection';
import HomeSecondSection from './homeSecondSection';
import HoverImage from "react-hover-image"
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


import we_are_all_home from '../assets/T-We are all in this toghther - online word .jpg';
import we_are_all_home_hover from '../assets/T-We are all in this toghther - online only .jpg'
import apple_home from'../assets/T-Paul_s Apple Word.jpg';
import apple_home_hover from '../assets/T-Paul_s Apple only.jpg'
import chinese_home from '../assets/T-Un Being Chinese w word.jpg';
import chinese_home_hover from '../assets/T-Un being Chinese only.jpg'
import mirror_home from '../assets/T-Mirrors word.jpg';
import mirror_home_hover from '../assets/T-Mirrors only.jpg'
import otherside_home from '../assets/T-The other side of mask w word.jpg';
import otherside_home_hover from '../assets/T-the other side of mask only.jpg';
import people_and_mask from '../assets/T-People and Mask w word .jpg';
import people_and_mask_hover from '../assets/T-People and mask only.jpg'
import sky_home_project from '../assets/T-Under the Same Sky Project word .jpg';
import sky_home_project_hover from '../assets/T-Under the Same Sky Project only.jpg'


import we_are_all_home_mobile from '../assets/T-We are in this together online-en word.jpg';
import we_are_all_home_mobile_hover from '../assets/T-We are in this together online-en.jpg';
import apple_home_mobile from'../assets/T-Pual_s Apple-en word.jpg';
import apple_home_mobile_hover from '../assets/T-Pual_s Apple-en.jpg';
import chinese_home_mobile from '../assets/T-UN being Chinese-en word.jpg';
import chinese_home_mobile_hover from '../assets/T-UN being Chinese-en.jpg'
import mirror_home_mobile from '../assets/T-Mirrios-en word.jpg';
import mirror_home_mobile_hover from '../assets/T-Mirrios-ch.jpg'
import otherside_home_mobile from '../assets/T-The other side of mask-en word.jpg';
import otherside_home_mobile_hover from '../assets/T-The other side of mask-en.jpg'
import people_and_mask_mobile from '../assets/T-People _ mask-en word.jpg';
import people_and_mask_mobile_hover from '../assets/T-People _ mask-en.jpg'
import sky_home_project_mobile from '../assets/T-under the same sky project-en word.jpg';
import sky_home_project_mobile_hover from '../assets/T-under the same sky project-en.jpg';

import section_1 from '../assets/Tor-en-1.jpg';
import section_2 from '../assets/Tor-en-2.jpg';

import Slider_home from "../modules/img_slider_final_home2";
import { SocialIcon } from 'react-social-icons';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const useMountEffect = (fun) => useEffect(fun, [])


var text = `The world seems to have lost its order because we forget to give others space; nature seems to be protesting because we forget to be humble. Artists are risk takers and they dare to challenge the reality of our society.  For things words can’t express, let pictures do the talking.  For the warmth people can’t feel, maybe colours can ignite.  To appreciate our artists here, time and space are all that is required.`
var text2= `The virtual gallery is made possible with the following people.
Their hard work and creativity in developing this site is greatly appreciated.`
var creators = `Jason Wei / Gina Kim / Sangwook Yun / Eric Chang / Jessica Chu / Flemming Chow
 Yuni Hur / Sherry Guo`
function Home2() {


    const myRef = useRef(null)
    const myRef2 = useRef(null)
    // const myRef3 = useRef(null)
    // useMountEffect(() => scrollToRef(myRef))
    return (
        <div id="homeMainDiv">
        <Row id="homeFirstRow">
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
                        <div id="projectInScroll">
                            <Row id="mainRow">
                                <Col xl={{span:16, offset:0}} className="projectCols">
                                    <img onClick={()=>scrollToRef(myRef)} id="projectImage" src={section_1}/>
                                </Col>
                            </Row>
                        </div>
                        <div id="projectInScroll">
                            <Row id="mainRow2">
                                <Col xl={{span:16, offset:0}} className="projectCols">
                                    <img onClick={()=>scrollToRef(myRef2)} id="projectImage" src={section_2}/>
                                </Col>
                            </Row>
                        </div>
                        <div id="emptySpace"></div>
                    </div>
                  </Col>
              </Row>
          </div>
        </Row>
        <HomeMobileIntro/>
        <HomeSecondSection id="homeSecondSection" header={text}/>
        <div id="homeThirdSection">
            <span  ref ={myRef} ><HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/></span>
            <a href="/Sky"><HoverImage className="home_image" src={sky_home_project}  hoverSrc={sky_home_project_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
              <a href="/IAmDifferent" ><HoverImage className="home_image" src={we_are_all_home}  hoverSrc={we_are_all_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
              <a href="/UnbeingChinese"><HoverImage className="home_image" src={chinese_home}   hoverSrc={chinese_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
              <a href="/Mirror"><HoverImage className="home_image" src={mirror_home}  hoverSrc={mirror_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <span  ref ={myRef2} ><HomeColoredHeader title="BEHIND THE MASK" image={homepage_placeholder_lg}/></span>
              <a href="/OtherSideOfMask"><HoverImage className="home_image" src={otherside_home}  hoverSrc={otherside_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
              <a href="/PaulsApple"><HoverImage className="home_image" src={apple_home}  hoverSrc={apple_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
              <a href="/PeopleAndMask"><HoverImage className="home_image" src={people_and_mask}  hoverSrc={people_and_mask_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
          </div>
          <Row>
            <Col xl={{span:4, offset:4}} lg={{span:4, offset:4}} sm={{span:10, offset:1}} className="sm_col_desktop">
              <SocialIcon target="_blank" rel="noopener noreferrer" network="facebook" url="https://www.facebook.com/TAIWANfestToronto"/>
              <SocialIcon target="_blank" rel="noopener noreferrer" network="twitter" url="https://twitter.com/TaiwanfestT"/>
              <SocialIcon target="_blank" rel="noopener noreferrer" network="youtube" url="https://www.youtube.com/channel/UCks29jGeDZirdgN77qB849Q"/>
              <SocialIcon target="_blank" rel="noopener noreferrer" network="instagram" url="https://www.instagram.com/taiwanfest.toronto/"/>

            </Col>
          </Row>
          <div id="homeThirdSectionMobile">
            <HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/>
            <HomeMobileProject url="/Sky"type="INTERACTIVE GAME" title="UNDER THE SAME SKY PROJECT" image={sky_home_project_mobile} hover={sky_home_project_mobile_hover}/>
            <HomeMobileProject url="/IAmDifferent"type="INTERACTIVE GAME" title="WE ARE ALL IN THIS TOGETHER" image={we_are_all_home_mobile} hover={we_are_all_home_mobile_hover}/>
            <HomeMobileProject url="/UnbeingChinese"type="GRAPHIC ART" title="(UN) BEING CHINESE" image={chinese_home_mobile} hover={chinese_home_mobile_hover}/>
            <HomeMobileProject url="/Mirror"type="ILLUSTRATION" title="MIRRORS" image={mirror_home_mobile} hover={mirror_home_mobile_hover}/>
            <HomeColoredHeader title="BEHIND THE MASK" image={homepage_placeholder_lg}/>
            <HomeMobileProject url="/OtherSideOfMask"type="DIGITAL PAINTING" title="THE OTHER SIDE OF MASK" image={otherside_home_mobile} hover={otherside_home_mobile_hover}/>
            <HomeMobileProject url="/PaulsApple"type="DIGITAL PAINTING" title="PAUL'S APPLE" image={apple_home_mobile} hover={apple_home_mobile_hover}/>
            <HomeMobileProject url="/PeopleAndMask"type="SKETCH" title="PEOPLE AND MASK"image={people_and_mask_mobile} hover={people_and_mask_mobile_hover}/>
              <Row>
                <Col xl={{span:4, offset:4}} lg={{span:4, offset:4}} sm={{span:10, offset:1}} className="sm_col">
                  <SocialIcon target="_blank" rel="noopener noreferrer" network="facebook" url="https://www.facebook.com/TAIWANfestToronto" style={{ height: 100, width: 100 }} />
                  <SocialIcon target="_blank" rel="noopener noreferrer" network="instagram" url="https://twitter.com/TaiwanfestT" style={{ height: 100, width: 100 }} />
                  <SocialIcon target="_blank" rel="noopener noreferrer" network="youtube" url="https://www.youtube.com/channel/UCks29jGeDZirdgN77qB849Q" style={{ height: 100, width: 100 }} />
                  <SocialIcon target="_blank" rel="noopener noreferrer" network="twitter" url="https://www.instagram.com/taiwanfest.toronto/" style={{ height: 100, width: 100 }} />
                </Col>
              </Row>
        </div>
        {/*<div id="homeThirdSection">
            <span  ref ={myRef} ><HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/></span>
            <a href=""><HoverImage className="home_image" src={sky_home_project}  hoverSrc={sky_home_project_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
              <a href="" ><HoverImage className="home_image" src={we_are_all_home}  hoverSrc={we_are_all_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
              <a href=""><HoverImage className="home_image" src={chinese_home}   hoverSrc={chinese_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
              <a href=""><HoverImage className="home_image" src={mirror_home}  hoverSrc={mirror_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
            <span  ref ={myRef2} ><HomeColoredHeader title="BEHIND THE MASK" image={homepage_placeholder_lg}/></span>
              <a href=""><HoverImage className="home_image" src={otherside_home}  hoverSrc={otherside_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
              <a href=""><HoverImage className="home_image" src={apple_home}  hoverSrc={apple_home_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
              <a href=""><HoverImage className="home_image" src={people_and_mask}  hoverSrc={people_and_mask_hover} style={{width:'100%', height:"auto"}}></HoverImage></a>
          </div>

          <Row>
            <Col xl={{span:4, offset:4}} lg={{span:4, offset:4}} sm={{span:10, offset:1}} className="sm_col_desktop">
              <SocialIcon target="_blank" rel="noopener noreferrer" network="facebook" url="https://www.facebook.com/TAIWANfestToronto"/>
              <SocialIcon target="_blank" rel="noopener noreferrer" network="twitter" url="https://twitter.com/TaiwanfestT"/>
              <SocialIcon target="_blank" rel="noopener noreferrer" network="youtube" url="https://www.youtube.com/channel/UCks29jGeDZirdgN77qB849Q"/>
              <SocialIcon target="_blank" rel="noopener noreferrer" network="instagram" url="https://www.instagram.com/taiwanfest.toronto/"/>

            </Col>
          </Row>
        <div id="homeThirdSectionMobile">
            <HomeColoredHeader title="I'M DIFFERENT, JUST LIKE YOU!"/>
            <HomeMobileProject url=""type="INTERACTIVE GAME" title="UNDER THE SAME SKY PROJECT" image={sky_home_project_mobile} hover={sky_home_project_mobile_hover}/>
            <HomeMobileProject url=""type="INTERACTIVE GAME" title="WE ARE ALL IN THIS TOGETHER" image={we_are_all_home_mobile} hover={we_are_all_home_mobile_hover}/>
            <HomeMobileProject url=""type="GRAPHIC ART" title="(UN) BEING CHINESE" image={chinese_home_mobile} hover={chinese_home_mobile_hover}/>
            <HomeMobileProject url=""type="ILLUSTRATION" title="MIRRORS" image={mirror_home_mobile} hover={mirror_home_mobile_hover}/>
            <HomeColoredHeader title="BEHIND THE MASK" image={homepage_placeholder_lg}/>
            <HomeMobileProject url=""type="DIGITAL PAINTING" title="THE OTHER SIDE OF MASK" image={otherside_home_mobile} hover={otherside_home_mobile_hover}/>
            <HomeMobileProject url=""type="DIGITAL PAINTING" title="PAUL'S APPLE" image={apple_home_mobile} hover={apple_home_mobile_hover}/>
            <HomeMobileProject url=""type="SKETCH" title="PEOPLE AND MASK"image={people_and_mask_mobile} hover={people_and_mask_mobile_hover}/>
              <Row>
                <Col xl={{span:4, offset:4}} lg={{span:4, offset:4}} sm={{span:10, offset:1}} className="sm_col">
                  <SocialIcon target="_blank" rel="noopener noreferrer" network="facebook" url="https://www.facebook.com/TAIWANfestToronto" style={{ height: 100, width: 100 }} />
                  <SocialIcon target="_blank" rel="noopener noreferrer" network="instagram" url="https://twitter.com/TaiwanfestT" style={{ height: 100, width: 100 }} />
                  <SocialIcon target="_blank" rel="noopener noreferrer" network="youtube" url="https://www.youtube.com/channel/UCks29jGeDZirdgN77qB849Q" style={{ height: 100, width: 100 }} />
                  <SocialIcon target="_blank" rel="noopener noreferrer" network="twitter" url="https://www.instagram.com/taiwanfest.toronto/" style={{ height: 100, width: 100 }} />
                </Col>
              </Row>
        </div>*/}

        <div>
          <Row>
              <Col xl={{span:8, offset:2}} lg={{span:8, offset:2}} sm={{span:10, offset:1}}>
                <div className="home_border_top" style={{borderTop:"solid 2px #d9c639"}}/>
              </Col>
          </Row>
          <Row>
            <Col xl={{span:4, offset:4}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}} className="ack_title">-ACKNOWLEDGEMENT-</Col>
          </Row>
          <Row>
            <Col xl={{span:6, offset:3}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}} className="ack_text">{text2}</Col>
          </Row>
          <Row>
            <Col xl={{span:6, offset:3}} lg={{span:10, offset:1}} sm={{span:10, offset:1}}xs={{span:10, offset:1}} className="ack_name">{creators}</Col>
          </Row>
          <Row>
              <Col xl={{span:8, offset:2}} lg={{span:8, offset:2}} sm={{span:10, offset:1}}>
                <div className="home_border_bottom"style={{borderTop:"solid 2px #d9c639"}}/>
              </Col>
          </Row>
        </div>
          <Footer content="&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
        </div>
    )
}

export default Home2;
