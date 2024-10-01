import React,{useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import './incre&decre.css';
 

function Incedecrement() {

    const [count, setCount] = useState(0); 

        function increment() {
      setCount(function (prevCount) {
        return (prevCount += 1);
      });
    }

  
    function decrement() {
      setCount(function (prevCount) {
        if (prevCount > 0) {
          return (prevCount -= 1); 
        } else {
          return (prevCount = 0);
        }
      });
    }
    
    return (
    <>
    <Container fluid className='box'>
        <h1>{count}</h1>
        <Button variant='primary' onClick={increment}>Increment </Button>
        <Button variant='danger' onClick={decrement}>Decrement</Button>
      </Container>
    </>
    
   );
  }

  export default Incedecrement;
  