import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './MainContents.css'

const MainContents_OneArtist = (props) => {
    return (
        <div className="maincontent_withpic">
            <Row className="mainSection_Row">
                <Col xl={{span:2, offset:2}} lg={{span:4, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}} style={{marginRight:"0px",paddingRight:"0px"}}>
                    <img src={props.src} className="mainSection_Img2"></img>
                </Col>
                <Col xl={{span:6, offset:0}} lg={{span:8, offset:0}} md={{span:10, offset:1}}  xs={{span:10, offset:1}} className="main_content_text_column" >
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
