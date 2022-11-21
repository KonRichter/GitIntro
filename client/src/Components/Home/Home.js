import './Home.css';
import React from 'react';

function Home() {
  const testArr = ["hi", "hoe", "hoho"]

  return <div className='home'>
    <h1>Home</h1>
    <ul>
      {testArr.map(test => (
        <li key={test}>{test}</li>
      ))}
    </ul>
  </div>;
}

export default Home;
