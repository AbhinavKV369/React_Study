import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
 const [count,setCount] = useState(0);
      function incCount(){
           setCount(count => count + 1);
      };
      function decCount(){
          setCount(count => count - 1);
          
      };

    const value = useRef(0);
    useEffect(()=>{
      value.current += 1
    });
  
    const inputField = useRef();
    function changeInputColor(){
        inputField.current.style.background = "black"
    }

    return (
      <div> 
        <button onClick={incCount}>+1</button>
        <h1>{count}</h1>
        <button onClick={decCount} >-1</button>
        <h2>You have rendered {value.current} times</h2>
        <div>
          <input type="text" ref={inputField} />
          <button onClick={changeInputColor} >Click Here</button>
        </div>
        </div>
    )
  }
     

export default UseRef