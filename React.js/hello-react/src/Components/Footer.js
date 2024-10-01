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
             <h3> Seenu Ydv </h3>
             <br/>
             <br/>
             <br/>
             </Col>
            <Col>
              <h3>About SEENU </h3>
              <br/>
             <br/>
             <br/>
             </Col>
            <Col>
             <h3> Customer Service </h3>
             <br/>
             <br/>
             <br/>
            </Col>
        </Row>
     </Container>
     </div>
  
  );
}
export default Footer;