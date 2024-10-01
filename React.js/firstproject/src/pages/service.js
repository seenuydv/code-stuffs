import React from "react";
import './service.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from "../components/header";
import Footer from "../components/footer";


function Service(){
    return(
        <>
        <Header/>
        <br/>
       <div class="text-align: center;">
      <h2 className="heading1">24/7 service station</h2> </div>
        <br/>
        <Container>
        <Row>
        <Col>
        <p> Compared to other luxury car brands, BMWs are often viewed as having excellent resale value due to their premium quality, high-performance engineering, and established brand reputation. This makes BMWs a sound investment, with many models retaining a high resale value even after several years of use </p>
        </Col>
        <Col>
       <img className="imag0" src="https://media-cdn.tripadvisor.com/media/photo-s/16/00/1b/71/getlstd-property-photo.jpg"/>
       </Col>
       </Row>
       </Container>
       <br/>
       <br/>
       <Footer/>
       
       </>
     
    );
 }
export default Service;