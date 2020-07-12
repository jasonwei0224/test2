import React from "react";
import styled from "@emotion/styled";
import "./newsletterContactUs.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";
// import MailchimpSubscribe from "react-mailchimp-subscribe";




const NewsletterContactUs = () => {
  async function submitForm(e){
    e.preventDefault();
    console.log("submit");
    var formData = new FormData();
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
    console.log(response)
    alert("Thanks for Subscribing");
    document.getElementById('newsletter_email').value='';
    document.getElementById('newsletter_name').value='';

  }
  let Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 75%;
    margin-bottom: 20px;
  `;
  let Box = styled.div`
    justify-content: space-around;
    align-items: center;
    width: 100%;
  `;
  let Newsletter = styled.form`
    background-color: yellow;
    flex: 1;
  `;
  let ContactUs = styled.form`
    flex: 1;
  `;
  // let Button = styled.button`
  //   background-color: lightgrey;
  //   border-radius: 25px;
  //   padding-left: 12%;
  //   padding-right: 12%;
  //   position: absolute;
  //   bottom: 0;
  // `;
  let Paragraph = styled.p``;
  let Button = styled.input`
    background-color: lightgrey;
    border-radius: 25px;
    padding-left: 12%;
    padding-right: 12%;
    position: absolute;
    bottom: 0;
  `;
  let Input = styled.input`
    text-align: left;
    border-radius: 10px;
    width: 80%;
  `;
  let TextBox = styled.textarea`
    width: 90%;
    border-radius: 10px;
    border: 2px solid grey;
  `;

/*  const response = await fetch('footer_mail.php', {
    method: 'POST',
    body: formData
  })*/

  return (
    <Container>
      <Box className="box">
        <Newsletter className="newsletter">
          <Paragraph>JOIN OUR NEWSLETTER</Paragraph>
          <Paragraph>For Early Announcements And More</Paragraph>

          <Input id="newsletter_name" type="text" placeholder="NAME" name="FNAME"/>
          <Input id="newsletter_email"type="text" placeholder="EMAIL" name="EMAIL" />
          {/* <Button>JOIN</Button> */}
          <Button type="submit" value="subscribe" onClick={subscribe} />

        </Newsletter>
        {/* action="mailto:generaltestemailhelloworld@gmail.com"
         method="post"*/}
        <ContactUs
          className="contact_us"

          enctype="text/plain"
        >
          <Paragraph>CONTACT US</Paragraph>
          <Paragraph>
            PERFORMANCE / VENDOR / SPONSORSHIP OPPORTUNITIES
          </Paragraph>
          <TextBox
            id="contact_message"
            type="text"
            placeholder="TELL US MORE..."
            style={{ height: 80, wordWrap: "-moz-initial" }}
          />
          {/* <Button onClick={() => setContactUs(alert("Submission Successful!"))}>
            SUBMIT
          </Button> */}
          <Button type="submit" value="Submit" onClick={submitForm} />
        </ContactUs>
      </Box>
    </Container>
  );
};

export default NewsletterContactUs;
