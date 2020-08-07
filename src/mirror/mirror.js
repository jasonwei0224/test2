import React from 'react';
import {Component} from 'react';
// import ButtonSkinColor from './mirror/ButtonSkinColor';
import './Mirror.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from'@fortawesome/free-solid-svg-icons';
import { faChevronRight } from'@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap';
import image1 from '../assets/image1.jpg';
import ProgramInfo from "../programInfo";
import Second_Title from "../modules/Second_Title"
import MainContents_Middle from "../modules/MainContents_Middle"
import MainContents_Important from "../modules/MainContents_Important"
import Footer from '../footer-temp';
import MobileShareButton from "../modules/mobileShareButton";
import MainContents_img from "../modules/MainContents_img";
import doctor from "../assets/doctor.jpg";
import firefighter from "../assets/firefighter.jpg";
import MainContetn_TwoPic from "../modules/MainContent_TwoPic";
import MirrorBird from "./mirrorBird"
import MainContents_Middle_Adonis from "../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../modules/MainContents_Important_with_border"
import MainContents_OneArtist from "../modules/MainContents_OneArtist"
import ladyhaohao from '../assets/Lady Hao Hao.jpg'

class Mirror extends Component {

    render() {
      var text = `Like everything that is part of nature, skin is a gift people are given, and the colour tones were influenced by the places we lived, the sunlight we received or the weather we got. Differences in skin colour offer a convenient way to see people. Since when, did people turn these natural protectors into weapons to harm others?

Follow the pigeon within the paintings as it travels through our everyday life. Picasso once used pigeons in his works to express people's longing for peace. Equality shouldn’t be so difficult to achieve because it is just like the air we can’t breath without. “I’m different, just like you.” Our differences are what make us all unique.

Yen-Chun Lu of Taiwan uses the reflections of mirrors to show the sceneries and the stories that we might take for granted as we hope to connect and reflect on those often forgotten realities. When what has been hidden in the reflection of the mirror can no longer be hidden, any attempt to cover it up can make a conscious person feel distorted or isolated. No one wants to feel left out or alone, regardless of the intention behind it.

An island in the middle of the ocean could be deemed insignificant or easily sacrificed as the world chases all things big and fast; when people are left with a moment to re-examine their past behaviours, they can finally discover that the island’s importance and beauty had been greatly ignored or overlooked.
`
        return (
            <div className='mirror'>

            <Container fluid>
                <MirrorBird></MirrorBird>

            <ProgramInfo
              id="test"
              subtitle="Illustration"
              title="Mirroring"
              artistName="Artist: Mina Lu"
              url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FMirror&amp;src=sdkpreparse"
              color="#D9C739"/>
            <Second_Title secondTitle="HOW TO INTERACT WITH THIS WORK" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
            <MainContents_Important_With_Border  style={{color:"#0C3866"}} contents=" Click Left and right to navigate the art works "></MainContents_Important_With_Border>

              <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
              </MainContents_Middle_Adonis>
              <MainContents_OneArtist src={ladyhaohao} title="Mina Lu" contents="asdf
                  Despite our geographical differences,
                  we all look towards that same sky that looms over our heads,asdf
                  Despite our geographical differences,
                  we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
                  together."></MainContents_OneArtist>
                <div className="people_padding"></div>
            <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FMirror&amp;src=sdkpreparse"></MobileShareButton>
          </Container>

          <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>

            </div>
        );
    }
};

export default Mirror;
