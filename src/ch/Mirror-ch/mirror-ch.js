import React from 'react';
import {Component} from 'react';
// import ButtonSkinColor from './mirror/ButtonSkinColor';
import '../../mirror/Mirror.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from'@fortawesome/free-solid-svg-icons';
import { faChevronRight } from'@fortawesome/free-solid-svg-icons';
import {Container, Row, Col} from 'react-bootstrap';
import image1 from '../../assets/image1.jpg';
import ProgramInfo from "../programInfo-ch";
import Second_Title from "../../modules/Second_Title"
import MainContents_Middle from "../../modules/MainContents_Middle"
import MainContents_Important from "../../modules/MainContents_Important"
import FooterCH from '../footer-ch';
import MobileShareButton from "../../modules/mobileShareButton";
import MainContents_img from "../../modules/MainContents_img";
import doctor from "../../assets/doctor.jpg";
import firefighter from "../../assets/firefighter.jpg";
import MainContetn_TwoPic from "../../modules/MainContent_TwoPic";
import MirrorBird_ch from "./mirrorBird_ch"
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Important_With_Border from "../../modules/MainContents_Important_with_border"
import MainContents_OneArtistCH from "../../modules/MainContents_OneArtistCH"
import mina from '../../assets/人物照-Mina.jpg'
import Slider from '../../mirror/img_slider_final_mirror'
import slide1 from '../../assets/artist_taiwan_color.jpg';
import slide2 from '../../assets/doctor.jpg';
import slide3 from '../../assets/firefighter.jpg'
import slide4 from '../../assets/dancer.jpg'
import slide10 from '../../assets/child.jpg'
import MainContents_Important_With_Border_two_bolder_ch from "../../modules/MainContents_Important_with_border_two_bold_ch"

class Mirror extends Component {

    render() {
      var text = `人類身上薄薄的一層皮膚，代表著人的外貌，是人類解讀一個人，最簡便快速的一種識別方式。回到自然創造萬物生命的初始，膚色是大自然給予人類的饋贈，因為居住緯度、光照多寡、氣候炎寒的不同，賦予人類各異的膚色，作為天然的防罩保護自己；本該是心懷喜悅接下的自然之禮，曾幾何時卻被用作互相傷害的理由，成為遺憾痛苦的源頭。

隨著瀏覽畫作的視角移動，和平鴿陪著讀者在畫面流轉，畢卡索在20世紀戰事頻傳的歐洲，創作許多幅鴿子作品，乘載當時人們對和平的冀望，象徵平等與希望的訴求。平等不是一個遙不可及的名詞，平等猶如空氣，是不可或缺的可貴存在。「我們都不同，正是我們唯一的相同之處」，差異使我們生為一個獨特個體。

台灣藝術家盧妍均，從鏡子映射出每一種我們熟悉的模樣與身形，在不同的場景述說一個同時發生在你我身上的故事。當人獨自面對鏡子的時候，映照出來的是不想讓他人看見，卻無法對自己隱藏的內在；鏡中人物的孤獨好似一座孤島，隱匿於世界之洋難以被看見，有時又被刻意忽略或遺忘，不受任何人重視。

但是，若人們選擇正視汪洋中的孤島，將獲得初探世外桃源般的驚豔：島嶼有它遺世獨立的美麗，有著溫暖的人情感動，島上人們懷抱與世界連結的渴望之心！是時候，該停下來問自己，我們是否遺忘了什麼?
`

var artistText=`專精紙藝藝術多年，跳脫傳統繁複的結構設計，保持紙雕的精緻，融入創意的巧思。近來以策展形式呈現全台各地友善小農的深度土地故事，以及食品與天然環境之間的關係，期望帶動更多人用吃的行為創造更大的影響力。

創作的過程裡，曾運用立體隧道書的概念呈現一條返鄉的路，探討自己、自然和塵土之間的關係。重返自己的故鄉貢寮，曾以創作響應世界糧食日、地球公民基金會等活動，試圖以設計藝術專長讓社會更好，相聚所有人的力量一起發聲。

在創作裡不難看見，她熱愛的台灣一直深深地影響著她，並且被她重視著。台灣、加拿大與她之間越來越多的重疊與相似，都讓她更容易用創作為兩個國度找到一個美麗的對話共同表達。
`
var instruction1 = `此作品一共有五張創作，請用滑鼠點擊圖片來體驗藝術家想告訴你的訊息
若回答正確時，將會播放音樂，若回答錯誤，「重看一次」按鈕將會閃爍`
var images = [slide1, slide2, slide3, slide4, slide10]
var t = `手機 / 平板`
        return (
            <div className='mirror'>

            <Container fluid>
                <MirrorBird_ch></MirrorBird_ch>

            <ProgramInfo
              id="test"
              subtitle="插畫創作"
              title="鏡子"
              artistName="創作：盧妍均"
              url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FMirror&amp;src=sdkpreparse"
              color="#D9C739"/>
            <Second_Title secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
              <MainContents_Important_With_Border_two_bolder_ch  style={{color:"#0C3866"}} bold="桌機: " contents={instruction1}
              bold2={t} contents2="此作品一共有五張創作，互動作品必須使用桌機電腦觀看，手機與平板介面請點擊左右兩邊的圓點觀看不同創作"></MainContents_Important_With_Border_two_bolder_ch>
    <MainContents_Middle_Adonis style={{color:"#0C3866"}} font="adonis-web" contents={text}>
              </MainContents_Middle_Adonis>

              <MainContents_OneArtistCH src={mina} title="盧妍均" contents={artistText}></MainContents_OneArtistCH>

                <div className="people_padding"></div>
            <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FMirror&amp;src=sdkpreparse"></MobileShareButton>
          </Container>

          <FooterCH></FooterCH>

            </div>
        );
    }
};

export default Mirror;
