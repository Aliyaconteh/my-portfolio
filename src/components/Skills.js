import React from 'react';
import { 
  FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase, 
  FaHtml5, FaCss3Alt, FaNpm 
} from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMysql } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "Bootstrap", icon: <FaCss3Alt /> }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "REST APIs", icon: <FaDatabase /> },
         { name: "Django", icon: <FaReact /> }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "npm", icon: <FaNpm /> }
       
      ]
    }
  ];
  
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.category} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-container">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-icon-wrapper">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx="true">{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        
        .skill-category {
          background-color: var(--light-gray);
          padding: 30px;
          border-radius: var(--border-radius);
          transition: var(--transition);
        }
        
        .skill-category:hover {
          transform: translateY(-5px);
          box-shadow: var(--box-shadow);
        }
        
        .category-title {
          font-size: 1.8rem;
          margin-bottom: 25px;
          color: var(--primary-color);
          text-align: center;
        }
        
        .skills-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        
        .skill-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 10px;
          background-color: var(--light-color);
          border-radius: var(--border-radius);
          transition: var(--transition);
        }
        
        .skill-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .skill-icon-wrapper {
          font-size: 2.5rem;
          color: var(--primary-color);
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .skill-name {
          font-weight: 600;
          text-align: center;
          font-size: 0.95rem;
        }
        
        @media (max-width: 992px) {
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .skills-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .skills-container {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .skill-icon-wrapper {
            font-size: 2rem;
          }
        }
        
        @media (max-width: 480px) {
          .skills-container {
            grid-template-columns: 1fr;
          }
          
          .skill-category {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;