import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home(){
    return(
        <>
        <Header/>
        <br/>
        <div className="center1">
        <Container>
        <Row>
        <Col>
              <h1 className="fountS">Bayerische Motoren Werke AG </h1>
              <p>It originated in 1916 as Bayerische Flugzeug-Werke, a builder of aircraft engines, but assumed the
              name Bayerische Motoren Werke in July 1917 and began producing motorcycles in the 1920s. BMW entered the
              automobile business in 1928. The company's R32 motorcycle set a world speed record that was not broken until
              1937.</p>
              </Col>
              <Col>
              <img className="img1" src="https://www.picng.com/upload/bmw/png_bmw_19254.png"/>
              </Col>
          </Row>
          </Container>
          </div>
          <br/>
          <Container>
            <Row>
              <Col><img className="simag1" src="https://www.picng.com/thumbnail/bmw/png_bmw_19237_small.png"/> </Col>

              <Col><img className="simg2" src="https://www.picng.com/thumbnail/bmw/png_bmw_19238_small.png"/></Col>
              <Col><img className="simg3" src="https://www.picng.com/thumbnail/bmw/png_bmw_19239_small.png"/></Col>
              <Col><img className="simg4" src="https://www.picng.com/thumbnail/bmw/png_bmw_19240_small.png"/></Col>
             </Row>
             </Container>
             <br/>
             <div className="heading0">
            <h2> why choose Us</h2>
          </div>
          <br/>
         <h2 className="heading1">24/7 service station</h2>
          <p> Compared to other luxury car brands, BMWs are often viewed as having excellent resale value due to their premium quality, high-performance engineering, and established brand reputation. This makes BMWs a sound investment, with many models retaining a high resale value even after several years of use </p>
          <img className="img0" src="https://www.bmwgrandblanc.com/static/dealer-21827/Fillers/BMWFiller__2_.png"/>
          <br/>
          <br/>
          <div className="heading2">
            <h2> How it work</h2>
          </div>
          <br/>
          <Container>
            <Row>
              <Col>
              <img  className="si1" src="https://cdn-icons-png.freepik.com/256/1067/1067555.png" alt="package"/>
              <h3>Package</h3>
              </Col>
              <Col>
             <img className="si2" src="https://cdn-icons-png.flaticon.com/512/4269/4269480.png" alt="package"/>
              <h3>Servicing</h3>
              </Col>
              <Col>
              <img className="si3" src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/maintenance-512.png" alt="package"/>
              <h3>Maintenance</h3>
              </Col>
              <Col>
             <img className="si4" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/repairing-dents-1478393-1250422.png?f=webp" alt="package"/>
             <h3>Deleting/Painting</h3>
              </Col>
            </Row>
          </Container>
          <br/>
          <br/>
          <div className="heading3">
            <h2>Customer Review </h2>
          </div>
          <br/>
          <br/>
          <Footer/>
          </>
    );
}

export default Home;