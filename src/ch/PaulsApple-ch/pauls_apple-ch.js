import React from 'react';
import ImgComparison from '../../img_comparison';
// import { SocialIcon } from 'react-social-icons';
import ProgramInfo from '../../programInfo';
// import './pauls_apple-ch.css'
import {Container, Row, Col} from 'react-bootstrap';
import MainContents_Middle from "../../modules/MainContents_Middle"
import MainContents_Important from "../../modules/MainContents_Important"
import FooterCH from '../footer-ch';
import Second_Title from "../../modules/Second_Title"
import MainContents_Important_With_Border from "../../modules/MainContents_Important_with_border"
import MainContents_OneArtistCH from "../../modules/MainContents_OneArtistCH"
import MobileShareButton from "../../modules/mobileShareButton";
import ladyhaohao from '../../assets/Lady Hao Hao.jpg'
import ReactCompareImage from 'react-compare-image';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';

function PaulsApple_ch() {
  var text =`”我深信自己比周遭的畫家，都要來得有力量。我這可不是隨便說說的，而是出自內心真誠的感受。對我來說，繪畫並不只是要追求外表上的完美畫面而已，而次要透過不段的創作，來表現隱含在完美之後的絕對與真實“ - 截自塞尚寫給母親的信

現代繪畫之父保羅塞尚的靜物畫，創造立體結構與色彩明暗在視覺上的平衡與和諧還有真實。這位藝術家的靜物畫帶給世界如此珍貴的創作，價值連城的藝術品背後，是要我們看見隱含在完美之後的「絕對」與「真實」。

在人類追求名利慾望的同時，自然已在不經意之間失序毀壞，當人們尚未擺脫流行疾病的陰影，盲目的追求與渴望將帶領我們通往何處? 自然中最單純的生態是否還依舊存在？無視蘋果被蟲蛀的現實，忽略帶口罩飲酒的矛盾，人類的生存狀態在經歷大自然的反撲後，汲汲營營的創造文明是否還有意義?

靜物畫的拉丁文原文是：Vanitas，英文是 Vanity，中文為虛榮之意思，學習在多種非母語環境下創作的 Lady Hao Hao 想在大師們的藝術裡看見生存前後反思的意義，「人世既浮誇又短暫，我們，人一生，終有一死」。
`
    return (
        <div>
            <Container fluid>

              <ReactCompareImage
                leftImage={image1}
                rightImage={image2}
              />


           <ProgramInfo
             id="test"
             subtitle="口罩之說"
             title="保羅的蘋果"
             artistName="創作：Lady Hao Hao"
             url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FMirror&amp;src=sdkpreparse"
             color="#D9C739"/>

             <Second_Title secondTitle="作品互動方式：" style={{fontFamily: "sofia-pro Sans-serif"}}></Second_Title>
             <MainContents_Important_With_Border style={{color:"#0C3866"}} contents="asdfasdfasdfasdfasdfS"></MainContents_Important_With_Border>
             <MainContents_Middle style={{color:"#0C3866"}} contents={text}></MainContents_Middle>
               <MainContents_OneArtistCH src={ladyhaohao} title="Lady Hao Hao" contents="asdf
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

export default PaulsApple_ch;
