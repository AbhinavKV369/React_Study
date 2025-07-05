import React, { useState } from 'react'

function AddCarComponent() {

    const handleAddCar = () => {
      const newCar = {
        year: carYear,
        make: carMake,
        model: carModel,
      };
      setCars(c => [...c, newCar]);
    };
  

    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState(new Date().getFullYear());
    const [carMake,setCarmake] = useState("");
    const [carModel,setCarModel] = useState("");
   
    const handleCarYear = (event) =>{
        setCarYear(event.target.value);
    };
    const handleCarMake = (event) =>{
        setCarmake(event.target.value);
    };
    const handleCarModel = (event) =>{
        setCarModel(event.target.value);
    };

    const handleRemoveCar = (index) => {
      setCars(cars => cars.filter((_, i) => i !== index));
    }

  return (
    <div>
      <h2>Our car collection</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} {car.make} {car.model} <span ><a style={{background:"red",border:"3px"}} onClick={()=>handleRemoveCar(index)}>Remove</a></span>
          </li>
        ))}
      </ul>
      <input
        type="number"
        name=""
        value={carYear}
        id=""
        onChange={handleCarYear}
      />
      <input
        type="text"
        name=""
        value={carMake}
        id=""
        onChange={handleCarMake}
      />
      <input
        type="text"
        name=""
        value={carModel}
        id=""
        onChange={handleCarModel}
      />
      <button onClick={handleAddCar}> Add Car </button>
    </div>
  );
}

export default AddCarComponent;