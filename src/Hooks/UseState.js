import React from 'react'

const useState = () => {
 const [color, setColor] = useState("Blue");
  const [count,setCount] = useState(0)
  const [car,setCar] = useState({
    brand:"Tata",
    model:"Punch",
    color:"Black",
    year:2025
  });

  function changeColor() {
    setColor("Black");
  }

  function changeCar(){
    setCar((prev)=>{
      return {...prev,model:"Curvv"}
    })
  }
  
  function changeCount(){
    setCount(prev => prev + 1);
     setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
       setCount((prev) => prev + 1);
  }

  return (
    <div>
      <h1>The color of my shirt is {color}</h1>
      <h1>I have {count} shirts</h1>
      <button onClick={changeCount} >Increase 4 shirt Extra</button>
      <button onClick={changeColor}>Change color</button>
      <br />
      <div>
        <h1>My {car.model}</h1>
        <h2>
          {car.year} model {car.brand} {car.color} colored {car.model}
        </h2>
        <button onClick={changeCar}>Change car</button>
      </div>
    </div>
  );
}

export default useState