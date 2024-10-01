import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Seenu </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="usestate">USESTATE</Nav.Link>
            <Nav.Link href="incedecrement">INCEDECREMENT</Nav.Link>
            <Nav.Link href="randomnumber">RANDOMNUMBER</Nav.Link>
            <Nav.Link href="axios">AXIOS</Nav.Link>
            <Nav.Link href="form">FORM</Nav.Link>
            <Nav.Link href="contact us">CONTACT US</Nav.Link>
            <Nav.Link href="Movie">MOVIE</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;