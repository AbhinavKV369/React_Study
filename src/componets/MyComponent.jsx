import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Abhinav");
  const [age, setAge] = useState(0);
  const [isStudent, setIsStudent] = useState(false);

  const updateName = () => {
    setName("Abhinav KV"); 
    console.log("Name");
  };

  const incrementAge = () =>{
    setAge(age + 1);
    console.log("Age");
  }

  const toggleStatus = () => {
    setIsStudent(!isStudent);
    console.log("Status");
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>IsStudent: {isStudent ? "true" : "false"}</p>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
