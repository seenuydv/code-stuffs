import React, { useState } from 'react';
import axios from 'axios';

function Axios() {


  const [data, setData] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [follwer, setFollwer] = useState(''); 
  const BASE_URL = 'https://api.github.com/users/';
  const [username,setUsername] = useState('');

  async function tapme() {
    
      const userResult = await axios.get(`${BASE_URL}${username}`);
      setData(userResult.data.login);
      setImageSrc(userResult.data.avatar_url);
      setFollwer(userResult.data.followers_url)
  }

  function handleChange(evt){
    let data = evt.target.value;
    setUsername(data)
  }

  return (
    <>
    <input type='text' onChange={handleChange}></input>
      <p> ID: {data}</p>
      <img src={imageSrc} alt="adarsh" />
      <p> {follwer}</p>
      <button onClick={tapme}>Click</button>
    </>
  );
}

export default Axios;