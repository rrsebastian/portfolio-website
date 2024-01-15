import React from "react";
import "../Styles/Skills.css";
import Skill from "./Skill";

function Skills() {
  return (
    <div id="skills-container" className="skills-container">
      <p className="header-text">Explore My</p>
      <h2>Skills</h2>
      <div className="both-skill-container-wrapper">
        <div className="skills-text-container">
          <h3>How i learnt these Skills</h3>
          <div>
            I have honed my skills through dedicated courses, YouTube, and
            extensive research. Currently immersed in the ongoing learning
            process of TypeScript, I have already gained a good understanding of
            its principles. With strategic plans in place, I aim to continually
            enhance my expertise. My goal is to explore additional libraries and
            frameworks, aspiring to evolve into a more proficient and efficient
            developer.
          </div>
        </div>
        <div className="right-skills-container">
          <h3>Frontend Development</h3>
          <div className="skills-list-wrapper">
            <div>
              <Skill skill="HTML" extraInfo="Experienced" />
              <Skill skill="CSS" extraInfo="Experienced" />
              <Skill skill="JavaScript" extraInfo="Intermediate" />
              <Skill skill="Responsive Design" extraInfo="Intermediate" />
            </div>
            <div>
              <Skill skill="React JS" extraInfo="Experienced" />
              <Skill skill="TypeScript" extraInfo="Basics" />
              <Skill skill="Git" extraInfo="Intermediate" />
              <Skill skill="APIs" extraInfo="Intermediate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
