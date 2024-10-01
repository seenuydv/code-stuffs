import React from "react";
import Container from 'react-bootstrap/Container';
import './footer.css'
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Footer(){
    return(
        
        <div className="footerb">
    <Container>
        <Row>
            <Col>
             <h3> BMW </h3>
             <p> The official founding date of the German motor vehicle manufacturer BMW is 7 March 1916, when an aircraft producer called Bayerische Flugzeugwerke was established. This company was renamed to Bayerische Motoren Werke in 1922.</p>
             </Col>
            <Col>
              <h3>About BMW </h3>
              <p>Home</p>
              <p>ABout</p>
              <p>service</p>
              <p>FAQs</p>
              <p>Contant</p>
             </Col>
            <Col>
             <h3> Customer Service </h3>
             <p> +91-8909910910, 8771000010</p>
             <p> service@bmw.in</p>
             <p> help@Bmw.in</p>
            </Col>
        </Row>
     </Container>
     </div>
  
  );
}
export default Footer;
