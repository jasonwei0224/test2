import React from 'react';
import {Component} from 'react';
import Modal from 'react-modal';
import ButtonSkinColor from '../../mirror/ButtonSkinColor';
// import './Mirror-ch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from'@fortawesome/free-solid-svg-icons';
import { faChevronRight } from'@fortawesome/free-solid-svg-icons';
import ProgramInfo from '../../programInfo.js';
import {Container, Row, Col} from 'react-bootstrap';
import image1 from '../../assets/image1.jpg';

class Mirror_2 extends Component {
    constructor(props) {
        super(props);
        this.state={
            show:false,
            counter: 1
        }
        this.carouselSlider = "";
        this.carouselImages = "";
        this.size = "";
    }

    handleModal=()=>{
        this.setState({show:!this.state.show});
    }

    componentDidMount() {
        this.carouselSlider = document.querySelector('.carousel-slide');
        this.carouselImages = document.querySelectorAll('.carousel-slide img');
        this.size = this.carouselImages[0].clientWidth;
        this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.state.counter) + 'px';
    }

    nextBtnListener=()=>{
        if(this.state.counter >= this.carouselImages.length -1) return;
        this.size = this.carouselImages[0].clientWidth;
        this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
            this.setState({counter: this.state.counter + 1}, ()=> {
                this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.state.counter) + 'px';
            });
    }

    prevBtnListener=()=>{
        if(this.state.counter <= 0) return;
        this.size = this.carouselImages[0].clientWidth;

        this.carouselSlider.style.transition = "transform 0.4s ease-in-out";
            this.setState({counter: this.state.counter - 1}, ()=> {
                this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.state.counter) + 'px';
            });
    }

    // fired when animation stops - to go back to first image
    carouselSlideListener=()=> {
        if (this.carouselImages[this.state.counter].id === 'lastClone') {
            this.carouselSlider.style.transition = "none";

            this.setState({counter: this.carouselImages.length - 2}, ()=> {
                this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.state.counter) + 'px';
            });
        }

        if (this.carouselImages[this.state.counter].id === 'firstClone') {
            this.carouselSlider.style.transition = "none";

            this.setState({counter: this.carouselImages.length - this.state.counter}, ()=> {
                this.carouselSlider.style.transform = 'translateX(' + (-this.size * this.state.counter) + 'px';
            });
        }
    }

    render() {
        return (
            <div className='mirror'>
            <Container fluid>
            <Row>
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
            </Row>
            <ProgramInfo subtitle="Illustration" title="Mirroring" artistName="Mina Lu"/>
            <Row style={{borderBottom: "1px solid"}}></Row>
            <Row>
              <Col lg={{span:6, offset:3}} xs={{span:8, offset:2}} style={{marginTop:"5%", marginBottom:"2%"}} className='contents'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget tincidunt felis, sit amet congue lectus.
                Praesent auctor sodales ligula sed dignissim. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Proin facilisis orci finibus magna aliquet, a
                elementum purus dignissim. Fusce sed nisl rhoncus, imperdiet
                elit vel, imperdiet ex. Quisque lacus ex, pulvinar eget tellus
                id, suscipit cursus enim. Integer nec erat non leo vulputate
                fermentum sed at massa. Cras et turpis sagittis, malesuada
                velit at, semper velit. Sed porta nibh et mauris malesuada,
                vel placerat tellus feugiat. Cras cursus magna diam, at mollis
                lorem porta eget. Nunc rutrum nibh suscipit rutrum posuere.
                In aliquam semper leo. Cras ligula ligula, mattis sit amet
                lacinia ut, efficitur a ante. Sed in nunc nisi.Cras eget velit
                a mauris imperdiet ultrices in nec nunc. Proin viverra, sem
                sed fermentum commodo, elit tortor eleifend urna, vehicula
                dapibus tortor augue at nisl. Ut nec venenatis mi. Nunc in
                justo sem. Vestibulum non vehicula erat. Donec eu ipsum sed
                turpis vestibulum rhoncus in ut tellus. Suspendisse tincidunt
                nisi sed tortor efficitur, ac sodales ipsum blandit. Praesent
                lorem justo, rhoncus eu porttitor a, molestie eget ligula.
                In accumsan diam eget eleifend posuere. Donec et quam turpis.
                Aenean in enim vitae libero efficitur cursus. In hac
                habitasse platea dictumst. Etiam sollicitudin nisi a enim
                vestibulum, eu rutrum est hendrerit. Sed ornare dui dui, a
                cursus dolor congue vitae. Phasellus massa erat, mollis
                quis egestas sit amet, facilisis at orci. Nunc ullamcorper
                orem vel dolor venenatis congue. Aenean a laoreet leo, quis
                ornare metus. Praesent erat sem, rhoncus quis mollis eu,
                ullamcorper vitae sem. Ut semper ante sit amet nulla dictum
                tincidunt. In hac habitasse platea dictumst. Fusce vel
                scelerisque dolor. Aenean in metus varius, dictum metus
                vel, convallis dolor. Donec ut tellus tristique, condimentum
                nisl in, iaculis ante. Nam dictum placerat est, a placerat
                dolor suscipit ut. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
                Fusce eu eros at odio feugiat condimentum. Vivamus quis
                sem dolor.</p>
              </Col>
            </Row>
            <Row>
            <Col lg={{span:6, offset:3}} xs={{span:8, offset:2}} >
              <img src={image1} style={{display:'block',
                maxWidth: "100%", height: "auto", width:"100%"}} class="img-responsive"></img>
            </Col>
            </Row>
            <Row>
              <Col lg={{span:6, offset:3}} xs={{span:8, offset:2}} style={{marginTop:"2%", marginBottom:"2%"}} className='contents'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget tincidunt felis, sit amet congue lectus.
                Praesent auctor sodales ligula sed dignissim. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Proin facilisis orci finibus magna aliquet, a
                elementum purus dignissim. Fusce sed nisl rhoncus, imperdiet
                elit vel, imperdiet ex. Quisque lacus ex, pulvinar eget tellus
                id, suscipit cursus enim. Integer nec erat non leo vulputate
                fermentum sed at massa. Cras et turpis sagittis, malesuada
                velit at, semper velit. Sed porta nibh et mauris malesuada,
                vel placerat tellus feugiat. Cras cursus magna diam, at mollis
                lorem porta eget. Nunc rutrum nibh suscipit rutrum posuere.
                In aliquam semper leo. Cras ligula ligula, mattis sit amet
                lacinia ut, efficitur a ante. Sed in nunc nisi.Cras eget velit
                a mauris imperdiet ultrices in nec nunc. Proin viverra, sem
                sed fermentum commodo, elit tortor eleifend urna, vehicula
                dapibus tortor augue at nisl. Ut nec venenatis mi. Nunc in
                justo sem. Vestibulum non vehicula erat. Donec eu ipsum sed
                turpis vestibulum rhoncus in ut tellus. Suspendisse tincidunt
                nisi sed tortor efficitur, ac sodales ipsum blandit. Praesent
                lorem justo, rhoncus eu porttitor a, molestie eget ligula.
                In accumsan diam eget eleifend posuere. Donec et quam turpis.
                Aenean in enim vitae libero efficitur cursus. In hac
                habitasse platea dictumst. Etiam sollicitudin nisi a enim
                vestibulum, eu rutrum est hendrerit. Sed ornare dui dui, a
                cursus dolor congue vitae. Phasellus massa erat, mollis
                quis egestas sit amet, facilisis at orci. Nunc ullamcorper
                orem vel dolor venenatis congue. Aenean a laoreet leo, quis
                ornare metus. Praesent erat sem, rhoncus quis mollis eu,
                ullamcorper vitae sem. Ut semper ante sit amet nulla dictum
                tincidunt. In hac habitasse platea dictumst. Fusce vel
                scelerisque dolor. Aenean in metus varius, dictum metus
                vel, convallis dolor. Donec ut tellus tristique, condimentum
                nisl in, iaculis ante. Nam dictum placerat est, a placerat
                dolor suscipit ut. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
                Fusce eu eros at odio feugiat condimentum. Vivamus quis
                sem dolorh </p>
              </Col>
            </Row>
            <Row>
            <Col lg={{span:6, offset:3}} xs={{span:8, offset:2}}>
              <img src={image1} style={{display:'block',
                maxWidth: "100%", height: "auto", width:"100%"}} class="img-responsive"></img>
            </Col>
            </Row>
            <Row>
              <Col lg={{span:6, offset:3}} xs={{span:8, offset:2}} style={{marginTop:"2%", marginBottom:"2%"}} className='contents'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget tincidunt felis, sit amet congue lectus.
                Praesent auctor sodales ligula sed dignissim. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Proin facilisis orci finibus magna aliquet, a
                elementum purus dignissim. Fusce sed nisl rhoncus, imperdiet
                elit vel, imperdiet ex. Quisque lacus ex, pulvinar eget tellus
                id, suscipit cursus enim. Integer nec erat non leo vulputate
                fermentum sed at massa. Cras et turpis sagittis, malesuada
                velit at, semper velit. Sed porta nibh et mauris malesuada,
                vel placerat tellus feugiat. Cras cursus magna diam, at mollis
                lorem porta eget. Nunc rutrum nibh suscipit rutrum posuere.
                In aliquam semper leo. Cras ligula ligula, mattis sit amet
                lacinia ut, efficitur a ante. Sed in nunc nisi.Cras eget velit
                a mauris imperdiet ultrices in nec nunc. Proin viverra, sem
                sed fermentum commodo, elit tortor eleifend urna, vehicula
                dapibus tortor augue at nisl. Ut nec venenatis mi. Nunc in
                justo sem. Vestibulum non vehicula erat. Donec eu ipsum sed
                turpis vestibulum rhoncus in ut tellus. Suspendisse tincidunt
                nisi sed tortor efficitur, ac sodales ipsum blandit. Praesent
                lorem justo, rhoncus eu porttitor a, molestie eget ligula.
                In accumsan diam eget eleifend posuere. Donec et quam turpis.
                Aenean in enim vitae libero efficitur cursus. In hac
                habitasse platea dictumst. Etiam sollicitudin nisi a enim
                vestibulum, eu rutrum est hendrerit. Sed ornare dui dui, a
                cursus dolor congue vitae. Phasellus massa erat, mollis
                quis egestas sit amet, facilisis at orci. Nunc ullamcorper
                orem vel dolor venenatis congue. Aenean a laoreet leo, quis
                ornare metus. Praesent erat sem, rhoncus quis mollis eu,
                ullamcorper vitae sem. Ut semper ante sit amet nulla dictum
                tincidunt. In hac habitasse platea dictumst. Fusce vel
                scelerisque dolor. Aenean in metus varius, dictum metus
                vel, convallis dolor. Donec ut tellus tristique, condimentum
                nisl in, iaculis ante. Nam dictum placerat est, a placerat
                dolor suscipit ut. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos.
                Fusce eu eros at odio feugiat condimentum. Vivamus quis
                sem dolor. </p>
              </Col>
            </Row>
          </Container>


                {/* modal */}
                {/* <button onClick={this.handleModal}>Open modal</button>
                <Modal isOpen={this.state.show} style={{content:{background:'#94AFC2'}}}>
                    <div className="container_modal">
                        <div className="title_modal">
                            <h3>Select a skin color</h3>
                        </div>
                        <div className="buttonSkinColor_modal">
                            <ButtonSkinColor name={'asdf'} col={'#5A453C'}></ButtonSkinColor>
                            <ButtonSkinColor name={'asdf'} col={'#785C50'}></ButtonSkinColor>
                            <ButtonSkinColor name={'asdf'} col={'#A57E6E'}></ButtonSkinColor>
                            <ButtonSkinColor name={'asdf'} col={'#C39582'}></ButtonSkinColor>
                            <ButtonSkinColor name={'asdf'} col={'#E1AC96'}></ButtonSkinColor>
                            <ButtonSkinColor name={'asdf'} col={'#FFCEB4'}></ButtonSkinColor>
                            <ButtonSkinColor name={'asdf'} col={'#FCDFD0'}></ButtonSkinColor>
                        </div>
                        <div>
                            <button className = "btn_modal" onClick={this.handleModal} >Close</button>
                            <button className = "btn_modal">Enter</button>
                        </div>
                    </div>
                </Modal> */}
            </div>
        );
    }
};

export default Mirror_2;
