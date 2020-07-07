import React from 'react';
import ImgComparison from './img_comparison';
import { Container, Row, Col, Button } from "react-bootstrap";
// import { SocialIcon } from 'react-social-icons';
import ProgramInfo from './programInfo';
import Second_Title from "./modules/Second_Title"
import MainContents_First from "./modules/MainContents_First"
import MainContents_Middle from "./modules/MainContents_Middle"
import MainContents_Important from "./modules/MainContents_Important"
import Footer from "./footer-temp";
import './pauls_apple.css'


function PaulsApple() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={{ span: 12, offset: 0 }} xs={{ span: 12, offset: 0 }} bsPrefix="pauls_image_col">
            <img className="pauls_main_image" src="https://via.placeholder.com/600x300"/>
            {/* <ImgComparison className="pauls_main_image"/> */}
          </Col>
        </Row>

        <ProgramInfo 
          subtitle="Behind the Masks" 
          title="PAUL'S APPLES" 
          artistName="Lady Hao Hao" 
          url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/" 
          color="#D9C739"
        ></ProgramInfo>

        <Second_Title secondTitle="About This Work:" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
        <MainContents_Important contents="This province's condo insurance market is unhealthy and has saddled owners with sudden increases of an estimated 50 percent in Metro Vancouver, according to a three-month investigation by the B.C. Financial Services Authority."></MainContents_Important>
        
        <MainContents_First contents="The first lesbian movie I loved was Heavenly Creatures, Peter Jacksonn's sumptuous 1994 fils starring a young Kate Winslet as a dangerously charismatic schoolgirl who enraptures a sallow classmate with her phantasmagoric fantasy world. In the end, they kill the classmate's mother. At age fourteen, that squared with my concept of love: predicated on fantasy, eroticized by power imbalance, likely to end in murder - not so much that of anyone's mother, but more likely of me, by the strength of my own whirling feelings."></MainContents_First>
        <img src="https://via.placeholder.com/600x300" alt="placeholder" className="image"></img>
        <MainContents_Middle contents="A year later, it was The Incredibly True Adventures of Two Girls in Love, Maria Maggenti's considerably less gothic tale of high school senior Randy (a young, butch Tina from The L Word), who has been sleeping with an older, married woman when she meets Evie, a rich and popular girl who stops at the gas station where Randy works. The movie ends with the two kissing amid a chaotic muddle of class tension, homophobic friends, and angry parents and school administrators. It was a perfect anthem for me at age fifteen, as I had recently begun making out with my rich best friend and was the only out kid in my high school class."></MainContents_Middle>
        <img src="https://via.placeholder.com/600x300" alt="placeholder" className="image"></img>
        <MainContents_Middle contents="After that came Bound, Chasing Amy, All Over Me, High Art, and But I'm a Cheerleader. I watched and re-watched all of these movies because they showed me myself. Not only because I was queer and prone to phantasmagoric imaginings - as well as to listening to Patti Smith on repeat, wearing stilettos, and heroin addicition - but also because they reflected and suggested my vision of love: as sexy and codependent, forged in opposition to some external conflict. It's no surprise that both I and the movies I worshiped relied upon a certain kind of high-femme, drug-addled, ambisexual Riot Grrrl iconography. After all, we grew out of the same '90s post-AIDS homophobia, Cindy Crawford-cum-heroin chic, third-wave feminist stew."></MainContents_Middle>
      </Container>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default PaulsApple;
