import React from 'react';
import ReactCompareImage from 'react-compare-image';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import { Container } from "react-bootstrap";
import ProgramInfo from '../programInfo';
import Second_Title from "../modules/Second_Title"
import MainContents_First from "../modules/MainContents_First"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import MainContents_Img from "../modules/MainContents_img"
import Footer from "../footer-temp";
import MobileShareButton from "../modules/mobileShareButton";
import MainContents_Important_With_Border from "../modules/MainContents_Important_with_border"
// import './pauls_apple.css'
import ladyhaohao from '../assets/Lady Hao Hao.jpg'
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_OneArtist from "../modules/MainContents_OneArtist"

function PaulsApple() {
  var text =`I am convinced that I am more powerful than the painters around me. I am not just saying it casually, but from the sincere feelings in my heart. For me, painting is not just to pursue a perfect image on the surface, but through a non-written creation, to express the absolute and truth behind perfection. These are the feelings expressed in Cezanne's letter to his mother.

The still life paintings of Paul Cezanne, the father of modern painting, created a visual balance and harmony of three-dimensional structure and color, light, shade, and reality. The artist's still life paintings have brought such precious creations to the world. Behind the priceless artworks, it implores us to see the "absolute" and "truth" behind perfection.

While mankind pursued fame and wealth, nature has been inadvertently destroyed. When people have not yet escaped the shadow of the pandemic, where will blind pursuit and desire lead us? Has nature’s pure way of life been tainted or does it still exist? In ignoring the reality that perfect apples left uneaten eventually rot, there is a contradiction in choosing the pleasure of drinking, over the need to protect others by using masks. In humankind’s current state of existence experiencing this challenge set by nature, does the creation of culture still have meaning?

The original Latin text of the still life painting is: Vanitas, 虛榮 in Chinese, and in English it means Vanity. Lady Hao Hao, who has learned to create in a variety of non-native languages, wants to see within the art of the masters, the significance shown in the reflection of before and after survival. "The world is so grandiose and short. We, as humans, are but mortal."
`
  return (
    <div>
      <Container fluid style={{padding:"0"}}>
        <ReactCompareImage
          leftImage={image1}
          rightImage={image2}
        />

        <ProgramInfo
          subtitle="Behind the Masks"
          title="PAUL'S APPLES"
          artistName="Lady Hao Hao"
          url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPaulsApple&amp;src=sdkpreparse"
          color="#D9C739"
        ></ProgramInfo>

        <Second_Title secondTitle="HOW TO INTERACT WITH THIS WORK" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
        <MainContents_Important_With_Border  style={{color:"#0C3866"}} contents=" Click Left and right to navigate the art works "></MainContents_Important_With_Border>

          <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
                        </MainContents_Middle_Adonis>
        <MainContents_OneArtist src={ladyhaohao} title="Lady Hao Hao" contents="asdf
                            Despite our geographical differences,
                            we all look towards that same sky that looms over our heads,asdf
                            Despite our geographical differences,
                            we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
                            together."></MainContents_OneArtist>
                          <div className="people_padding"></div>

        <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FPaulsApple&amp;src=sdkpreparse" ></MobileShareButton>
      </Container>

      <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>
    </div>
  );
}

export default PaulsApple;
