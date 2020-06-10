import React, { useState } from "react";
import "./About.css";

function About() {
  return (
    <React.Fragment>
      <div className="about-div1">
        {/* Title with underline */}
        <div className="about-title-div">
          <a class="about-title-underline">About Me</a>
        </div>
        <div className="about-card">
          <div className="about-card-image">
            <img src={require("../assets/images/card-image.jpg")}></img>
          </div>
          <div className="about-card-name">
            <h3>Luke Grech</h3>
          </div>
          <div className="about-card-location">
            <i class="fas fa-map-marker-alt"></i><h4>Malta</h4>
          </div>
          <div className="about-card-description">
            <p>
              I am a student that is currently pursuing a BSc in Information
              Technology at Middlesex University Malta. I enjoy coding the front
              end parts of web apps in my free time, but I also enjoy learning
              about back-end technologies.
            </p>
            <button className="cv-link-button">
              <a href={require("../assets/pdf/CV.pdf")}>View Resume</a>
            </button>
          </div>
        </div>
      </div>
      <div className="about-div2">
        <ul className="skills-list-container">
          <div className="skills-title">
            <h2>Main Skills</h2>
          </div>
          <div className="skill1">
            <i className="fa fa-html5"></i>
            <li>HTML5</li>
          </div>
          <div className="skill2">
            <i className="fa fa-css3"></i>
            <li>CSS3</li>
          </div>
          <div className="skill3">
            <i className="fab fa-js"></i>
            <li>JavaScript</li>
          </div>
          <div className="skill4">
            <i className="fa fa-react"></i>
            <li>React</li>
          </div>
        </ul>
        <ul className="technologies-list">
          <h2>Other Technologies Used</h2>
          <li>PHP</li>
          <li>Node.js and Express</li>
          <li>MySQL and MongoDB</li>
          <li>AJAX and WebSockets</li>
          <li>Bootstrap</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default About;
