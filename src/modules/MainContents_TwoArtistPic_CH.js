import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './MainContents.css'
import Second_Title from './Second_Title'
const MainContents_TwoArtistPic_ch = (props) => {
    return (
        <div className = "twoArtistPic">
          <Second_Title secondTitle="藝術家簡介"></Second_Title>
            <Row className="mainSection_Row">
                <Col xl={{span:2, offset:2}} md={{span:5, offset:1}}  xs={{span:4, offset:1}} style={{marginRight:"0px",paddingRight:"0px"}}>
                    <img src={props.pic1} className="mainSection_Img2"></img>

                </Col>
                <Col xl={{span:2, offset:0}} md={{span:5, offset:0}}  xs={{span:4, offset:0}} >
                  <img src={props.pic2} className="mainSection_Img2"></img>
                </Col>

            </Row>
            <Row className="mainSection_Row">
                  <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}} className="picture_description_main_content_twoartist" >
                      <p className="picture_description_title">{props.title1}</p>
                      <p className="picture_description_main_content">{props.contents1}
                      </p>
                  </Col>
              </Row>
            <Row className="mainSection_Row">
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}} className="picture_description_main_content_twoartist_bottom" >
                    <p className="picture_description_title">{props.title2}</p>
                    <p className="picture_description_main_content">{props.contents2}
                        <br/>
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default MainContents_TwoArtistPic_ch;
