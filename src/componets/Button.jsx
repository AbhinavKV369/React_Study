import React from "react";

function Button() {

  let count = 0;

  const handleClick = (name) => {
    if(count<3){
      count++;
      console.log(`${name} clicked ${count} times`);
    }else{
      console.log(`${name} Stop clicking me`);
    }
  };

  const eventClick = (e) =>{
    e.target.style.backgroundColor = "red";

  } 
  



  return (
    <div>
      <button onClick={()=> handleClick("Abhinav")}>Click me</button>
      <button onClick={(e)=>eventClick(e)} >Event button</button>
    </div>
  );
}

export default Button;