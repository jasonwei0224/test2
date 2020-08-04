import React, { Component, useRef, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProjectScrollable from './ProjectsScrollable';
import HomeTopSection from './homeTopSection';
import HomeSecondSection from './homeSecondSection';
import "./homeMain-ch.css";
import "../../homeComponents/homeCss/homeMain.css";
import HomeProjectRight from './HomeProjectRight';
import HomeProjectLeft from './HomeProjectLeft';
import SponsorImgSlider from './SponsorImgSlider';
import HomeColoredHeader from './home_colored_header';
import HomeColoredHeader2 from './home_colored_header_2';
import HomeMobileIntro from './homeMobileIntro';
import HomeMobileProject from './HomeMobileProject';
import homepage_placeholder_lg from '../../assets/homepage_placeholder_lg.jpg';
import FooterCH from "../footer-ch";
import Slider_home from "../../modules/img_slider_final_home2";

import we_are_all_home from '../../assets/T-共同面對的我們 word.jpg';
import we_are_all_home_hover from "../../assets/T-共同面對的我們 only.jpg"
import apple_home from'../../assets/T-保羅蘋果 Word.jpg';
import apple_home_hover from '../../assets/T-保羅蘋果 only.jpg';
import chinese_home from '../../assets/T-趣中國化 w word.jpg'
import chinese_home_hover from '../../assets/T-趣中國化 only.jpg';
import mirror_home from '../../assets/T-鏡子 word.jpg';
import mirror_home_hover from '../../assets/T-鏡子 only.jpg'
import otherside_home from '../../assets/T-一罩之隔 w word.jpg';
import otherside_home_hover from '../../assets/T-一罩之隔 only.jpg';
import people_and_mask from '../../assets/T-傲慢與偏見 w word .jpg';
import people_and_mask_hover from '../../assets/T-傲慢與偏見 only.jpg'
import sky_home from '../../assets/T-同一片天計畫 word .jpg';
import sky_home_hover from '../../assets/T-同一片天計畫 only.jpg'

import mask_mobile from "../../assets/T-People _ mask-ch word.jpg"
import mask_mobile_hover from "../../assets/T-People _ mask-ch.jpg"
import apple_mobile from "../../assets/T-Pual_s Apple-ch word.jpg"
import apple_mobile_hover from "../../assets/T-Pual_s Apple-ch.jpg"
import otherside_mobile from "../../assets/T-The other side of mask-ch word.jpg"
import otherside_mobile_hover from "../../assets/T-The other side of mask-ch.jpg"
import diff_online_mobile from "../../assets/T-We are in this together online-ch word.jpg"
import diff_online_mobile_hover from "../../assets/T-We are in this together online-ch.jpg"
import sky_online_mobile from "../../assets/T-under the same sky project-ch word.jpg"
import sky_online_mobile_hover from "../../assets/T-under the same sky project-ch.jpg";
import mirror_mobile from "../../assets/T-Mirrios-ch word.jpg"
import mirror_mobile_hover from "../../assets/T-Mirrors only.jpg"
import chinese_mobile from "../../assets/T-UN being Chinese-ch word.jpg"
import chinese_mobile_hover from "../../assets/T-UN being Chinese-ch.jpg"

import section_1 from '../../assets/Tor-ch-1.jpg';
import section_2 from '../../assets/Tor-ch-2.jpg';
import HoverImage from "react-hover-image"


function Home2() {
  var text = `世界的紛亂，可能是我們人沒有給彼此空間；\n 大自然的抗議，可能是我們沒有跟它保持距離。\n 藝術家具有冒險的精神，挑戰現實的勇氣。\n文字無法傳達的，讓畫面來說話；\n 感受不到的溫度，讓顏色來點燃。\n在這裡欣賞藝術家的作品，唯一需要的是時間與空間 \n\n 「分享系列藝廊」已開放，其他藝廊將於八月二十八日開放
`
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const useMountEffect = (fun) => useEffect(fun, [])

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
                    <div className="firstColTitle">選自社區朋友提供的天空照片</div>
                      <Slider_home/>
                      {/* <img id='leftImage' src={placeHolder}/> */}
                  </Col>
                  <Col id="projectsScroll">
                    <div id="projectsScrollingSection">
                      <div className="ScrollableTitle">請點選藝廊主題欣賞精采作品</div>
                        <div id="projectInScroll">
                            <Row id="mainRow">
                                <Col xl={{span:16, offset:0}} className="projectCols">
                                    <img onClick={()=>scrollToRef(myRef)} id="projectImage" src={section_1}/>
                                </Col>
                            </Row>
                        </div>
                        <div id="projectInScroll">
                            <Row id="mainRow">
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
          <span  ref ={myRef} ><HomeColoredHeader title="我跟你的相同，就是我們都不同"/></span>
          <a href="/Sky-ch"><HoverImage className="home_image" hoverSrc ={sky_home_hover} src={sky_home} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <a href="/IAmDifferent-ch"><HoverImage className="home_image" hoverSrc ={we_are_all_home_hover} src={we_are_all_home} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <a href=""><HoverImage className="home_image" hoverSrc ={chinese_home_hover} src={chinese_home} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <a href=""><HoverImage className="home_image" hoverSrc ={mirror_home_hover} src={mirror_home} style={{width:'100%', height:"auto"}}></HoverImage></a>

        <span  ref ={myRef2} ><HomeColoredHeader2 title="口罩之說 " image={homepage_placeholder_lg}/></span>
          <a href=""><HoverImage className="home_image" hoverSrc ={otherside_home_hover} src={otherside_home} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <a href=""><HoverImage className="home_image" hoverSrc ={apple_home_hover} src={apple_home} style={{width:'100%', height:"auto"}}></HoverImage></a>
          <a href=""><HoverImage className="home_image" hoverSrc ={people_and_mask_hover} src={people_and_mask} style={{width:'100%', height:"auto"}}></HoverImage></a>

          {/*}  <SponsorImgSlider id="sponsorSlider"/>*/}
        </div>
        <div id="homeThirdSectionMobile">
            <HomeColoredHeader title="我跟你的相同，就是我們都不同"/>
            <HomeMobileProject url="/Sky-ch"type="線上互動" title="頭頂同一片天計畫" image={sky_online_mobile}/>
            <HomeMobileProject url="/IAmDifferent-ch" type="線上互動" title="共同面對的我們" image={diff_online_mobile}/>
            <HomeMobileProject url="" type="數位創作" title="「趣」中國化" image={chinese_mobile}/>
            <HomeMobileProject url="" type="插畫創作" title="鏡子" image={mirror_mobile}/>
            <HomeColoredHeader title="口罩之說" image={homepage_placeholder_lg}/>
            <HomeMobileProject url="" type="數位創作" title="一罩之隔" image={otherside_mobile}/>
            <HomeMobileProject url="" type="數位創作" title="保羅的蘋果" image={apple_mobile}/>
            <HomeMobileProject url="" type="素描創作" title="傲慢與偏見"image={mask_mobile}/>

        </div>
          <FooterCH></FooterCH>
        </div>
    )
}

export default Home2;
