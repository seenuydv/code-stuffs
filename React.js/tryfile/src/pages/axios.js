import React, { useState } from 'react';
import axios from 'axios';

function Axios() {
  const [data, setData] = useState([]);
  const [imageSrc, setImageSrc] = useState([]);

  async function tapme() {
      const userResult = await axios.get('https://api.github.com/users/adarsh24688');
      console.log(userResult, '<=====');
      setData(userResult.data.login);
      setImageSrc(userResult.data.avatar_url);
    }

  return (
    <>
      <p> ID {data}</p>
      <img src={imageSrc} alt="adarsh" />
      <button onClick={tapme}>Click</button>
    </>
  );
}

export default Axios;