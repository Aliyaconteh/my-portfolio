import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Makeni Unimak",
      period: "2022 - 2026",
      description: "Specialized in software engineering and web technologies."
    },
    {
      degree: "Frontend Development Libraries",
      institution: "FreeCodeCamp",
      period: "2025",
      description: "Certification in advanced JavaScript concepts and algorithms."
    },
    {
      degree: "Data analysis essentials",
      institution: "Cisco Networking Academy",
      period: "2024",
      description: "Completed a comprehensive course on data analysis fundamentals, including data collection, cleaning, visualization, and interpretation using real-world datasets. Gained practical skills in analyzing and drawing insights from data to support informed decision-making."
    },
  ];
  
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="experience-content">
          <div className="experience-section">
            <div className="section-header">
              <FaGraduationCap className="section-icon" />
              <h3>Education & Certifications</h3>
            </div>
            
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <div className="timeline-meta">
                      <span className="institution">{edu.institution}</span>
                      <span className="period">{edu.period}</span>
                    </div>
                    <p>{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Optional: Add more sections here if needed */}
        </div>
      </div>
      
      <style jsx="true">{`
        .experience-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 50px;
        }
        
        .experience-section {
          background-color: var(--light-gray);
          padding: 30px;
          border-radius: var(--border-radius);
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }
        
        .section-icon {
          font-size: 1.8rem;
          color: var(--primary-color);
        }
        
        .section-header h3 {
          font-size: 1.8rem;
        }
        
        .timeline {
          position: relative;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 20px;
          top: 0;
          height: 100%;
          width: 2px;
          background-color: var(--primary-color);
        }
        
        .timeline-item {
          position: relative;
          margin-bottom: 30px;
          padding-left: 50px;
        }
        
        .timeline-marker {
          position: absolute;
          left: 12px;
          top: 5px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: var(--primary-color);
          border: 3px solid var(--light-color);
          z-index: 1;
        }
        
        .timeline-content h4 {
          font-size: 1.3rem;
          margin-bottom: 5px;
        }
        
        .timeline-meta {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          font-weight: 600;
          color: var(--primary-color);
        }
        
        .achievements {
          padding-left: 20px;
          margin-top: 10px;
        }
        
        .achievements li {
          margin-bottom: 5px;
        }
        
        @media (max-width: 768px) {
          .timeline-meta {
            flex-direction: column;
            gap: 5px;
          }
          
          .experience-section {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;