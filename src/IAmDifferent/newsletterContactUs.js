import React from "react";
import styled from "@emotion/styled";
import "./newsletterContactUs.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const NewsletterContactUs = () => {
  let Container = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 75%;
  `;
  let Box = styled.div`
    justify-content: space-around;
    align-items: center;
    width: 100%;
  `;
  let Newsletter = styled.div`
    background-color: yellow;
    flex: 1;
  `;
  let ContactUs = styled.div`
    flex: 1;
  `;
  let Button = styled.button`
    background-color: lightgrey;
    border-radius: 25px;
    padding-left: 12%;
    padding-right: 12%;
    position: absolute;
    bottom: 0;
  `;
  let Paragraph = styled.p``;
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
  const [newsletter, setNewsLetter] = useState([
    {
      name: "",
      email: "",
    },
  ]);

  const [contactUs, setContactUs] = useState("");
  const updateContactUsState = () => {
    const contactUs = [...contactUs];
    contactUs.tellUsMore = document.getElementById("contact").value;
    setContactUs(contactUs);
  };

  return (
    <Container>
      <Box className="box">
        <Newsletter className="newsletter">
          <Paragraph>JOIN OUR NEWSLETTER</Paragraph>
          <Paragraph>For Early Announcements And More</Paragraph>
          <Input type="text" placeholder="NAME" />
          <Input type="text" placeholder="EMAIL" />
          <Button>JOIN</Button>
        </Newsletter>
        <ContactUs className="contact_us">
          <Paragraph>CONTACT US</Paragraph>
          <Paragraph>
            PERFORMANCE / VENDOR / SPONSORSHIP OPPORTUNITIES
          </Paragraph>
          <TextBox
            id="contact"
            type="text"
            placeholder="TELL US MORE..."
            style={{ height: 80, wordWrap: "-moz-initial" }}
          />
          <Button
            onClick={() =>
              setContactUs(alert(document.getElementById("contact").value))
            }
          >
            SUBMIT
          </Button>
        </ContactUs>
      </Box>
    </Container>
  );
};

export default NewsletterContactUs;
