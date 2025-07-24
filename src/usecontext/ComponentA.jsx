import React, { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("Abhinav KV");

   const handleChangeUser = () => {
    setUser("New User");  
   }
  
  return (
    <div className="box">
      <h1>Component A</h1>
      <h3>Hello {user}</h3>
      <button onClick={handleChangeUser}>Change user</button>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
