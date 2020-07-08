import React from 'react';
import ImgSlider from '../img_slider';
import { Container } from "react-bootstrap";
import ProgramInfo from '../programInfo';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import Second_Title from "../modules/Second_Title"
import MainContents_First from "../modules/MainContents_First"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import Button1 from "../modules/Button1";
import Footer from "../footer-temp";
import SkyImageGallery from "../skyImageGallery";
// import './sky.css'


function Sky() {

  const goToForm=()=> {
    window.location='#/Sky';
  };

  return (
    <div>
      <Container fluid style={{padding:"0"}}>
        <ImgSlider/>

        <ProgramInfo 
          subtitle="Installation art" 
          title="SKY" 
          artistName="Jessica Sung" 
          url="https://www.facebook.com/sharer/sharer.php?u=https://www.acsea.ca/"
          color="#D9C739"
          ></ProgramInfo>
        
        <SkyImageGallery artist1="SUSAN POINT" artist2="SUSAN POINT" image1={image1} image2={image2}></SkyImageGallery>
        <SkyImageGallery artist1="LI NA KIM" artist2="WEN CHENG LEE" image1={image1} image2={image2}></SkyImageGallery>
        <SkyImageGallery artist1="CHARLIE WU" artist2="JESSICA SUNG" image1={image1} image2={image2}></SkyImageGallery>    
        
        <MainContents_First contents="The first lesbian movie I loved was Heavenly Creatures, Peter Jacksonn's sumptuous 1994 fils starring a young Kate Winslet as a dangerously charismatic schoolgirl who enraptures a sallow classmate with her phantasmagoric fantasy world. In the end, they kill the classmate's mother. At age fourteen, that squared with my concept of love: predicated on fantasy, eroticized by power imbalance, likely to end in murder - not so much that of anyone's mother, but more likely of me, by the strength of my own whirling feelings."></MainContents_First>
        <MainContents_Middle contents="A year later, it was The Incredibly True Adventures of Two Girls in Love, Maria Maggenti's considerably less gothic tale of high school senior Randy (a young, butch Tina from The L Word), who has been sleeping with an older, married woman when she meets Evie, a rich and popular girl who stops at the gas station where Randy works. The movie ends with the two kissing amid a chaotic muddle of class tension, homophobic friends, and angry parents and school administrators. It was a perfect anthem for me at age fifteen, as I had recently begun making out with my rich best friend and was the only out kid in my high school class."></MainContents_Middle>
        <MainContents_Middle contents="After that came Bound, Chasing Amy, All Over Me, High Art, and But I'm a Cheerleader. I watched and re-watched all of these movies because they showed me myself. Not only because I was queer and prone to phantasmagoric imaginings - as well as to listening to Patti Smith on repeat, wearing stilettos, and heroin addicition - but also because they reflected and suggested my vision of love: as sexy and codependent, forged in opposition to some external conflict. It's no surprise that both I and the movies I worshiped relied upon a certain kind of high-femme, drug-addled, ambisexual Riot Grrrl iconography. After all, we grew out of the same '90s post-AIDS homophobia, Cindy Crawford-cum-heroin chic, third-wave feminist stew."></MainContents_Middle>
        <Second_Title secondTitle="UNDER THE SAME SKY PROJECT" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
        <MainContents_Important contents="This province's condo insurance market is unhealthy and has saddled owners with sudden increases of an estimated 50 percent in Metro Vancouver, according to a three-month investigation by the B.C. Financial Services Authority."></MainContents_Important>

        <Button1 onclick={goToForm} title="UPLOAD YOUR PHOTO" togoUrl="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2Fsky&amp;src=sdkpreparse"></Button1>
      </Container>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default Sky;
