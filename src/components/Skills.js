import React from 'react';
import { 
  FaJs, FaReact, FaNodeJs
} from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMysql, SiSupabase } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "Supabase", icon: <SiSupabase /> }
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
          grid-template-columns: repeat(2, 1fr);
          gap: 34px;
        }
        
        .skill-category {
          position: relative;
          overflow: hidden;
          background:
            linear-gradient(var(--light-gray), var(--light-gray)) padding-box,
            linear-gradient(135deg, rgba(58, 134, 255, 0.58), rgba(131, 56, 236, 0.4)) border-box;
          padding: 34px;
          border: 1px solid transparent;
          border-radius: 24px;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .skill-category::before {
          content: '';
          position: absolute;
          width: 180px;
          height: 180px;
          top: -90px;
          right: -70px;
          background: radial-gradient(circle, rgba(58, 134, 255, 0.22), transparent 70%);
          pointer-events: none;
        }

        .skill-category::after {
          content: '';
          position: absolute;
          inset: auto 28px 0 28px;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(58, 134, 255, 0.55), transparent);
        }
        
        .skill-category:hover {
          transform: translateY(-9px);
          box-shadow: 0 26px 60px rgba(58, 134, 255, 0.18);
        }
        
        .category-title {
          font-size: 1.8rem;
          margin-bottom: 28px;
          color: var(--primary-color);
          text-align: center;
          position: relative;
          z-index: 1;
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
          justify-content: center;
          min-height: 138px;
          padding: 24px 14px;
          background:
            linear-gradient(145deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.58));
          border: 1px solid rgba(58, 134, 255, 0.14);
          border-radius: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .dark-mode .skill-item {
          background: linear-gradient(145deg, rgba(18, 18, 18, 0.74), rgba(52, 58, 64, 0.86));
          border-color: rgba(58, 134, 255, 0.2);
        }
        
        .skill-item:hover {
          transform: translateY(-6px) scale(1.02);
          border-color: rgba(58, 134, 255, 0.35);
          box-shadow: 0 18px 35px rgba(58, 134, 255, 0.16);
        }
        
        .skill-icon-wrapper {
          width: 68px;
          height: 68px;
          font-size: 2.35rem;
          color: var(--primary-color);
          margin-bottom: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(58, 134, 255, 0.16), rgba(131, 56, 236, 0.12));
          box-shadow: inset 0 0 0 1px rgba(58, 134, 255, 0.12);
          transition: transform 0.3s ease;
        }

        .skill-item:hover .skill-icon-wrapper {
          transform: rotate(-4deg) scale(1.06);
        }
        
        .skill-name {
          font-weight: 600;
          text-align: center;
          font-size: 1rem;
          letter-spacing: 0.01em;
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
