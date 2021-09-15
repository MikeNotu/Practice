import React, { useContext } from "react";
import ApiContext from "./ApiContext";

const TestComponent = () => {
  const { randomMethod } = useContext(ApiContext);

  const handleClick = e => {
    randomMethod();
  };

  return <button onClick={handleClick}>Test</button>;
};

export default TestComponent;
