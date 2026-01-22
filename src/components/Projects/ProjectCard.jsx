import React from 'react'

function ProjectCard({project}) {
    const {name, animateType, animateDelay, icon, description, skills, github} = project;

    const openSource = (e) => {
        e.stopPropagation();
    }
    
  return (
    <>
        <div className="card-container" data-aos={animateType} data-aos-delay={animateDelay}>
            <div className="card-header">
                <h3>{name}</h3>
                {icon}
            </div>
            {skills && skills.length > 0 ? (
                <div className="card-skills">
                    {skills.map((skill, index)=> (
                        <p key={index}>{skill}</p>
                    ))}
                </div>
            ) : (
                <div className="card-skills-placeholder"></div>
            )}
            <div className="description-container">
            <div className="card-description">
                <p>{description}</p>
            </div>
                <div className="description-fade"></div>
            </div>
            <div className="card-cta">
                {github && (
                <button className="open-source-btn" onClick={openSource}>
                    <a href={github}>Open Source</a>
                        <i className="fa-brands fa-github"></i>
                </button>
                )}
                {!github && (
                    <span className="coming-soon">Coming Soon</span>
                )}
            </div>
        </div>
    </>
  )
}

export default ProjectCard