import React, { useState } from "react";

function FoodComponent() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  function handleAddFood() {
   const newFood = document.getElementById("foodInput").value;
   document.getElementById("foodInput").value = "";
   setFoods(f => [...f,newFood])
  }
  function handleRemoveFood(index) {
    setFoods(foods.filter((_,i)=> i !== index))
  }

  return (
    <div>
      <h1>List of food</h1>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food} <span onClick={()=> handleRemoveFood(index)} >x</span> </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Add your food here" />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  );
}

export default FoodComponent;
