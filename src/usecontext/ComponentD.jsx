import React, { useContext } from "react";
import {UserContext} from "./ComponentA"


function ComponentD() {

  const user = useContext(UserContext)

  return (
    <div className="box">
      ComponentD
      <h3>Bye {user}</h3>
    </div>
  );
}

export default ComponentD;
