import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import "./Styles/App.css";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = () => {
    setShowMobileMenu(false);
  };

  console.log(showMobileMenu);

  return (
    <div>
      <Navbar
        handleClick={handleClick}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <Hero handleClick={handleClick} showMobileMenu={showMobileMenu} />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
