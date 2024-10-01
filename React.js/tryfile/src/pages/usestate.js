import React,{useState} from 'react';


function Usestate (){
    const[name,setname]=useState('suraj');
    function realdata() {
        setname("hello suraj")
    }
    return(
        <div className='xyz'>
            <h3>{name}</h3>
            <button onClick={realdata}>Click me</button>
            </div>
         );
}

export default Usestate ;