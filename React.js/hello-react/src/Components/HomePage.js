import Header from '../Components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Footer from '../Components/Footer';
import Carduse from '../Components/card';
import Slide from '../Components/Carousels';
import Faram from '../Components/form';
import Incedecrement from '../Components/incre&decre';
import SameSame from '../Components/Random-Number';
import Box from '../Components/Box';
import Axios from '../Components/axios';
function HomePages(){
    return(
<>
<Header/>
<Container fluid>
</Container>
<br />
<Container>
  <Row>
    <Col lg={6} md={4} sm={12} xs={12} className="text-center ">
      <h1 >Marvel Comics</h1>
      <p>Marvel Comics is a New York City-based comic book publisher, a property of The Walt Disney Company since December 31, 2009, and a subsidiary of Disney Publishing Worldwide since March 2023. Marvel was founded in 1939 by Martin Goodman as Timely Comics, and by 1951 had generally become known as Atlas Comics.</p>
    </Col>
    <Col>
     <Slide/>
    </Col>
  </Row>
</Container>
<br/>
<Container className=" p-3  text-center">
  <Button variant="primary ">Book Your Demo</Button>
</Container>
<Container>
  <Row>
    <Col className="mb-3"><Carduse /></Col>
    <Col className="mb-3"><Carduse /></Col>
    <Col className="mb-3"><Carduse /></Col>
  </Row>
</Container>
<Faram/>
<Container>
<SameSame/>
</Container>
<Container>
<Incedecrement/>
</Container>
<Container>
<Box/>
</Container>
<Container>
<Axios/>
</Container>
<Footer/>
</>
);
}

export default HomePages