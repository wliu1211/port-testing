import React, { useState, useEffect } from 'react'
import "./Skills.css"
import Aos from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  const [activeSkillSet, setActiveSkillSet] = useState('web');
  
  useEffect(() => {
    Aos.init({duration: 1500});
    Aos.refresh();
  }, []);
  
  return (
    <div id="skills">
      <div className="skills-header-container" data-aos="fade-out">
        <h1 className="skills-header">Skills</h1>
        <div className="header-border"></div>
      </div>
      
      <div className="skills-tabs-container">
        <button 
          className={`skills-tab ${activeSkillSet === 'web' ? 'active' : ''}`}
          onClick={() => setActiveSkillSet('web')}
        >
          <i className="fa-solid fa-code"></i>
          <span>Web Development</span>
        </button>
        <button 
          className={`skills-tab ${activeSkillSet === 'ai' ? 'active' : ''}`}
          onClick={() => setActiveSkillSet('ai')}
        >
          <i className="fa-solid fa-brain"></i>
          <span>ML/AI</span>
        </button>
      </div>
      
      {activeSkillSet === 'web' && (
        <div className="skills-container web-skills">
          <div className='front-container' data-aos="fade-right">
            <div className="front-header">
              <h3>Frontend Skills</h3>
            </div>
            <div className="front-body">
              <div className="body-wrapper">
                <div className="list-wrapper html">
                  <i className="fa-brands fa-html5"></i>
                  <p className='front-list'>HTML</p>
                </div>
                <div className="list-wrapper css">
                  <i className="fa-brands fa-css3-alt"></i>
                  <p className='front-list'>CSS</p>
                </div>
                <div className="list-wrapper javascript">
                  <i className="fa-brands fa-square-js"></i>
                  <p className='front-list'>Javascript</p>
                </div>
                <div className="list-wrapper react">
                  <i className="fa-brands fa-react"></i>
                  <p className='front-list'>React</p>
                </div>
                <div className="list-wrapper bootstrap">
                  <i className="fa-brands fa-bootstrap"></i>
                  <p className='front-list'>Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
          <div className="back-container" data-aos="fade-down">
            <div className="back-header">
              <h3>Backend Skills</h3>
            </div>
            <div className="back-body">
              <div className="body-wrapper">
                <div className="list-wrapper node">
                  <i className="fa-brands fa-node"></i>
                  <p className='back-list'>Node</p> 
                </div>
                <div className="list-wrapper webSockets">
                  <i className="fa-solid fa-plug"></i>
                  <p className='back-list'>Web Sockets</p>
                </div>
                <div className="list-wrapper apis">
                  <i className="fa-solid fa-gear"></i>
                  <p className='back-list'>APIs</p>
                </div>
                <div className="list-wrapper mongo">
                  <i className="fa-solid fa-database"></i>
                  <p className='back-list'>MongoDB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="other-container" data-aos="fade-left">
            <div className="other-header">
              <h3>Other Skills</h3>
            </div>
            <div className="other-body">
              <div className="body-wrapper">
                <div className="list-wrapper unity">
                  <i className="fa-brands fa-unity"></i>
                  <p className='back-list'>Unity</p> 
                </div>
                <div className="list-wrapper github">
                  <i className="fa-brands fa-github"></i>
                  <p className='back-list'>GitHub</p>
                </div>
                <div className="list-wrapper python">
                  <i className="fa-brands fa-python"></i>
                  <p className='back-list'>Python</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {activeSkillSet === 'ai' && (
        <div className="skills-container ai-skills">
          <div className='ml-container' data-aos="fade-right">
            <div className="ml-header">
              <h3>Machine Learning</h3>
            </div>
            <div className="ml-body">
              <div className="body-wrapper">
                <div className="list-wrapper python">
                  <i className="fa-brands fa-python"></i>
                  <p className='ml-list'>Python</p>
                </div>
                <div className="list-wrapper tensorflow">
                  <i className="fa-solid fa-brain"></i>
                  <p className='ml-list'>TensorFlow</p>
                </div>
                <div className="list-wrapper sklearn">
                  <i className="fa-solid fa-chart-line"></i>
                  <p className='ml-list'>Scikit-learn</p>
                </div>
                <div className="list-wrapper pandas">
                  <i className="fa-solid fa-table"></i>
                  <p className='ml-list'>Pandas</p>
                </div>
                <div className="list-wrapper numpy">
                  <i className="fa-solid fa-calculator"></i>
                  <p className='ml-list'>NumPy</p>
                </div>
                <div className="list-wrapper kaggle">
                  <i className="fa-solid fa-trophy"></i>
                  <p className='ml-list'>Kaggle</p>
                </div>
              </div>
            </div>
          </div>
          <div className="ai-container" data-aos="fade-left">
            <div className="ai-header">
              <h3>AI Integration</h3>
            </div>
            <div className="ai-body">
              <div className="body-wrapper">
                <div className="list-wrapper gemini">
                  <i className="fa-solid fa-robot"></i>
                  <p className='ml-list'>Gemini</p>
                </div>
                <div className="list-wrapper deepseek">
                  <i className="fa-solid fa-microchip"></i>
                  <p className='ml-list'>DeepSeek</p>
                </div>
                <div className="list-wrapper chatgpt">
                  <i className="fa-solid fa-comment-dots"></i>
                  <p className='ml-list'>ChatGPT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Skills