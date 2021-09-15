import React, { createContext, useContext } from "react";
import SessionContext from "./SessionContext";

const ApiContext = createContext();

const ApiProvider = props => {
  const logoutUser = useContext(SessionContext);

  const randomMethod = () => {
    logoutUser();
  };

  return (
    <ApiContext.Provider value={{ randomMethod: randomMethod }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export { ApiContext as default, ApiProvider };
