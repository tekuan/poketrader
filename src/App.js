import React from "react";
import "./App.css";
import { TeamContextProvider } from "./Context/teamContext";
import Routes from "./routes";

function App() {
  return (
    <TeamContextProvider>
      <Routes />;
    </TeamContextProvider>
  );
}

export default App;
