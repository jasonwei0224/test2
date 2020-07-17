import React from "react";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import "./header_v1.css";
import en from "./assets/en.png";
import ch from "./assets/ch.png";
import twftorlogo from "./assets/twftorlogo.png";


export default class HeaderV1 extends React.Component {

  constructor(props) {
      super(props);
      this.state={
          english: true,
          position: "",
          top: "",
          zIndex: "",
      }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setLanguage();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    if (window.scrollY > 170) {
      this.setState({
        position: "fixed",
        top: "0",
        zIndex: "999"
      })
    } else {
      this.setState({
        position: "",
        top: "",
        zIndex: ""
      })
    }
  }

  languageBtnListener=()=> {
    this.setState({english: !this.state.english}, ()=> {
      this.redirect(this.state.english);
    });
  }


  redirect(englishState){
    var currentUrl = window.location.href;
      if(englishState) {
      window.location.href = currentUrl.slice(0, -3);
    } else {
      window.location.href = currentUrl + "-ch";
    }
  }

  setLanguage() {
    var currentUrl = window.location.href;
    if(currentUrl.slice(-3) === "-ch") {
      this.setState({
        english: false
      })
    } else  {
      this.setState({
        english: true
      })
    }
  }

  render(){
    return (
      <div>
        {this.state.english?
          <>
      <a href="https://torontotaiwanfest.ca/toronto-2020/"><img src={twftorlogo} id="logo" ></img></a>
      </>
      :
        <>
      <a href="https://torontotaiwanfest.ca/%e5%a4%9a%e5%80%ab%e5%a4%9a%e5%8f%b0%e7%81%a3%e6%96%87%e5%8c%96%e7%af%802020/?lang=zh-hant"><img src={twftorlogo} id="logo" ></img></a>
      </>
  }
    <div id="headerFinal" style={{
      position: this.state.position,
      top: this.state.top,
      width: this.state.width,
      zIndex: this.state.zIndex,
      }}>

      <Container fluid bsPrefix="container">
        <Navbar expand="xl">
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav_bar_toggle_icon"/>
          <Navbar.Collapse>
            <Nav className="m-auto" id="navLinkContainer" style={{alignItems:"end"}}>
              {this.state.english?
              <>
                <Nav.Link bsPrefix="navitem" href="https://torontotaiwanfest.ca/toronto-2020/">HOME</Nav.Link>
                <div className="borderClass">
                  <NavDropdown bsPrefix="navitem-dropdown"title="ABOUT US" renderMenuOnMount={true}>
                    <div className="dropdownbg">
                    <NavDropdown.Item bsPrefix="dropdown-item" href="https://torontotaiwanfest.ca/toronto-history/">HISTORY</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdown-item" href="https://torontotaiwanfest.ca/artist-vision/">ARTIST VISION</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdown-item" href="https://torontotaiwanfest.ca/media/">MEDIA</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdown-item" href="https://torontotaiwanfest.ca/our-team/">OUR TEAM</NavDropdown.Item>
                    </div>
                  </NavDropdown>
                </div>
                <Nav.Link bsPrefix="navitem" href="#">CONCERT</Nav.Link>
                <div className="borderClass">
                  <NavDropdown bsPrefix="navitem-dropdown"title="GALLERY" renderMenuOnMount={true}>
                    <NavDropdown.Item bsPrefix="dropdown-item"href="#sky">SKY</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdown-item"href="#IAmDifferent">I'M DIFFERENT, JUST LIKE YOU</NavDropdown.Item>
                  </NavDropdown>
                </div>

                <Nav.Link bsPrefix="navitem" href="#">HOPE TALK</Nav.Link>
                <Nav.Link bsPrefix="navitem" href="#">ARTIST TALK</Nav.Link>
                <Nav.Link bsPrefix="navitem" href="#">KITCHEN</Nav.Link>
                <Nav.Link bsPrefix="navitem" href="#">BOOKSTORE</Nav.Link>
                <Nav.Link bsPrefix="navitem" href="#">FILMS</Nav.Link>
                <Nav.Link bsPrefix="navitem" href="#">SPONSORS</Nav.Link>
                <Nav.Link bsPrefix="navitem" href="https://torontotaiwanfest.ca/volunteer/">VOLUNTEER</Nav.Link>
                <Nav.Link className="langNavLink" bsPrefix = "langNavLink"><img className="langIcon" src={ch} onClick={this.languageBtnListener}/></Nav.Link>
              </>
              :
              <>
                <Nav.Link bsPrefix="navitemCh" href="https://torontotaiwanfest.ca/%e5%a4%9a%e5%80%ab%e5%a4%9a%e5%8f%b0%e7%81%a3%e6%96%87%e5%8c%96%e7%af%802020/?lang=zh-hant">首頁</Nav.Link>
                <div className="borderClass">
                  <NavDropdown bsPrefix="navitemCh-dropdown" title="關於我們" id="basic-nav-dropdown" renderMenuOnMount={true}>
                    <NavDropdown.Item bsPrefix="dropdownCh-item" href="https://torontotaiwanfest.ca/%e6%b4%bb%e5%8b%95%e8%b6%b3%e8%b7%a1/?lang=zh-hant">活動足跡</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdownCh-item" href="https://torontotaiwanfest.ca/%e8%97%9d%e8%a1%93%e6%96%b9%e9%87%9d/?lang=zh-hant">藝術方針</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdownCh-item" href="https://torontotaiwanfest.ca/%e5%aa%92%e9%ab%94%e8%b3%87%e8%a8%8a/?lang=zh-hant">媒體資訊</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdownCh-item" href="https://torontotaiwanfest.ca/%e6%88%91%e5%80%91%e7%9a%84%e5%9c%98%e9%9a%8a/?lang=zh-hant">我們團隊</NavDropdown.Item>
                  </NavDropdown>
                </div>
                <Nav.Link bsPrefix="navitemCh"  href="#">音樂饗宴</Nav.Link>
                <div className="borderClass">
                <NavDropdown bsPrefix="navitemCh-dropdown" title="線上藝廊" id="basic-nav-dropdown" renderMenuOnMount={true}>
                  <NavDropdown.Item bsPrefix="dropdownCh-item" href="#sky-ch">天空</NavDropdown.Item>
                  <NavDropdown.Item bsPrefix="dropdownCh-item" href="#IAmDifferent-ch">共同面對的我們</NavDropdown.Item>
                </NavDropdown>
                </div>
                <Nav.Link bsPrefix="navitemCh" href="#">希望講堂</Nav.Link>
                <Nav.Link bsPrefix="navitemCh" href="#">我們藝樣</Nav.Link>
                <Nav.Link bsPrefix="navitemCh" href="#">友誼廚房</Nav.Link>
                <Nav.Link bsPrefix="navitemCh" href="#">台灣書店</Nav.Link>
                <Nav.Link bsPrefix="navitemCh" href="#">電影櫥窗</Nav.Link>
                <Nav.Link bsPrefix="navitemCh" href="#">贊助單位</Nav.Link>
                <Nav.Link bsPrefix="navitemCh" href="https://torontotaiwanfest.ca/volunteer/?lang=zh-hant">義工專區</Nav.Link>
                <Nav.Link className="langNavLinkCh"><img className="langIconCh" src={en} onClick={this.languageBtnListener}/></Nav.Link>
              </>
              }

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
    </div>
    );
  }
}
