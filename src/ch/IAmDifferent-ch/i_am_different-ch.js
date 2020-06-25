import React from "react";
import CardGame_ch from "./cardGame-ch";
import styled from "@emotion/styled";
import different_img from "../../assets/Different.jpg";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProgramInfo from "../../programInfo";
import "./i_am_different-ch.css";
import Header from "../../header";
import { Link } from "react-router-dom";
// import NewsletterContactUs_ch from "./newsletterContactUs-ch";
import Footer from "../../footer-temp";

// function click(){
// FB.ui({
//    display: 'popup',
//    method: 'share',
//    href: 'https://developers.facebook.com/docs/',

function IAmDifferent() {
  const diffForm = <Link to="IAmDifferent"></Link>;
  // let NewsContact = styled.div`
  //   text-align: center;
  //   // background-color: yellow;
  // `;
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

  return (
    <div>
      <Container fluid>
        <Row>
            <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="image_col">
              <img className="main_image" src={different_img}/>
            </Col>
            {/* <CardGame /> */}
        </Row>
        <ProgramInfo
          subtitle="Game Interaction"
          title="I'M DIFFERENT JUST LIKE YOU"
          artistName="TAIWANfest"
          url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/"
          color="#D9C739"
        ></ProgramInfo>
        <Row>
          {/* <Col lg={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 2 }}> */}
          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
            <p className="instruction_title">About This Work:</p>
          </Col>
        </Row>

        <Row>
          {/* <Col lg={{ span: 6, offset: 3 }} xs={{ span: 6, offset: 2 }}> */}

          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}>
            <p className="instruction_body">
              {" "}
              CHINESE VERSION
              The first lesbian movie I loved was Heavenly Creatures, Peter
              Jackson’s sumptuous 1994 film starring a young Kate Winslet as a
              dangerously charismatic schoolgirl who enraptures a sallow
              classmate with her phantasmagoric fantasy world. In the end, they
              kill the classmate’s mother. At age fourteen, that squared with my
              concept of love: predicated on fantasy, eroticized by power
              imbalance, likely to end in murder—not so much that of anyone’s
              mother, but more likely of me, by the strength of my own whirling
              feelings.
            </p>{" "}
          </Col>
        </Row>
        <Row>
          <Col xl={{span:8, offset:2}} lg={{span:10, offset:1}} sm={{span:10, offset:1}} xs={{span:10, offset:1}}
            style={{ marginTop: "80px", marginBottom: "5%" }}
            className="contents"
          >
            <p>
              {" "}
              The first lesbian movie I loved was Heavenly Creatures, Peter
              Jackson’s sumptuous 1994 film starring a young Kate Winslet as a
              dangerously charismatic schoolgirl who enraptures a sallow
              classmate with her phantasmagoric fantasy world. In the end, they
              kill the classmate’s mother. At age fourteen, that squared with my
              concept of love: predicated on fantasy, eroticized by power
              imbalance, likely to end in murder—not so much that of anyone’s
              mother, but more likely of me, by the strength of my own whirling
              feelings.
            </p>{" "}
            <p>
              {" "}
              A year later, it was The Incredibly True Adventures of Two Girls
              in Love, Maria Maggenti’s considerably less gothic tale of high
              school senior Randy (a young, butch Tina from The L Word), who has
              been sleeping with an older, married woman when she meets Evie, a
              rich and popular girl who stops at the gas station where Randy
              works. The movie ends with the two kissing amid a chaotic muddle
              of class tension, homophobic friends, and angry parents and school
              administrators. It was a perfect anthem for me at age fifteen, as
              I had recently begun making out with my rich best friend and was
              the only out kid in my high school class.{" "}
            </p>
          </Col>
        </Row>
        <Row>
          {/* <Col lg={{ span: 8, offset: 4 }} style={{ marginBottom: "10%" }}> */}
          <Col style={{ marginBottom: "50px"}} xl={{span:5, offset:4}} lg={{span:8, offset:2}}sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
            <Button
              href="#IAmDifferentForm-ch"
              bsPrefix="upload_button" >
              UPLOAD FRONT-LINE HERO PHOTO

              {/* <Link to="/IAmDifferentForm" className="form_link">
                UPLOAD FRONT-LINE HERO PHOTO
              </Link> */}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col style={{ marginBottom: "50px" }} xl={{span:4, offset:4}} lg={{span:8, offset:2}}sm={{span:10, offset:1}}xs={{span:10, offset:1}}>
            <Button bsPrefix="share_button" variant="primary" type="submit">SHARE WITH FRIENDS</Button>
          </Col>
        </Row>
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
        {/*}<NewsletterContactUs_ch />*/}
      </div>

      {/*}<GameDiv>
        <CardGame />
      </GameDiv>*/}
      <Footer></Footer>
    </div>
  );
}

export default IAmDifferent;