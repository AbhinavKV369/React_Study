import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Abhinav");

  const updateName = () => {
    setName("Abhinav KV"); 
    console.log("Name");
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set name</button>
    </div>
  );
}

export default MyComponent;
