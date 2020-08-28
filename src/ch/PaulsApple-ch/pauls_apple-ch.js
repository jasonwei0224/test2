import React from 'react';
import ImgComparison from '../../img_comparison';
// import { SocialIcon } from 'react-social-icons';
import ProgramInfo from '../programInfo-ch';
// import './pauls_apple-ch.css'
import {Container, Row, Col} from 'react-bootstrap';
import MainContents_Middle_Adonis from "../../modules/MainContents_Middle_Adonis"
import MainContents_Important from "../../modules/MainContents_Important"
import FooterCH from '../footer-ch';
import Second_Title from "../../modules/Second_Title"
import MainContents_Important_With_Border from "../../modules/MainContents_Important_with_border"
import MainContents_OneArtistCH from "../../modules/MainContents_OneArtistCH"
import MobileShareButton from "../../modules/mobileShareButton";
import ladyhaohao from '../../assets/Lady Hao Hao.jpg'
import ReactCompareImage from 'react-compare-image';
import image1 from '../../assets/paulsapples1.jpg';
import image2 from '../../assets/paulsapples2.jpg';

function PaulsApple_ch() {
  var text =`”我深信自己比周遭的畫家，都要來得有力量。我這可不是隨便說說的，而是出自內心真誠的感受。對我來說，繪畫並不只是要追求外表上的完美畫面而已，而次要透過不段的創作，來表現隱含在完美之後的絕對與真實“ - 截自塞尚寫給母親的信

現代繪畫之父保羅塞尚的靜物畫，創造立體結構與色彩明暗在視覺上的平衡與和諧還有真實。這位藝術家的靜物畫帶給世界如此珍貴的創作，價值連城的藝術品背後，是要我們看見隱含在完美之後的「絕對」與「真實」。

在人類追求名利慾望的同時，自然已在不經意之間失序毀壞，當人們尚未擺脫流行疾病的陰影，盲目的追求與渴望將帶領我們通往何處? 自然中最單純的生態是否還依舊存在？無視蘋果被蟲蛀的現實，忽略帶口罩飲酒的矛盾，人類的生存狀態在經歷大自然的反撲後，汲汲營營的創造文明是否還有意義?

靜物畫的拉丁文原文是：Vanitas，英文是 Vanity，中文為虛榮之意思，學習在多種非母語環境下創作的 Lady Hao Hao 想在大師們的藝術裡看見生存前後反思的意義，「人世既浮誇又短暫，我們，人一生，終有一死」。
`

var artistText1=`加拿大台裔藝術家，高中時期移民來到加拿大，但因為寄宿家庭的限制不能畫畫，而回到台灣繼續與藝術為伍。在台灣大學畢業後，再次回到加拿大，在多元的土地上吸收養分。

藝術一直都是她的精神糧食，唯一驕傲。創作對她來說，就是一連串的反思問答，在自我探索的過程中向自己提出一個個問題。近年來對「裝置藝術」的表現形式有著許多的好奇，在加拿大體驗著多元社區，學習著大師與偶像們的創作思維，累積她自己的作品。每次的創作發表，都看見藝術與人們之間的「呼應」、「討論」、「情緒」、「習慣」，探索和多元共舞。
`

    return (
        <div>
            <Container fluid>

              <div className="compare_slider_desktop">
                <ReactCompareImage
                  leftImage={image1}
                  rightImage={image2}
                  vertical={true}
                  sliderPositionPercentage="0.92"
                />
              </div>
              <div className="compare_slider_mobile">
              <ReactCompareImage
                  leftImage={image1}
                  rightImage={image2}
                  sliderPositionPercentage="0.9"
                />
            </div>

           <ProgramInfo
             id="test"
             subtitle="口罩之說"
             title="保羅的蘋果"
             artistName="藝術家：Lady Hao Hao"
             url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FPaulsApple-ch&amp;src=sdkpreparse"
             color="#D9C739"/>

             <Second_Title secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
               <MainContents_Important_With_Border style={{color:"#0C3866"}} contents="請將滑鼠移到中間箭頭並上下滑動，看一看兩張圖有甚麼不同。"></MainContents_Important_With_Border>
             <MainContents_Middle_Adonis style={{color:"#0C3866"}} contents={text}></MainContents_Middle_Adonis>
               <MainContents_OneArtistCH src={ladyhaohao} title="Lady Hao Hao" contents={artistText1}></MainContents_OneArtistCH>
                 <div className="people_padding"></div>
               <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2FPaulsApple-ch&amp;src=sdkpreparse" ></MobileShareButton>
               </Container>
                 <FooterCH></FooterCH>
        </div>
    );
}

export default PaulsApple_ch;
