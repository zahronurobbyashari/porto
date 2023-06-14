import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import QA from "./QA";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h1 className="section__title">Skills</h1>
      <span className="section__subtitle">My Technical Level</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <QA />
      </div>
    </section>
  );
};

export default Skills;
