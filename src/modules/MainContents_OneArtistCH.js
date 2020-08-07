import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './MainContents.css'
import Second_Title from './Second_Title'

const MainContents_OneArtist = (props) => {
    return (
        <div className="twoArtistPic">
          <Second_Title secondTitle="藝術家簡介"></Second_Title>
            <Row className="mainSection_Row">
                <Col xl={{span:2, offset:2}} lg={{span:5, offset:1}} md={{span:5, offset:1}} sm={{span:5, offset:1}}  xs={{span:5, offset:1}} style={{marginRight:"0px",paddingRight:"0px"}}>
                    <img src={props.src} className="mainSection_Img2"></img>
                </Col>
              </Row>
              <Row className="mainSection_Row">
                <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}} className="picture_description_main_content_oneartist" >
                    <p className="picture_description_title">{props.title}</p>
                    <p className="picture_description_main_content">{props.contents}
                        <br/>
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default MainContents_OneArtist;
