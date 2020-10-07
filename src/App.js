import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./compnents/NavBar.jsx";
import Title from "./compnents/Title.jsx";
import Bio from "./compnents/Bio.jsx";
import About from "./compnents/About";
import Logos from "./compnents/Logos";
import Projects from "./compnents/Projects";
import Education from "./compnents/Education";
import Contact from "./compnents/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <About />
      <Projects />
      <Logos />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
