import React from "react";
import "../Styles/Hero.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Cv from "../assets/CV.pdf";
import { Link } from "react-scroll";

function Hero({ handleClick }) {
  return (
    <div className="hero-container">
      <div className="hero-info-wrapper">
        <p>Hello I'm</p>
        <h2>Sebastian Torkowski</h2>
        <h3>Frontend Developer</h3>
        <div className="hero-button-wrapper">
          <a href={Cv} download="Cv">
            <button className="hero-cv-btn">Download CV</button>
          </a>
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            offset={-90}
          >
            <button className="hero-contact-btn">Contact Info</button>
          </Link>
        </div>
        <div className="hero-icons-wrapper">
          <a
            href="https://www.linkedin.com/in/sebastian-torkowski-6557842a3/"
            target="_blank"
          >
            <FaLinkedin className="linkedin-icon" />
          </a>
          <a href="https://github.com/rrsebastian" target="_blank">
            <FaGithub className="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
