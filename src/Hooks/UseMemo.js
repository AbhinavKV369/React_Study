import React, { useMemo, useState } from 'react'

const UseMemo = () => {
 const [number,setNumber] = useState(0);
  const [count,setCount] = useState(0)
  
    function cubeNum(n){
      console.log("Calculation done")
      return Math.pow(n,3)
    }

    const result = useMemo(()=>{
       return cubeNum(number)
    },[number]);

        return (
          <div> 
             <input value={number} onChange={(e)=>{ setNumber(e.target.value) }} />
             <h1>The Cube of number is {result}</h1> 
             <div>
              <h1>The Count is {count}</h1>
              <button onClick={()=>{setCount(prev=> prev + 1 )}} >Count ++</button>
             </div>
         </div>
        )
      }

export default UseMemo