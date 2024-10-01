import { useState } from 'react';
import React from 'react';
import './Random-Number.css';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

function SameSame(){
  const [randomNum1, setRandomNum1] = useState(0);
  const [randomNum2, setRandomNum2] = useState(0);
  const [same, setSame] = useState(0);
  const [textcolor1, setTextcolor1] = useState("");
  const [textcolor2, setTextcolor2] = useState("");


  const clickRandomNum = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    let color=['red','yellow','green','pink','purple','blue'];
    let colo1=color[Math.floor(Math.random() * 5)];  
    let colo2=color[Math.floor(Math.random() *5)];  

    setRandomNum1(num1);
    setRandomNum2(num2);
    setSame(num1 === num2);
    setTextcolor1(colo1)
    setTextcolor2(colo2)
  
  };

  return (
    <>
      <Container className='size'>
        <p>Random Number: <span style={{ color: textcolor1}}>{randomNum1}</span></p>
        <p>Random Number: <span style={{ color: textcolor2}}>{randomNum2}</span></p>
        <p style={{ color: same ? 'green' : 'red' }}>{same ? 'Pass' : 'Fail'}</p>
        <Button variant="primary" onClick={clickRandomNum}>Number</Button>
      </Container>
    </>
  );

}
 export default SameSame;







// import { useState } from 'react';
// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';

// function SameSame() {
//   const [randomNum1, setRandomNum1] = useState(0);
//   const [randomNum2, setRandomNum2] = useState(0);
//   const [same, setSame] = useState(false);
//   const [color1, setColor1] = useState('');
//   const [color2, setColor2] = useState('');


//   const clickRandomNum = () => {
//     const num1 = Math.floor(Math.random() * 10);
//     const num2 = Math.floor(Math.random() * 10);

//     setRandomNum1(num1);
//     setRandomNum2(num2);
//     setSame(num1 === num2);
    
//     setColor1(generateRandomColor());
//     setColor2(generateRandomColor());
//   };

//   const generateRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   return (
//     <>
//       <Container>
//         <p>Random Number : <span style={{ color: color1 }}>{randomNum1}</span></p>
//         <p>Random Number : <span style={{ color: color2 }}>{randomNum2}</span></p>
//         <p style={{ color: same ? 'green' : 'red' }}>{same ? 'Pass' : 'Fail'}</p>
//         <Button variant="primary" onClick={clickRandomNum}>Number</Button>
//       </Container>
//     </>
//   );
// }

// export default SameSame;
