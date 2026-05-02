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
                  <p className="detail-card challenge-note">{project.challenge}</p>
                  <p className="detail-card solution-note">{project.solution}</p>
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
          padding: 10px 22px;
          background: linear-gradient(145deg, var(--light-gray), var(--light-color));
          border: 1px solid rgba(58, 134, 255, 0.16);
          border-radius: 30px;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          color: var(--dark-color);
        }
        
        .filter-btn.active {
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          color: white;
        }
        
        .filter-btn:hover:not(.active) {
          background-color: rgba(58, 134, 255, 0.1);
          border-color: rgba(58, 134, 255, 0.35);
          transform: translateY(-2px);
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 34px;
        }
        
        .project-card {
          position: relative;
          background:
            linear-gradient(var(--light-gray), var(--light-gray)) padding-box,
            linear-gradient(135deg, rgba(58, 134, 255, 0.65), rgba(131, 56, 236, 0.45), rgba(255, 0, 110, 0.35)) border-box;
          border: 1px solid transparent;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 15% 10%, rgba(58, 134, 255, 0.16), transparent 32%),
            radial-gradient(circle at 85% 0%, rgba(255, 0, 110, 0.12), transparent 28%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        
        .project-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 26px 60px rgba(58, 134, 255, 0.2);
        }

        .project-card:hover::before {
          opacity: 1;
        }
        
        .project-image {
          position: relative;
          height: 220px;
          overflow: hidden;
        }
        
        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease, filter 0.5s ease;
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
          transform: scale(1.08);
          filter: saturate(1.12) contrast(1.04);
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
          background:
            linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(18, 18, 18, 0.82)),
            radial-gradient(circle at center, rgba(58, 134, 255, 0.32), transparent 58%);
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
          background-color: rgba(248, 249, 250, 0.94);
          color: var(--primary-color);
          border-radius: 50%;
          font-size: 1.3rem;
          transition: transform 0.25s ease, background-color 0.25s ease, color 0.25s ease;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.22);
        }
        
        .project-links a:hover {
          background-color: var(--primary-color);
          color: white;
          transform: scale(1.1);
        }
        
        .project-content {
          position: relative;
          padding: 28px;
          z-index: 1;
        }
        
        .project-content h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
          line-height: 1.25;
        }
        
        .project-content p {
          margin-bottom: 22px;
          color: var(--gray-color);
        }

        .project-details {
          display: grid;
          gap: 12px;
          margin-bottom: 22px;
        }

        .detail-card {
          position: relative;
          margin-bottom: 0;
          padding: 13px 14px 13px 16px;
          border: 1px solid rgba(58, 134, 255, 0.14);
          border-left: 4px solid var(--primary-color);
          border-radius: 14px;
          background: rgba(58, 134, 255, 0.07);
          font-size: 0.95rem;
          line-height: 1.55;
        }

        .dark-mode .detail-card {
          background: rgba(58, 134, 255, 0.1);
          border-color: rgba(58, 134, 255, 0.22);
        }

        .solution-note {
          border-left-color: var(--secondary-color);
          background: rgba(131, 56, 236, 0.08);
        }

        .dark-mode .solution-note {
          background: rgba(131, 56, 236, 0.12);
        }
        
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tag {
          padding: 6px 13px;
          background: rgba(58, 134, 255, 0.12);
          color: var(--primary-color);
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          border: 1px solid rgba(58, 134, 255, 0.16);
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
