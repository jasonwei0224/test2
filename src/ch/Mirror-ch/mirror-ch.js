import React from 'react';
import {Component} from 'react';
// import ButtonSkinColor from './mirror/ButtonSkinColor';
import '../../mirror/Mirror.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from'@fortawesome/free-solid-svg-icons';
import { faChevronRight } from'@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap';
import image1 from '../../assets/image1.jpg';
import ProgramInfo from "../../programInfo";
import Second_Title from "../../modules/Second_Title"
import MainContents_Middle from "../../modules/MainContents_Middle"
import MainContents_Important from "../../modules/MainContents_Important"
import FooterCH from '../footer-ch';
import MobileShareButton from "../../modules/mobileShareButton";
import MainContents_img from "../../modules/MainContents_img";
import doctor from "../../assets/doctor.jpg";
import firefighter from "../../assets/firefighter.jpg";
import MainContetn_TwoPic from "../../modules/MainContent_TwoPic";
import MirrorBird from "../../mirror/mirrorBird"
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../../modules/MainContents_Important_with_border"
import MainContents_OneArtistCH from "../../modules/MainContents_OneArtistCH"
import ladyhaohao from '../../assets/Lady Hao Hao.jpg'
import Slider from '../../mirror/img_slider_final_mirror'
import slide1 from '../../assets/artist_taiwan_color.jpg';
import slide2 from '../../assets/doctor.jpg';
import slide3 from '../../assets/firefighter.jpg'

class Mirror extends Component {

    render() {
      var text = `人類身上薄薄的一層皮膚，代表著人的外貌，是人類解讀一個人，最簡便快速的一種識別方式。回到自然創造萬物生命的初始，膚色是大自然給予人類的饋贈，因為居住緯度、光照多寡、氣候炎寒的不同，賦予人類各異的膚色，作為天然的防罩保護自己；本該是心懷喜悅接下的自然之禮，曾幾何時卻被用作互相傷害的理由，成為遺憾痛苦的源頭。

隨著瀏覽畫作的視角移動，和平鴿陪著讀者在畫面流轉，畢卡索在20世紀戰事頻傳的歐洲，創作許多幅鴿子作品，乘載當時人們對和平的冀望，象徵平等與希望的訴求。平等不是一個遙不可及的名詞，平等猶如空氣，是不可或缺的可貴存在。「我們都不同，正是我們唯一的相同之處」，差異使我們生為一個獨特個體。

台灣藝術家盧妍均，從鏡子映射出每一種我們熟悉的模樣與身形，在不同的場景述說一個同時發生在你我身上的故事。當人獨自面對鏡子的時候，映照出來的是不想讓他人看見，卻無法對自己隱藏的內在；鏡中人物的孤獨好似一座孤島，隱匿於世界之洋難以被看見，有時又被刻意忽略或遺忘，不受任何人重視。

但是，若人們選擇正視汪洋中的孤島，將獲得初探世外桃源般的驚豔：島嶼有它遺世獨立的美麗，有著溫暖的人情感動，島上人們懷抱與世界連結的渴望之心！是時候，該停下來問自己，我們是否遺忘了什麼?
`
var images = [slide1, slide2, slide3]
        return (
            <div className='mirror'>

            <Container fluid>
                <MirrorBird></MirrorBird>
                  <Slider className="test" images={images}></Slider>

            <ProgramInfo
              id="test"
              subtitle="插畫創作"
              title="鏡子"
              artistName="創作：盧妍均"
              url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FMirror&amp;src=sdkpreparse"
              color="#D9C739"/>
            <Second_Title secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
            <MainContents_Important_With_Border  style={{color:"#0C3866"}} contents=" Click Left and right to navigate the art works "></MainContents_Important_With_Border>

              <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
              </MainContents_Middle_Adonis>
              <MainContents_OneArtistCH src={ladyhaohao} title="盧妍均" contents="asdf
                  Despite our geographical differences,
                  we all look towards that same sky that looms over our heads,asdf
                  Despite our geographical differences,
                  we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
                  together."></MainContents_OneArtistCH>
                <div className="people_padding"></div>
            <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FMirror&amp;src=sdkpreparse"></MobileShareButton>
          </Container>

          <FooterCH></FooterCH>

            </div>
        );
    }
};

export default Mirror;
