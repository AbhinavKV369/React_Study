import React, { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+1 12344555";
  const name = "Abhinav KV"
  return (
    <AppContext.Provider value={{phone,name}}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
