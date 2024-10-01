// import React,{useState} from "react";
// import './home.css'; 
// import Upper from "../components/navbar";

function Home(){
    const [data,setData]=useState("hello ");
    function test(){
        setData("Helllo Adarah")
    }

  
    return(
        <>
        <div className="app">
      
        <h1>{data}</h1>   
        <button onClick={test}>Click me</button>     
        </div>
        </>
    );
}

export default Home;