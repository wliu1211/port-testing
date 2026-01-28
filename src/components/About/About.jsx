import React from 'react'
import './About.css'


function About() {
  return (
    <div id="about" data-aos="zoom-in" >
      <div className="about-info">
        <div className="about-header">
          <h2>About</h2>
          <div className="header-border"></div>
        </div>
        <div className="about-container">
          <p>I started making websites out of curiosity and eventually wanted to explore more of the computer science field at a university. I completed my undergraduate degree at NYU Tandon studying computer science in 2025. I am currently pursuing my master's degree in Artificial Intelligence at University of Pennsylvania.</p>
        </div>
      </div>
      <div className="img-wrapper"></div>
    </div>
  )
}

export default About