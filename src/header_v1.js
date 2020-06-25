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


  render(){
    return (
    <div style={{
      position: this.state.position,
      top: this.state.top,
      width: this.state.width,
      zIndex: this.state.zIndex,
      backgroundColor:"white",
      fontWeight:"bold",
      color:"black",
      width:"100%",
      fontSize:"14px",
      fontFamily:"sofia-pro, Sans-serif"
      }}>
      <Container fluid>
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto" style={{alignItems:"end"}}> {/* text align to left for dropdown with centered hamburger icon */}
              <Nav.Link href="/">HOME</Nav.Link>
                <NavDropdown title="ABOUT US" id="basic-nav-dropdown" renderMenuOnMount={true}>
                  <NavDropdown.Item href="#">HISTORY</NavDropdown.Item>
                  <NavDropdown.Item href="#">ARTIST VISION</NavDropdown.Item>
                  <NavDropdown.Item href="#">MEDIA</NavDropdown.Item>
                  <NavDropdown.Item href="#">OUR TEAM</NavDropdown.Item>
                </NavDropdown>
              <Nav.Link href="#">CONCERT</Nav.Link>
              <NavDropdown title="GALLERY" id="basic-nav-dropdown" renderMenuOnMount={true}>
                {this.state.english? <NavDropdown.Item href="#sky">SKY</NavDropdown.Item> : <NavDropdown.Item href="#Sky-ch">SKY-ch</NavDropdown.Item> }
                {this.state.english? <NavDropdown.Item href="#IAmDifferent">I AM DIFFERENT</NavDropdown.Item> : <NavDropdown.Item href="#IAmDifferent-ch">I AM DIFFERENT-ch</NavDropdown.Item>}
              </NavDropdown>
              <Nav.Link href="#">TALKS</Nav.Link>
              <Nav.Link href="#">KITCHEN</Nav.Link>
              <Nav.Link href="#">BOOKSTORE</Nav.Link>
              <Nav.Link href="#">FILMS</Nav.Link>
              <Nav.Link href="#">SPONSORS</Nav.Link>
              <Nav.Link href="#">VOLUNTEER</Nav.Link>
              {this.state.english?<Nav.Link className="langNavLink"><img className="langIcon" src={ch} onClick={this.languageBtnListener}/></Nav.Link>:<Nav.Link className="langNavLink"><img src={en} className="langIcon" onClick={this.languageBtnListener}/></Nav.Link>}
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
