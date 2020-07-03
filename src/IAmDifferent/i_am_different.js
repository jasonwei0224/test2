import React from "react";
import CardGame from "./cardGame";
import styled from "@emotion/styled";
import different_img from "../assets/Different.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProgramInfo from "../programInfo";
import "./i_am_different.css";

import Header from "../dummy/header";

import { Link } from "react-router-dom";
import NewsletterContactUs from "./newsletterContactUs";
import Footer from "../footer-temp";
import Button2 from "../modules/Button2";
import Second_Title from "../modules/Second_Title"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import MainContents_WithBold_Impt from "../modules/MainContents_WithBold_Impt"
import MainContents_With_Bold from "../modules/MainContents_WithBold"



function IAmDifferent() {
  const diffForm = <Link to="IAmDifferent"></Link>;

  let Body = styled.div`
    text-align: center;
  `;
  let GameDiv = styled.div`
    width: 100%;
    // min-height: 250px;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: yellow;
  `;
  const goToForm=()=> {
    window.location='#/IAmDifferentForm';
  };

  return (
    <div>
      <Container fluid>
        <Row>
            <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
              <img className="main_image" src={different_img}/>
            </Col>
        </Row>
        <ProgramInfo
          subtitle="I'm different, just like you"
          title="WE ARE ALL IN THIS TOGETHER"
          artistName="TAIWANfest"
          url="https://www.facebook.com/sharer/sharer.php?u=https://gallery.torontotaiwanfest.ca/#/IAmDifferent"
          color="#D9C739"
        ></ProgramInfo>

      <Second_Title secondTitle="About This Work:" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>


        <MainContents_WithBold_Impt   contents="" bold='“I’m different, just like you! - We are all in this together” ' contents2="is an interactive exhibition piece that grows as people continue to contribute to it.
              Through these most recent difficult times, we have all come to rely on the skills and hard work of the front-line workers who have all come from different backgrounds to serve their communities.
              This piece serves to highlight these essential workers and deliver the message that though we may look different and share varied values, We are all in this together."></MainContents_WithBold_Impt>


            <MainContents_With_Bold contents="Racism has no place in the fight against any pandemic and the consequence of racially motivated actions is perhaps more deadly than the virus because it is human against human.
               The COVID-19 pandemic has proved that the virus sees no boundaries and the potential cure can also come from anywhere to save lives for all.
               Despite coming from a range of backgrounds and looking different, these professionals all do their jobs to work on the problems our world is facing, embodying the message"
               bold=' “I’m different, just like you!” ' contents2="Everyone should be proud of their differences and the only certainty for the world is that everyone is different regardless of birthplaces, lifestyles, skin colours or languages spoken."></MainContents_With_Bold>



        <Button2 onclick={goToForm} title="UPLOAD FRONT-LINE HERO PHOTO" togoUrl="https://gallery.torontotaiwanfest.ca/#/IAmDifferent"></Button2>

      </Container>
      <div
        lg={{ span: 3, offset: 3 }}
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2%",
          alignItems: "center",
        }}
      >
      </div>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default IAmDifferent;
