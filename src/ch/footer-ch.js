import React from 'react';
import './footer-ch.css';
import { Container, Button, Row, Col, Form } from 'react-bootstrap';

const FooterCH = (props) => {
  async function submitForm(e){
    e.preventDefault();
    console.log("submit");
    var formData = new FormData();
    formData.append('contact_name', document.getElementById('contact_name').value)
    formData.append('cotact_email', document.getElementById('contact_email').value)
    formData.append('message', document.getElementById('contact_message').value)
    console.log(formData);
    const response = await fetch('footer_mail.php', {
        method: 'POST',
        body: formData,
      })
    .then(data => data.text())
    .then(data=>{
      if(data ==="success"){
        alert("Submission Successful!");
        document.getElementById('contact_message').value='';
      }else if(data==="failed"){
        alert("Please try again");
      }
    })
  }

  async function subscribe(e){
    e.preventDefault();
    var formData = new FormData();
    formData.append('EMAIL',document.getElementById('newsletter_email').value);
    formData.append('NAME',document.getElementById('newsletter_name').value);
    const response = await fetch('subscribe_mail.php',{
      method: 'POST',
      body: formData,
    })
    alert("Thanks for Subscribing");
    document.getElementById('newsletter_email').value='';
    document.getElementById('newsletter_name').value='';
  }
    return (
      <Container fluid>
        {/*<Row className="footer_form_container_ch">
          <Col xl={{span:8, offset:2}} className="footer_form_border_ch"></Col>
          <Col  className ="footer_newsletter_container_ch"xl={{span:4, offset:2}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
            <Row><Col className="footer_title_ch">訂閱活動訊息</Col></Row>
            <Row><Col className="footer_subtitle_ch">接收即時通知與更多服務</Col></Row>
            <Row><Form.Control id='newsletter_name' className='newsletter_name_ch' type="text" placeholder="姓名" required size="lg"></Form.Control></Row>
            <Row><Form.Control id='newsletter_email'className='newsletter_email_ch' type="email" placeholder="電子郵件" required size="lg"></Form.Control></Row>
            <Row><Col className="footer_button_row_ch"><Button  bsPrefix="footer_submit_btn_ch" className="footer_subscribe_btn_ch">訂閱</Button></Col></Row>
          </Col>

          <Col className="footer_contact_container_ch" xl={{span:4, offset:0}} lg={{span:10, offset:1}} md={{span:10, offset:1}}  xs={{span:10, offset:1}}>
            <Row><Col className="footer_title_ch">與我們連絡</Col></Row>
            <Row><Col className="footer_subtitle_ch">表演 / 攤商 / 贊助合作機會</Col></Row>
            <Row><Col><Form.Control id="contact_name" className='contact_name_ch' type="text" placeholder="姓名"required size="lg"></Form.Control></Col>
                  <Col><Form.Control id="contact_email" className='contact_email_ch' type="email" placeholder="電子郵件"required size="lg"></Form.Control></Col>
            </Row>
            <Row><Col className="footer_textarea_container_ch">
            <Form.Control id="contact_message" className='contact_message_ch'type="text"  as="textArea" placeholder="請告訴我們你的想法!" required size="lg"></Form.Control>
          </Col></Row>
            <Row><Col className="footer_button_row_ch"><Button bsPrefix="footer_submit_btn_ch" className="footer_submit_btn_ch">送出</Button></Col></Row>
        </Col>
      </Row>*/}
        <Row className="footer_ch" >
          <Col xl={{span:12, offset:0}} style={{textAlign:"center"}}>
            <p className="footer_content_ch">&copy; 2020 多倫多臺灣同鄉會 (TCAT)</p>
          </Col>
        </Row>
      </Container>
    )
}

export default FooterCH;
