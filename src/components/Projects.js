import React, { useState } from 'react';
import { FaCube, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import smartcareImg from '../assets/images/smartcare.png';
import ecommerceImg from '../assets/images/ecommerce.png';
import WebGLImg from '../assets/webGL.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "WebGL Geometry & Graphics Learning Tool",
      description: "An interactive educational tool for teaching 3D geometry and computer graphics concepts using WebGL. It visualizes a colored cube, coordinate axes, transformations, camera views, projections, lighting, and the final MVP matrix in real time.",
      challenge: "Challenge: Making abstract 3D graphics concepts easier to understand for learners.",
      solution: "Solution: Built real-time visual feedback for transformations, camera views, projections, and lighting so users can connect code changes with visual results.",
      image: WebGLImg,
      tags: ["HTML", "CSS", "JavaScript", "WebGL", "3D Geometry"],
      github: "https://github.com/Aliyaconteh/3D-Geometry-Transformations",
      demo: "https://github.com/aliyaconteh",
      category: "frontend"
    },
    {
      id: 3,
      title: "SmartCare - Healthcare Management System",
      description: "A web-based system for managing patients with role-based access for administrators and staff. It includes patient registration, edit, view, and delete features, along with dashboards.",
      challenge: "Challenge: Organizing sensitive patient records while keeping workflows clear for different staff roles.",
      solution: "Solution: Implemented role-based access, structured patient management features, and dashboard views to make daily healthcare tasks easier to track.",
      image: smartcareImg,
      tags: ["HTML", "CSS", "JS", "Bootstrap", "Node.js", "MySQL"],
      github: "https://github.com",
      demo: "https://github.com/aliyaconteh", 
      category: "fullstack"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description: "A full-featured web-based e-commerce platform with role-based access for administrators and customers. It includes product listings, a shopping cart, order management, payment integration, and interactive analytics dashboards.",
      challenge: "Challenge: Connecting product browsing, cart management, payments, and admin order tracking in one smooth flow.",
      solution: "Solution: Designed a role-based platform with customer shopping features, admin management tools, and analytics dashboards for better business visibility.",
      image: ecommerceImg,
      tags: ["HTML", "CSS", "JS", "Bootstrap", "Node.js", "MySQL"],
      github: "https://github.com",
      demo: "https://github.com/aliyaconteh", 
      category: "fullstack"
    }
    
   
  ];
  
  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'fullstack', label: 'Full-Stack' }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
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
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="project-placeholder" aria-label={project.title}>
                    <FaCube />
                  </div>
                )}
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

                <div className="project-details">
                  <p>{project.challenge}</p>
                  <p>{project.solution}</p>
                </div>
                
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

        .project-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          color: white;
          font-size: 4rem;
          transition: var(--transition);
        }
        
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }

        .project-card:hover .project-placeholder {
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
          background-color: var(--light-color);
          color: var(--primary-color);
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

        .project-details {
          display: grid;
          gap: 10px;
          margin-bottom: 20px;
        }

        .project-details p {
          margin-bottom: 0;
          padding-left: 12px;
          border-left: 3px solid var(--primary-color);
          font-size: 0.95rem;
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
