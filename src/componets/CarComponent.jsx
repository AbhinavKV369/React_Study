import React, { useState } from "react";

function CarComponent() {

  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const handleChangeYear = (event) =>{
   setCar(c => ({...c,year:event.target.value}))
  };
  const handleChangeMake = (event) => {
   setCar(c=> ({...c,make:event.target.value}))
  };
  const handleChangeModel = (event) => {
   setCar(c=>({...c,model:event.target.value}))
  };
  return (
    <div>
      <p>
        Your favourite car is : {car.year} {car.make} {car.model}{" "}
      </p>

      <input type="number" value={car.year} onChange={handleChangeYear} />
      <input type="text" value={car.make} onChange={handleChangeMake}/>
      <input type="text" value={car.model} onChange={handleChangeModel} />
    </div>
  );
}

export default CarComponent;
