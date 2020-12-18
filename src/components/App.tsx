import React from "react";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="theme-light">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;