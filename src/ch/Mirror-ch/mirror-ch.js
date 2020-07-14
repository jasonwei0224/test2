import React from 'react';
import {Component} from 'react';
import Modal from 'react-modal';
import ButtonSkinColor from '../../mirror/ButtonSkinColor';
import './Mirror-ch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from'@fortawesome/free-solid-svg-icons';
import { faChevronRight } from'@fortawesome/free-solid-svg-icons';
import ProgramInfo from '../../programInfo.js';
import {Container, Row, Col} from 'react-bootstrap';
import image1 from '../../assets/image1.jpg';
import Second_TitleCh from '../../modules/Second_TitleCh';
import MainContents_Important_ch from '../../modules/MainContents_Important_ch';
import MainContents_Middle_ch from "../../modules/MainContents_Middle_ch";
import FooterCH from "../footer-ch";
import MobileShareButton_ch from "../../modules/mobileShareButton-ch";
import MainContents_Img from "../../modules/MainContents_img";
import MainContetn_TwoPic from "../../modules/MainContent_TwoPic";
import MainContents_First_ch from "../../modules/MainContents_First_ch";
import doctor from "../../assets/doctor.jpg";
import firefighter from "../../assets/firefighter.jpg";

class Mirror_2 extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         show:false,
    //         counter: 1
    //     }
    //     this.carouselSlider = "";
    //     this.carouselImages = "";
    //     this.size = "";
    // }
    //
    // handleModal=()=>{
    //     this.setState({show:!this.state.show});
    // }
    //
    // componentDidMount() {
    //     this.carouselSlider = document.querySelector('.carousel-slide');
    //     this.carouselImages = document.querySelectorAll('.carousel-slide img');
    //     this.size = this.carouselImages[0].clientWidth;
    //     this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.state.counter) + 'px';
    // }
    //
    // nextBtnListener=()=>{
    //     if(this.state.counter >= this.carouselImages.length -1) return;
    //     this.size = this.carouselImages[0].clientWidth;
    //     this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
    //         this.setState({counter: this.state.counter + 1}, ()=> {
    //             this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.state.counter) + 'px';
    //         });
    // }
    //
    // prevBtnListener=()=>{
    //     if(this.state.counter <= 0) return;
    //     this.size = this.carouselImages[0].clientWidth;
    //
    //     this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
    //         this.setState({counter: this.state.counter - 1}, ()=> {
    //             this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.state.counter) + 'px';
    //         });
    // }
    //
    // // fired when animation stops - to go back to first image
    // carouselSlideListener=()=> {
    //     if (this.carouselImages[this.state.counter].id === 'lastClone') {
    //         this.carouselSlider.style.transition = "none";
    //
    //         this.setState({counter: this.carouselImages.length - 2}, ()=> {
    //             this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.state.counter) + 'px';
    //         });
    //     }
    //
    //     if (this.carouselImages[this.state.counter].id === 'firstClone') {
    //         this.carouselSlider.style.transition = "none";
    //
    //         this.setState({counter: this.carouselImages.length - this.state.counter}, ()=> {
    //             this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.state.counter) + 'px';
    //         });
    //     }
    // }

    render() {
        return (
            <div className='mirror'>
              <img src= {doctor} style={{width:"100%", height:"auto", overFlow:"hidden"}}/>
            <Container fluid>
            {/*<Row>
                <Col lg={12} style={{display:"flex", width:"100%", textAlign:"center",
                overFlow:"hidden", alignItems:"center", justifyContent:"center", borderBottom: "1px solid"}}>
                    <div>
                        <div className="carousel-container">
                            <FontAwesomeIcon icon={faChevronLeft} id="prev-btn" onClick={this.prevBtnListener}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faChevronRight} id="next-btn" onClick={this.nextBtnListener}></FontAwesomeIcon>
                                <div className="carousel-slide" onTransitionEnd={this.carouselSlideListener}>
                                    <img id="lastClone" className="carousel-imgs" src={require('../../assets/mask5.jpg')} alt="test"/>
                                    <img className="carousel-imgs"  src={require('../../assets/mask1.jpg')} alt="test"/>
                                    <img className="carousel-imgs"  src={require('../../assets/mask2.jpg')} alt="test"/>
                                    <img className="carousel-imgs"  src={require('../../assets/mask3.jpg')} alt="test"/>
                                    <img className="carousel-imgs"  src={require('../../assets/mask4.jpg')} alt="test"/>
                                    <img className="carousel-imgs"  src={require('../../assets/mask5.jpg')} alt="test"/>
                                    <img id="firstClone" className="carousel-imgs"  src={require('../../assets/mask1.jpg')} alt="test"/>
                                </div>
                        </div>
                    </div>
                </Col>
            </Row>*/}
            <ProgramInfo subtitle="Illustration" title="Mirroring" artistName="Mina Lu" url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FMirror-ch&amp;src=sdkpreparse" color="#D9C739"/>

            <Second_TitleCh secondTitle="About This Work"></Second_TitleCh>
            <MainContents_Important_ch contents="在疫情最辛苦艱難的時期，許多生命受苦臨危之際，醫護人員、警消人員、科學家、衛生官員這些專業人士，在拯救生命的同時，並不會過問危難者的族裔與身份。我們每一個人都會面臨生命終結的一天，當這些專業人士在救助受苦的人們，處理危急的情況當下，並不會過問對方的膚色族裔、語言文化、社經地位，那時，他們的眼中視一切生命皆為平等，不因求助者的外在條件、理想價值而有所不同。"></MainContents_Important_ch>
          <MainContents_First_ch contents="若世界以專業領域、社會貢獻的成就來對待每一個人，給予每個人付出後應得的尊重；人們不再以膚色外表、出身背景評斷、喜惡他人，是否才能真正地將每個人當作獨立的個人看待?"></MainContents_First_ch>


          <MainContents_Img src={image1}></MainContents_Img>

            <MainContents_Middle_ch contents="若世界以專業領域、社會貢獻的成就來對待每一個人，給予每個人付出後應得的尊重；人們不再以膚色外表、出身背景評斷、喜惡他人，是否才能真正地將每個人當作獨立的個人看待?"></MainContents_Middle_ch>


          <MainContents_Img src={image1}></MainContents_Img>

            <MainContents_Middle_ch contents="若世界以專業領域、社會貢獻的成就來對待每一個人，給予每個人付出後應得的尊重；人們不再以膚色外表、出身背景評斷、喜惡他人，是否才能真正地將每個人當作獨立的個人看待?"></MainContents_Middle_ch>
            <MainContetn_TwoPic src={image1} className="img-other-side"></MainContetn_TwoPic>
              <MobileShareButton_ch togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FMirror-ch&amp;src=sdkpreparse"></MobileShareButton_ch>
        </Container>




          <FooterCH/>
        </div>
        );
    }
};

export default Mirror_2;
