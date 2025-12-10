import React from 'react';
import MyPhoto from '../assets/images/my-photo.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text" style={{ textAlign: 'center' }}>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Aliya Conteh•</span>
            </h1>
            <h2 className="hero-subtitle">
              Full Stack JavaScript Developer
            </h2>
           

            <div className="hero-image">
              <img src={MyPhoto} alt="Aliya Conteh" className="profile-image" />
            </div>
             <p className="hero-description">
              I build exceptional digital experiences using React, Node.js, and modern web technologies. 
              Passionate about clean code, responsive design, and user-focused solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-outline">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .hero {
          padding-top: calc(var(--header-height) + 50px);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .highlight {
          color: var(--primary-color);
        }

        .hero-subtitle {
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: var(--gray-color);
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 30px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        .profile-image {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid var(--primary-color);
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 20px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.3rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
