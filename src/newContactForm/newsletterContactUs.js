import React from "react";
import styled from "@emotion/styled";
import "./newsletterContactUs.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";
// import MailchimpSubscribe from "react-mailchimp-subscribe";

import Footer from "../footer-temp";

const NewsletterContactUs = () => {
  async function submitForm(e) {
    e.preventDefault();
    console.log("submit");
    var formData = new FormData();
    formData.append(
      "contact_name",
      document.getElementById("contact_name").value
    );
    formData.append(
      "contact_email",
      document.getElementById("contact_email").value
    );
    formData.append(
      "message",
      document.getElementById("contact_message").value
    );
    console.log(formData);
    const response = await fetch("footer_mail.php", {
      method: "POST",
      body: formData,
    })
      .then((data) => data.text())
      .then((data) => {
        if (data === "success") {
          alert("Submission Successful!");
          document.getElementById("contact_message").value = "";
        } else if (data === "failed") {
          alert("Please try again");
        }
      });
  }

  async function subscribe(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("EMAIL", document.getElementById("newsletter_email").value);
    formData.append("NAME", document.getElementById("newsletter_name").value);
    const response = await fetch("subscribe_mail.php", {
      method: "POST",
      body: formData,
    });
    alert("Thanks for Subscribing");
    document.getElementById("newsletter_email").value = "";
    document.getElementById("newsletter_name").value = "";
  }
  let NC_Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 75%;
    margin-bottom: 20px;
  `;
  let NC_Box = styled.div`
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 300px;
    border-top: 2px solid #d0d0d0;
    padding-top: 20px;
    margin-bottom: 40px;
  `;
  let Newsletter = styled.form`
    // background-color: white;
    // border-right: 2px;
    // border-right-style: solid;
    // border-right-color: #d0d0d0;
    flex: 1;
  `;
  let ContactUs = styled.form`
    flex: 1;
  `;
  let NC_Paragraph = styled.p`
    font-family: "sofia-pro", Sans-serif;
  `;
  let NC_Button = styled.input`
    background-color: lightgrey;
    border-radius: 25px;
    border: none !important;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 12%;
    padding-right: 12%;
    position: absolute;
    bottom: 0;
    font-family: "sofia-pro", Sans-serif;
    margin-top: 20px;
    color: #606060;
    font-weight: bold;
  `;
  let NC_Input = styled.input`
    text-align: center;
    border-radius: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 60%;
    color: black;
    border-color: #d0d0d0;
    border-style: solid;
    margin-bottom: 10px;
    outline: none;
  `;
  let NC_TextBox = styled.textarea`
    width: 80%;
    height: 25%;
    border-radius: 25px;
    border: 2px;
    border-color: #d0d0d0;
    border-style: solid;
    resize: none;
    padding-top: 10px;
    padding-bottom: 30px;
    outline: none;
    ::-webkit-input-placeholder {
      text-align: center;
      vertical-align: middle;
    }
    -moz-placeholder {
      text-align: center;
    }
    ::-moz-placeholder {
      text-align: center;
    }
    :-ms-input-placeholder {
      text-align: center;
    }
  `;

  const [resetContactUsArea, setResetContactTextArea] = useState("");
  const handleEmailSubmission = () => {
    setResetContactTextArea("");
  };

  return (
    <NC_Container fluid>
      <NC_Box className="box">
        <Newsletter className="newsletter">
          <NC_Paragraph>JOIN OUR NEWSLETTER</NC_Paragraph>
          <NC_Paragraph>For Early Announcements And More</NC_Paragraph>

          <NC_Input
            id="newsletter_name"
            type="text"
            placeholder="NAME"
            name="FNAME"
          />
          <NC_Input
            id="newsletter_email"
            type="text"
            placeholder="EMAIL"
            name="EMAIL"
          />

          <NC_Button
            className="NC_btn"
            type="submit"
            value="Join"
            onClick={subscribe}
          />
        </Newsletter>

        <ContactUs
          className="contact_us"
          // action="mailto:generaltestemailhelloworld@gmail.com"
          // method="post"
          // enctype="text/plain"
        >
          <NC_Paragraph>CONTACT US</NC_Paragraph>
          <NC_Paragraph>
            PERFORMANCE / VENDOR / SPONSORSHIP OPPORTUNITIES
          </NC_Paragraph>
          <NC_TextBox
            id="contactUsText"
            // type="text"
            placeholder="TELL US MORE..."
            // value={resetContactUsArea}
            style={{ height: 80, wordWrap: "-moz-initial" }}
          />
          {/* <Button onClick={() => setContactUs(alert("Submission Successful!"))}>
            SUBMIT
          </Button> */}
          <NC_Button
            type="submit"
            value="Submit"
            onClick={handleEmailSubmission}
          />
        </ContactUs>
      </NC_Box>
    </NC_Container>
  );
};

export default NewsletterContactUs;
