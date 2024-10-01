import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">BMW</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="service">Service</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="aboutus">aboutus</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;