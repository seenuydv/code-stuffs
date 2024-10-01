import React,{useState} from 'react';
import './home.css';

function Randomnumber(){
    const [randomNum, setRandomNum] = useState(0);
  
    const clickRandomNum = () => {
     setRandomNum(Math.floor(Math.random() *100));
    };
      return (
        <div className='background'>
        <p> Random Numer: <span>{randomNum}</span></p>
        <button onClick={clickRandomNum}>Random Numer</button>
      </div>
    );
  }
  export default Randomnumber;

  import { useState } from 'react';
import React from 'react';
import './Random-Number.css'
import Button from 'react-bootstrap/esm/Button';
import Header from '../Components/Navbar'
import Container from 'react-bootstrap/esm/Container';

function SameSame(){
  const [randomNum1, setRandomNum1] = useState(0);
  const [randomNum2, setRandomNum2] = useState(0);
  const [same, setSame] = useState(false);

  const clickRandomNum = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    setRandomNum1(num1);
    setRandomNum2(num2);
    setSame(num1 === num2);
  };

  return (
    <>
    <Header/>
      <Container className='size'>
        <p>Random Number: <span>{randomNum1}</span></p>
        <p>Random Number: <span>{randomNum2}</span></p>
        <p><span>{same ? 'True' : 'False'}</span></p>
        <Button variant="primary" onClick={clickRandomNum}>Number</Button>
      </Container>
    </>
  );

}
 export default SameSame;
  

