import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import "./navigation.css";

function Navigation() {
  return (
    <div className="navWrapper">
      <Navbar collapseOnSelect expand="sm">
        <Navbar.Brand id="brand" href="/">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto" />
          <Nav>
            <Nav.Link href="#PaulsApple" className="navLinks">
              Paul's Apple
            </Nav.Link>
            <Nav.Link href="#OtherSideOfMask" className="navLinks">
              Other Side of Mask
            </Nav.Link>
            <Nav.Link href="#PeopleAndMask" className="navLinks">
              People And Mask
            </Nav.Link>
            <Nav.Link href="#IAmDifferent" className="navLinks">
              I Am Different
            </Nav.Link>
            <Nav.Link href="#Mirror" className="navLinks">
              Mirror
            </Nav.Link>
            <Nav.Link href="#Sky" className="navLinks">
              Sky
            </Nav.Link>
            <Nav.Link href="#IAmDifferentForm" className="navLinks">
              I Am different form
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
