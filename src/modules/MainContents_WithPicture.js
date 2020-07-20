import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './MainContents.css'

const MainContents_WithPicture = (props) => {
    return (
        <div>
            <Row className="mainSection_Row">
                <Col xl={{span:4, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}} style={{marginRight:"0px",paddingRight:"0px"}}>
                    <img src={props.src} className="mainSection_Img2"></img>
                    <div id="mainSection_withPicture_div" style={{width:"45px", height:"50px", backgroundColor:"red"}}></div>
                    
                </Col>
                <Col id="mainSection_withPicture_Col" xl={{span:4}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}} style={{marginBottom:"100px"}}>
                    <p style={{display:"inline"}}>{props.contents}
                        <br/>
                    </p>  
                </Col>
                
            </Row>
        </div>
    );
}

export default MainContents_WithPicture;

