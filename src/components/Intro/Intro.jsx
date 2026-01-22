import React from 'react'
import './Intro.css'

function Intro() {
  return (
    <div id="intro">
      <div className="intro-container">
        <div className="intro-header-container">
          <div className="intro-header">
            <h3>Hello World </h3>
          </div>
          <h1>I am Will Liu,</h1>
          <h1>a Fullstack Web Developer</h1>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
        <img src="./images/programmer-avatar.png" alt="programmer-avatar" />
      </div>
    </div>
  )
}

export default Intro