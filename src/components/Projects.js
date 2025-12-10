import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import donationImg from '../assets/images/donation-platform.png';
import shopImg from '../assets/images/shop-system.png';
import smartcareImg from '../assets/images/smartcare.png';


const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "Donation Platform",
      description: "Platform to browse campaigns, donate, track social impact, generate receipts, and manage campaigns via admin dashboard.",
       image: donationImg,
      tags: ["React", "Node.js", "MySQL", "Bootstrap"],
      github: "https://github.com/aliyaconteh",
      demo: "https://github.com/aliyaconteh",
      category: "fullstack"
    },
    {
       id: 2,
      title: "Shop Management System",
      description: "Manage products, sales, and inventory with React frontend and Django REST Framework backend. Features search, filter, and admin authentication with JWT.",
      image: shopImg,
      tags: ["React", "Bootstrap", "Django", "MySQL", "JWT"],
      github: "https://github.com",
      demo: "https://smartstuck.netlify.app",
      category: "fullstack"
    },
    {
      id: 3,
      title: "SmartCare – Healthcare Management System",
      description: "A web-based system for managing patients with role-based access for Admin and Staff. Includes patient registration, edit/view/delete features, and dashboards.",
      image: smartcareImg,
      tags: ["HTML", "CSS", "JS", "Bootstrap", "Node.js", "MySQL"],
      github: "https://github.com",
      demo: "https://github.com/aliyaconteh", 
      category: "fullstack"
    },
    
   
  ];
  
  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'fullstack', label: 'Full Stack' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Some of my Projects</h2>
        
        <div className="project-filters">
          {filters.map((filterItem) => (
            <button
              key={filterItem.key}
              className={`filter-btn ${filter === filterItem.key ? 'active' : ''}`}
              onClick={() => setFilter(filterItem.key)}
            >
              {filterItem.label}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx="true">{`
        .project-filters {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 8px 20px;
          background-color: var(--light-gray);
          border: none;
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }
        
        .filter-btn.active {
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          color: white;
        }
        
        .filter-btn:hover:not(.active) {
          background-color: rgba(58, 134, 255, 0.1);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }
        
        .project-card {
          background-color: var(--light-gray);
          border-radius: var(--border-radius);
          overflow: hidden;
          transition: var(--transition);
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--box-shadow);
        }
        
        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
        
        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition);
        }
        
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .project-links {
          display: flex;
          gap: 20px;
        
        }
        
        .project-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background-color: blue;
          color: var(--dark-color);
          border-radius: 50%;
          font-size: 1.3rem;
          transition: var(--transition);
        }
        
        .project-links a:hover {
          background-color: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }
        
        .project-content {
          padding: 25px;
        }
        
        .project-content h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }
        
        .project-content p {
          margin-bottom: 20px;
          color: var(--gray-color);
        }
        
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tag {
          padding: 5px 12px;
          background-color: rgba(58, 134, 255, 0.1);
          color: var(--primary-color);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-filters {
            gap: 10px;
          }
          
          .filter-btn {
            padding: 6px 15px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;