import React from "react";
import "../Styles/AboutMe.css";

function AboutMe() {
  return (
    <div id="about-me" className="about-me-container">
      <p className="header-text">Get To Know More</p>
      <h2>About Me</h2>
      <div className="about-me-text-wrapper">
        <p>
          I am an 18-year-old self taught Frontend Developer based in Poland. My
          journey in web development began just last year, and since then, I
          have been dedicated to honing my skills every day. I am passionate
          about learning new things, which is why I find Frontend Development so
          captivating. The field is ever-evolving, presenting continuous
          opportunities for learning and improvement. I am fluent in both
          English and Polish, having lived in Scotland for 12 years. This
          experience has not only enriched my language skills but has also
          provided me with a diverse perspective, allowing me to approach
          development challenges with a global mindset.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
