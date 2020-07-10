import React from "react";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import "./header_v2.css";
import en from "./assets/en.png";
import ch from "./assets/ch.png";
import twftorlogo from "./assets/twftorlogo.png";


export default class HeaderV2 extends React.Component {

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
  {/*  <div style={{
      position: this.state.position,
      top: this.state.top,
      zIndex: this.state.zIndex,
      width: this.state.width,

      }}>*/}
      <Container fluid bsPrefix="container">
        <Navbar id="navbar-v2" collapseOnSelect expand="xl" >
          <Navbar.Brand href="https://torontotaiwanfest.ca/toronto-2020/"><img id="logo-image" src={twftorlogo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav_bar_toggle_icon"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto"style={{alignItems:"end"}}>
                {this.state.english?
                <>
                    <Nav.Link className="navitem-v2" href="https://torontotaiwanfest.ca/">HOME</Nav.Link>
                  <div className="nav-dropdown-wrapper">
                    <div className="nav-dropdown-wrapper2">
                      <NavDropdown bsPrefix="navitem-dropdown"title="GALLERY" alignCenter renderMenuOnMount={true}>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#sky">SKY</NavDropdown.Item>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#IAmDifferent">I'M DIFFERENT, JUST LIKE YOU</NavDropdown.Item>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#">MIRRORS</NavDropdown.Item>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#">PAUL'S APPLE</NavDropdown.Item>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#">THE OTHER SIDE OF MASKS</NavDropdown.Item>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#">"UN" BEGIND CHINESE</NavDropdown.Item>
                      </NavDropdown>
                    </div>


                  </div>
                    <Nav.Link bsPrefix = "langNavLink-v2"><img className="langIcon-v2" src={ch} onClick={this.languageBtnListener}/></Nav.Link>
                </>
                :
                <>
                    <Nav.Link className="navitem-v2" href="/">首頁</Nav.Link>
                      <NavDropdown bsPrefix="navitem-dropdown"title="線上藝廊" renderMenuOnMount={true}>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#sky">SKY</NavDropdown.Item>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#IAmDifferent">I'M DIFFERENT, JUST LIKE YOU</NavDropdown.Item>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#">MIRRORS</NavDropdown.Item>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#">PAUL'S APPLE</NavDropdown.Item>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#">THE OTHER SIDE OF MASKS</NavDropdown.Item>
                        <NavDropdown.Item bsPrefix="dropdown-item"href="#">"UN" BEGIND CHINESE</NavDropdown.Item>
                      </NavDropdown>
                    <Nav.Link className="langNavLinkCh-v2"><img className="langIconCh-v2" src={en} onClick={this.languageBtnListener}/></Nav.Link>
                </>
                }
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
    {/* </div>*/}
       </div>
    );
  }
}
