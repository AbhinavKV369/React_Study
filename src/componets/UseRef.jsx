import React, { useEffect, useRef } from 'react'

function UseRef() {
 
    const inputRef = useRef(null);
    
    useEffect(()=>{
        console.log("Component mounted");
        console.log(inputRef);
    },[])

    function handleClick(){
     inputRef.current.focus();
     inputRef.current.style.background = "orange"
    }
  return (
    <div>
      <h1></h1>
      <button onClick={handleClick}>Click me</button>
      <input ref={inputRef} />
    </div>
  );
}

export default UseRef