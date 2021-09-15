import React, { createContext } from "react";

const SessionContext = createContext();

const SessionProvider = props => {
  const logoutUser = () => {
    alert("Logout user, but fast!");
  };

  return (
    <SessionContext.Provider value={logoutUser}>
      {props.children}
    </SessionContext.Provider>
  );
};

export { SessionContext as default, SessionProvider };
