import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./compnents/NavBar.jsx";
import Title from "./compnents/Title.jsx";
import Bio from "./compnents/Bio.jsx";
import About from "./compnents/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <About />
    </div>
  );
}

export default App;
