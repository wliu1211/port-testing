import React, { useState, useEffect } from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'

const projects = [
    {
        name: "Alzheimer's Detection", 
        className: "alzheimer", 
        icon: <i className="fa-solid fa-brain"></i>, 
        description: "Analyzed raw EEG data set and created a machine learning model predicting patients with Alzheimer's disease.", 
        skills: ["Python", "MNE"], 
        github:"", 
        animateType: "zoom-in", 
        animateDelay: "600",
        category: ["ai"]
    },
    {
        name: "PCOS Detection System", 
        className: "five", 
        icon: <i className="fa-solid fa-laptop-code"></i>, 
        description: "A machine learning project that contains various predictive models for early detection of Polycystic Ovary Syndrome using datasets of various parameters. Plots and graphs were used to identify any significant features or trends in the dataset to have the models learn from.", 
        skills: ["Python", "Kaggle"], 
        github:"https://github.com/wliu1211/nyu-dsbc-project",  
        animateType: "zoom-in", 
        animateDelay: "800",
        category: ["ai"]
    },
    {
        name: "AI Health Assistant", 
        className: "seven", 
        icon: <i className="fa-solid fa-heart-pulse"></i>, 
        description: "It tracks users diet's macros (calories, carbs, fats, proteins) and exercise information and it will generate a health score for the user. It has an AI online coach that makes it easy for users to add food to their meal plan or diet if they tell the AI to do so. It basically tracks your diet and plans meals for you. It also has a chatbot that can answer questions about the app and the user's health.", 
        skills: ["React", "Node", "Vite", "OpenAi", "PostgreSQL"], 
        github:"https://github.com/Mirap9615/health-motivator", 
        animateType: "zoom-in", 
        animateDelay: "500",
        category: ["web", "ai"]
    },
    {
        name: "Cryptocurrency Tracker", 
        className: "three", 
        icon: <i className="fa-brands fa-bitcoin"></i>,  
        description: "A fullstack Crypto Tracker application that displays the stats of various cryptocurrency that is fetched from the Coingecko API. The user can see the charts of the crypto market price. They can also make watchlists that is saved into the database.", 
        skills: ["React", "Node", "Express", "MongoDB"], 
        github:"https://github.com/wliu1211/crypto-tracker",  
        animateType: "zoom-in", 
        animateDelay: "700",
        category: ["web"]
    },
    {
        name: "26 Puzzle AI Solver", 
        className: "six", 
        icon: <i className="fa-solid fa-robot"></i>, 
        description: "AI puzzle solver for a 26-tile, 3x3x3 grid with one blank spot, moving tiles from an initial state to a goal state.", 
        skills: ["C++"], 
        github:"https://github.com/wliu1211/26-puzzle-solver",  
        animateType: "zoom-in", 
        animateDelay: "800",
        category: ["ai"]
    },
    {
        name: "Twitter Clone", 
        className: "one", 
        icon: <i className="fa-brands fa-twitter"></i>, 
        description: "A simple fullstack Twitter clone web application. It contains features like the login, tweeting, direct messages, notifications, searching users, and profile systems.", 
        skills: ["React", "Node", "Express", "MongoDB"], 
        github:"https://github.com/wliu1211/twitter-clone-frontend", 
        animateType: "zoom-in", 
        animateDelay: "500",
        category: ["web"]
    },
    {
        name: "eCommerce Site", 
        className: "four", 
        icon: <i className="fa-solid fa-cart-shopping"></i>, 
        description: "A simple fullstack online shopping website that handles the items displayed, cart, shipping, and payment systems. It fetches the apis of a third-party database website for their data and displays it. It handles price calculations, sorting, input errors, and more.", 
        skills: ["React", "Node", "Express", "APIs"], 
        github:"https://github.com/wliu1211/full-stack-ecommerce",  
        animateType: "zoom-in", 
        animateDelay: "800",
        category: ["web"]
    },
]

function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [animating, setAnimating] = useState(false);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(activeCategory)
          : project.category === activeCategory
      );
    
  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;
    
    setAnimating(true);
    setTimeout(() => {
      setActiveCategory(category);
      setTimeout(() => {
        setAnimating(false);
      }, 100);
    }, 300);
  };

  return (
    <section id="projects" data-aos="fade-out">
        <div className="project-header-container">
            <h1 className="projects-header">Projects</h1>
            <div className="header-border"></div>
        </div>
        
        <div className="projects-filter">
            <div className="filter-toggle">
                <button 
                    className={activeCategory === 'all' ? 'active' : ''} 
                    onClick={() => handleCategoryChange('all')}
                >
                    All Projects
                </button>
                <button 
                    className={activeCategory === 'web' ? 'active' : ''} 
                    onClick={() => handleCategoryChange('web')}
                >
                    Web Development
                </button>
                <button 
                    className={activeCategory === 'ai' ? 'active' : ''} 
                    onClick={() => handleCategoryChange('ai')}
                >
                    AI/ML
                </button>
            </div>
        </div>
        
        <div className={`cards-container ${animating ? 'fade-out' : 'fade-in'}`}>
            {filteredProjects.map((project, index)=> (
                <ProjectCard 
                    key={`${activeCategory}-${index}`}
                    index={index}
                    project={project}
                />
            ))}
        </div>
    </section>
  )
}

export default Projects