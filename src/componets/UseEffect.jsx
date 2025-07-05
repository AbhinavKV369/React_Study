import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("")

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    },[count,color])

    const addCout = () =>{
        setCount(c => c + 1);
    }
    const substractCount = () => {
      setCount(c => c - 1);
    }

    const changeColor = () => {
      setColor(c => c === "green" ? "red" : "green")
    }

  return (
    <div>
     <h2 style={{color:color}} >Count: {count}</h2>
     <button onClick={addCout}>Add</button>
     <button onClick={substractCount}>Substract</button>
     <button onClick={changeColor} >Change Color</button>
    </div>
  )
}

export default UseEffect;