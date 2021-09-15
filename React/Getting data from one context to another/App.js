import React from "react";
import "./styles.css";
import { SessionProvider } from "./SessionContext";
import { ApiProvider } from "./ApiContext";
import TestComponent from "./TestComponent";

export default function App() {
  return (
    <SessionProvider>
      <ApiProvider>
        <TestComponent />
      </ApiProvider>
    </SessionProvider>
  );
}
