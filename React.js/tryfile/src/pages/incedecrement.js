import React,{useState} from 'react';
import './home.css';

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
    
        <div className='button'>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        </div>
    
        );
  }

  export default Incedecrement;
  