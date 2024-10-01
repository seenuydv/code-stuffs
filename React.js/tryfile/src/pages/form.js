import React,{useState} from 'react';

function Form (){
    const[data,setData]=useState('');

    function Change(evt){
        console.log (evt,"<=====")
        setData(evt.target.value) 
     }

     function Tapme(){
        setData()

      }
    return(
        <>
        <br/>
        <input type='text' onChange={Change} placeholder='email'/>
        <p>{data}</p>
        <button onClick={Tapme}>submit</button>
         </>
    );
}

export default Form;