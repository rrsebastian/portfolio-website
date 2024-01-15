import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

function Skill({ skill, extraInfo }) {
  return (
    <div className="skill-wrapper">
      <IoIosCheckmarkCircle className="tick-icon" />
      <div>
        <h4>{skill}</h4>
        <p>{extraInfo}</p>
      </div>
    </div>
  );
}

export default Skill;
