import React, { useEffect, useState } from "react";
import "../Styles/Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";

function Navbar({ handleClick, showMobileMenu, setShowMobileMenu }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="navbar-container">
      <h1>Sebastian Torkowski</h1>
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="menu-btn"
      >
        {!showMobileMenu ? (
          <GiHamburgerMenu className="hamburger-icon" />
        ) : (
          <IoIosClose className="close-icon" />
        )}
      </button>

      <nav
        style={{
          right: showMobileMenu && "0px",
          visibility:
            showMobileMenu || windowSize > 1280 ? "visible" : "hidden",
          display: windowSize > 1280 ? "flex" : "initial",
        }}
      >
        <li>
          <Link
            onClick={handleClick}
            to="about-me"
            smooth={true}
            duration={500}
            offset={-150}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="skills-container"
            smooth={true}
            duration={500}
            offset={-90}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
            offset={-90}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-90}
          >
            Contact
          </Link>
        </li>
      </nav>
    </header>
  );
}

export default Navbar;
