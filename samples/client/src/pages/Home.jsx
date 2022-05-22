import React, {useState, useEffect} from 'react';

import app from "../../scripts/app.js"


const Home = () => {
  const [test, setTest] = useState(0);
  console.log(ready)

  const a = (sample) => {
    console.log(sample)
  }
  function b() {
    console.log("aaaaaaaaa")
  }

  useEffect( () => {
    console.log(test)
  }, [test])

  return (
    <>
      <h1 onClick={() => b()}>HOME</h1>
    
    </>
  );
}

export default Home;