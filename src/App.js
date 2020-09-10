import React from "react";
import "./App.css";
import NavBar from "./compnents/NavBar.jsx";
import Title from "./compnents/Title.jsx";
import Bio from "./compnents/Bio.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <Bio />
    </div>
  );
}

export default App;
