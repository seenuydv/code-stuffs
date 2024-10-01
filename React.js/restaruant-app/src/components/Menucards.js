import React, { useEffect, useState } from 'react';
import { Container, Col, Card, Button, Accordion } from 'react-bootstrap';
import BeverageImg from '../assests/page1img/Beverage.jpg';
import ChineseStarterImg from '../assests/page1img/Chinese_starter.jpeg';
import IndianMainCourseImg from '../assests/page1img/Indina_main_course.jpg';
import ThaliImg from '../assests/page1img/Thali.webp';
import DessertsImg from '../assests/page1img/desserts.jpg';
import cardpij from "../assests/page1img/Chinese_starter.jpeg";
import './Menucards.css';
import products from './Product';
import CardCustom from './CardCustom';



function Menucards() {
  // State to manage the count for the item
  const [count1, setCount1] = useState({});
  const [counts, setCounts] = useState(Array(products.length).fill(0));
 const [data,setDtaa] =useState([{}])

 
  return (
    <>
      {/* Cards Section */}
      <Container className='asd'>
        <Col>
          <Card>
            <Card.Img variant="top" src={BeverageImg} alt="Beverages" />
            <Card.Body>
              <Card.Title>Beverages</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={ChineseStarterImg} alt="Chinese starter" />
            <Card.Body>
              <Card.Title>Chinese & Starter</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={IndianMainCourseImg} alt="Indian Main Course" />
            <Card.Body>
              <Card.Title>Indian Main Course</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={ThaliImg} alt="Thali" />
            <Card.Body>
              <Card.Title>Thali</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src={DessertsImg} alt="Desserts" />
            <Card.Body>
              <Card.Title>Desserts</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Container>
      <br />

      {/* Accordion Section with Counter */}
      <Container>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Pizza</Accordion.Header>
            <Accordion.Body>
              {
                products.map((data)=>{
                  return <CardCustom datas={data} />
                })
              }
         
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default Menucards;
