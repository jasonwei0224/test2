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

class Mirror extends Component {
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

    // fired when animation stops - to go back to first image
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

            {/*}<Row>
                <Col lg={12} style={{display:"flex", width:"100%", textAlign:"center",
                overFlow:"hidden", alignItems:"center", justifyContent:"center", borderBottom: "1px solid"}}>
                    <div>
                        <div className="carousel-container">
                            <FontAwesomeIcon icon={faChevronLeft} id="prev-btn" onClick={this.prevBtnListener}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faChevronRight} id="next-btn" onClick={this.nextBtnListener}></FontAwesomeIcon>
                                <div className="carousel-slide" onTransitionEnd={this.carouselSlideListener}>
                                    <img id="lastClone" className="carousel-imgs" src={require('../assets/mask5.jpg')} alt="test"/>
                                    <img className="carousel-imgs"  src={require('../assets/mask1.jpg')} alt="test"/>
                                    <img className="carousel-imgs"  src={require('../assets/mask2.jpg')} alt="test"/>
                                    <img className="carousel-imgs"  src={require('../assets/mask3.jpg')} alt="test"/>
                                    <img className="carousel-imgs"  src={require('../assets/mask4.jpg')} alt="test"/>
                                    <img className="carousel-imgs"  src={require('../assets/mask5.jpg')} alt="test"/>
                                    <img id="firstClone" className="carousel-imgs"  src={require('../assets/mask1.jpg')} alt="test"/>
                                </div>
                        </div>
                    </div>
                </Col>
            </Row>*/}
            <ProgramInfo subtitle="Illustration" title="Mirroring" artistName="Mina Lu" url="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask&amp;src=sdkpreparse" color="#D9C739"/>
            <Second_Title secondTitle="Under the same sky project"></Second_Title>
            <MainContents_Important contents=" What is something that you can see when you look up, no matter
                    wherever you are in the world? The sky is one constant no matter
                    where you are and what time of day, it is there above the horizon."></MainContents_Important>

            <MainContents_Middle style={{color:"#0C3866"}} contents=" What is something that you can see when you look up, no matter
                    wherever you are in the world? The sky is one constant no matter
                    where you are and what time of day, it is there above the horizon."></MainContents_Middle>

            <MainContents_img src={image1}  className="img-other-side"></MainContents_img>

            <MainContents_Middle contents=" Despite our geographical differences,
              we all look towards that same sky that looms over our heads, further reaffirming that we are all in this
            together. "></MainContents_Middle>
              <MainContents_img src={image1} className="img-other-side"></MainContents_img>
              <MainContents_Middle contents=" In all that the world has gone through, the unchanging sky gives
              people a sense of hope and anticipation for the feeling of a
              normal day to come again. Furthermore, Indigenous teachings and
              stories about the sky can guide us in these times.
              By giving each image a background story, we can implore others to
              look to the sky and gain strength. In all that the world has gone through, the unchanging sky gives
              people a sense of hope and anticipation for the feeling of a
              normal day to come again. Furthermore, Indigenous teachings and
              stories about the sky can guide us in these times.
              By giving each image a background story, we can implore others to
              look to the sky and gain strength."></MainContents_Middle>


            <MainContents_img src={image1}  className="img-other-side"></MainContents_img>
            <MainContents_Middle contents=" In all that the world has gone through, the unchanging sky gives
            people a sense of hope and anticipation for the feeling of a
            normal day to come again. Furthermore, Indigenous teachings and
            stories about the sky can guide us in these times.
            By giving each image a background story, we can implore others to
            look to the sky and gain strength. In all that the world has gone through, the unchanging sky gives
            people a sense of hope and anticipation for the feeling of a
            normal day to come again. Furthermore, Indigenous teachings and
            stories about the sky can guide us in these times.
            By giving each image a background story, we can implore others to
            look to the sky and gain strength."></MainContents_Middle>

            <MainContetn_TwoPic src={image1} className="img-other-side"></MainContetn_TwoPic>

            <MobileShareButton togoUrl="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgallery.torontotaiwanfest.ca%2F%23%2FOtherSideOfMask&amp;src=sdkpreparse"></MobileShareButton>
          </Container>

          <Footer content= "&copy; 2020 TAIWANESE CANADIAN ASSOCIATION OF TORONTO"></Footer>

            </div>
        );
    }
};

export default Mirror;
