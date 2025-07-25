import React, { useCallback, useState } from 'react'
import Header from '../componets/Header';

const UseCallback = () => {
  const [count, setCount] = useState(0);
  
   const newFn = useCallback(()=>{},[])
    return (
      <div>
        <Header newFn={newFn} />
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}>
          Click here
        </button>
      </div>
    );
  }
  

export default UseCallback