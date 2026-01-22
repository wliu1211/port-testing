import React from 'react'
import './Education.css'
import nyuLogo from '../../images/NYU-Logo.png'
import upennLogo from '../../images/upenn_logo.png'
import rcccLogo from '../../images/RCC_logo.jpg'
import ucsbLogo from '../../images/UCSB_logo.png'

function Education() {
  return (
    <div id="education" data-aos="fade-up">
      <div className="education-header-container">
        <h1 className="education-header">Education</h1>
        <div className="header-border"></div>
      </div>
      
      <div className="education-container">
        <div className="education-card future upenn" data-aos="fade-up">
          <div className="school-logo upenn">
            <img src={upennLogo} alt="UPenn Logo" />
          </div>
          <div className="school-info">
            <h3>University of Pennsylvania</h3>
            <h4>School of Engineering and Applied Science</h4>
            <p className="degree">M.S. Artificial Intelligence</p>
            <p className="year">Expected 2025 - 2027</p>
          </div>
        </div>

        <div className="education-card current" data-aos="fade-up">
          <div className="school-logo nyu">
            <img src={nyuLogo} alt="NYU Logo" />
          </div>
          <div className="school-info">
            <h3>New York University</h3>
            <h4>Tandon School of Engineering</h4>
            <p className="degree">B.S. Computer Science</p>
            <p className="year">2023 - 2025</p>
          </div>
        </div>        
        
        <div className="education-card past" data-aos="fade-up">
          <div className="school-logo rcc">
            <img src={rcccLogo} alt="Riverside City College Logo" />
          </div>
          <div className="school-info">
            <h3>Riverside City College</h3>
            <h4>College of Arts and Sciences</h4>
            <p className="degree">Associate's Degree Computer Science</p>
            <p className="year">2021 - 2023</p>
          </div>
        </div>

        <div className="education-card ucsb" data-aos="fade-up">
          <div className="school-logo ucsb">
            <img src={ucsbLogo} alt="UCSB Logo" />
          </div>
          <div className="school-info">
          <h3>University of California, Santa Barbara</h3>
          <h4>College of Arts and Sciences</h4>
            <p className="degree">B.A. Biology</p>
            <p className="year">2019 - 2021</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
