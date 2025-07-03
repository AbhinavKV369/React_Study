
import { useState } from 'react'

function Counter() {

    const [count,setCount] = useState(0);
    
     const increment = () =>{
       
        setCount(c => c + 1);  
     }
     const decrement = () =>{
        setCount(c => c - 1);
     }
     const reset = () =>{
        setCount(0);
     }

  return (
    <div className="counter-container">
      <h1 className='count'>{count}</h1>
      <div className='button-container'>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}

export default Counter