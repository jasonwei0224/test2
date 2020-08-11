import React from 'react';
import ImgSlider from '../img_slider';
import { Container } from "react-bootstrap";
import ProgramInfo from '../programInfo';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import Second_Title_Bold from "../modules/Second_Title_Bold"
import MainContents_First from "../modules/MainContents_First"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import Button1 from "../modules/Button1";
import Footer from "../footer-temp";
import SkyImageGallery from "../skyImageGallery";
// import './sky.css'
import Slider from './img_slider_final_sky'


function Sky() {

  const goToForm=()=> {
    window.location='Sky';
  };

  var images = {image1, image2}

  return (
    <div>
      <Container fluid style={{padding:"0"}}>
        <Slider images={images}/>

        <ProgramInfo
          subtitle="I'm different, just like you!"
          title="SKY"
          artistName="Jessica Sung / Jessica Sung / Jessica Sung / Jessica Sung"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FSky&amp;src=sdkpreparse"
          color="#D9C739"
          ></ProgramInfo>

        <SkyImageGallery artist1="SUSAN POINT" artist2="SUSAN POINT" image1={image1} image2={image2}></SkyImageGallery>
        <SkyImageGallery artist1="LI NA KIM" artist2="WEN CHENG LEE" image1={image1} image2={image2}></SkyImageGallery>
        <SkyImageGallery artist1="CHARLIE WU" artist2="JESSICA SUNG" image1={image1} image2={image2}></SkyImageGallery>

        <MainContents_First contents="What is something that you can see when you look up, no matter wherever you are in the world? The sky is one constant no matter where you are and what time of day, it is there above the horizon."></MainContents_First>
        <MainContents_Middle contents="Working with photographers in Canada and Taiwan, Vancouver TAIWANfest presents Eight massive lanterns at šxʷƛ̓ənəq Xwtl'e7énḵ Square (formally known as Vancouver Art Gallery North Plaza) in downtown Vancouver. These images show that despite our geographical differences, we all look towards that same sky that looms over our heads, further reaffirming that we are all in this together. Sky is built on the concept of removing the influence of colour; by looking past our differences, we can see that we are one and the same. "></MainContents_Middle>
        <MainContents_Middle contents="In all that the world has gone through, the unchanging sky gives people a sense of hope and anticipation for the feeling of a normal day to come again. Furthermore, Indigenous teachings and stories about the sky can guide us in these times. By giving each image a background story, we can implore others to look to the sky and gain strength. "></MainContents_Middle>
        <Second_Title_Bold secondTitle="UNDER THE SAME SKY PROJECT" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title_Bold>
        <MainContents_Important contents="Be part of the art with our Under the same sky project. Follow us on social media to find out when to take a photo of the sky wherever you are globally and upload your photo for a chance to be featured. Click the link below for more details."></MainContents_Important>

        <Button1 onclick={goToForm} title="UPLOAD YOUR PHOTO" togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FSky&amp;src=sdkpreparse"></Button1>
      </Container>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default Sky;
