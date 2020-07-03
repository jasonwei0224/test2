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
    <div style={{
      position: this.state.position,
      top: this.state.top,
      zIndex: this.state.zIndex,
      width: "100%",
      backgroundColor:"white"
      }}>
        <Navbar id="navbar-v2" collapseOnSelect expand="lg" >
            <Navbar.Brand href="https://torontotaiwanfest.ca/toronto-2020/"><img id="logo-image" src={twftorlogo}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-group mr-auto" />
                {this.state.english?
                <>
                    <Nav.Link className="navitem-v2" href="https://torontotaiwanfest.ca/">HOME</Nav.Link>
                    <Nav.Link className="navitem-v2" href="#">PROGRAMS</Nav.Link>
                    <Nav.Link className="navitem-v2" href="#">GALLERY</Nav.Link>
                    <Nav.Link className="navitem-v2" href="#">SPONSORS</Nav.Link>
                    <Nav.Link bsPrefix = "langNavLink-v2"><img className="langIcon-v2" src={ch} onClick={this.languageBtnListener}/></Nav.Link>
                </>
                :
                <>
                    <Nav.Link className="navitem-v2" href="/">首頁</Nav.Link>
                    <Nav.Link className="navitem-v2" href="#">程式??</Nav.Link>
                    <Nav.Link className="navitem-v2" href="#">線上藝廊</Nav.Link>
                    <Nav.Link className="navitem-v2" href="#">贊助單位</Nav.Link>
                    <Nav.Link className="langNavLinkCh-v2"><img className="langIconCh-v2" src={en} onClick={this.languageBtnListener}/></Nav.Link>
                </>
                }
            </Navbar.Collapse>
        </Navbar>
     </div>
    );
  }
}

function Home() {
  return (
    <div>
      <h2>HOME</h2>
    </div>
  );
}

function Aboutus() {
  return (
    <div>
      <h2>ABOUT US</h2>
    </div>
  );
}

function Concert() {
  return (
    <div>
      <h2>CONCERT</h2>
    </div>
  );
}

function Gallery() {
  return (
    <div>
      <h2>GALLERY</h2>
    </div>
  );
}

function Talks() {
  return (
    <div>
      <h2>TALKS</h2>
    </div>
  );
}

function Kitchen() {
  return (
    <div>
      <h2>KITCHEN</h2>
    </div>
  );
}

function Bookstore() {
  return (
    <div>
      <h2>BOOKSTORE</h2>
    </div>
  );
}

function Films() {
  return (
    <div>
      <h2>FILMS</h2>
    </div>
  );
}

function Sponsors() {
  return (
    <div>
      <h2>SPONSORS</h2>
    </div>
  );
}

function Volunteer() {
  return (
    <div>
      <h2>VOLUNTEER</h2>
    </div>
  );
}
