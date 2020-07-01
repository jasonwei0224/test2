import React from "react";
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import "./header_v1.css";
import en from "./assets/en.png";
import ch from "./assets/ch.png";


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
    <div id="headerFinal" style={{
      position: this.state.position,
      top: this.state.top,
      width: this.state.width,
      zIndex: this.state.zIndex,
      }}>
      <Container fluid bsPrefix="container">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" id="nav_bar_toggle_icon"/>
          <Navbar.Collapse>
            <Nav className="m-auto" id="navLinkContainer" style={{alignItems:"end"}}>
              {this.state.english?
              <>
                <Nav.Link bsPrefix="navitem" href="/">HOME</Nav.Link>
                <div className="borderClass">
                  <NavDropdown bsPrefix="navitem-dropdown"title="ABOUT US" renderMenuOnMount={true}>
                    <div className="dropdownbg">
                    <NavDropdown.Item bsPrefix="dropdown-item" href="#">HISTORY</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdown-item" href="#">ARTIST VISION</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdown-item" href="#">MEDIA</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdown-item" href="#">OUR TEAM</NavDropdown.Item>
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
                <Nav.Link bsPrefix="navitem" href="#">VOLUNTEER</Nav.Link>
                <Nav.Link className="langNavLink" bsPrefix = "langNavLink"><img className="langIcon" src={ch} onClick={this.languageBtnListener}/></Nav.Link>
              </>
              :
              <>
                <Nav.Link bsPrefix="navitemCh" href="/">首頁</Nav.Link>
                <div className="borderClass">
                  <NavDropdown bsPrefix="navitemCh-dropdown" title="關於我們" id="basic-nav-dropdown" renderMenuOnMount={true}>
                    <NavDropdown.Item bsPrefix="dropdownCh-item" href="#">活動足跡</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdownCh-item" href="#">藝術方針</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdownCh-item" href="#">媒體資訊</NavDropdown.Item>
                    <NavDropdown.Item bsPrefix="dropdownCh-item" href="#">我們團隊</NavDropdown.Item>
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
                <Nav.Link bsPrefix="navitemCh" href="#">義工專區</Nav.Link>
                <Nav.Link className="langNavLinkCh"><img className="langIconCh" src={en} onClick={this.languageBtnListener}/></Nav.Link>
              </>
              }

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
    );
  }
}


{/*<div>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/concert">Concert </Link>
          </li>
          <li>
            <Link to="/home">Gallery </Link>
          </li>
          <li>
            <Link to="/talk">Talks </Link>
          </li>
          <li>
            <Link to="/kitchen">Kitchen </Link>
          </li>
          <li>
            <Link to="/bookstore">Bookstore </Link>
          </li>
          <li>
            <Link to="/films">Films </Link>
          </li>
          <li>
            <Link to="/sponsors">Sponsors </Link>
          </li>
          <li>
            <Link to="/volunteer">Volunteer </Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Aboutus />
          </Route>
          <Route path="/concert">
            <Concert />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/talk">
            <Talks />
          </Route>
          <Route path="/kitchen">
            <Kitchen />
          </Route>
          <Route path="/bookstore">
            <Bookstore />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/volunteer">
            <Volunteer />
          </Route>
        </Switch>
      </div>*/}
//PAGES

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
