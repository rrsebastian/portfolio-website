import React from "react";
import Project from "./Project";
import "../Styles/Projects.css";
import CryptoImg from "../assets/CryptoWebsite.png";
import RestaurantImg from "../assets/Restaurant.png";
import LandingImg from "../assets/Landing.png";

function Projects() {
  return (
    <div id="projects" className="projects-container">
      <p className="header-text">Browse My Recent</p>
      <h2>Projects</h2>
      <div className="projects-wrapper">
        <Project
          img={CryptoImg}
          projectName="Crypto Website"
          githubLink="https://github.com/rrsebastian/crypto-website"
          websiteLink="https://evobit.netlify.app/"
        />
        <Project
          img={RestaurantImg}
          projectName="Restaurant Website"
          githubLink="https://github.com/rrsebastian/restaurant-website"
          websiteLink="https://elicieux.netlify.app/"
        />
        <Project
          img={LandingImg}
          projectName="Landing Page"
          githubLink="https://github.com/rrsebastian/landing-page"
          websiteLink="https://web-array-test.netlify.app/"
        />
      </div>
    </div>
  );
}

export default Projects;
