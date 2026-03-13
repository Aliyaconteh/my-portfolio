import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-text">
          <p>
            I'm a JavaScript developer focused on building responsive, user-friendly web
            applications. My journey started with vanilla JavaScript and evolved into specializing
            in React and the broader JavaScript ecosystem.
          </p>
          <p>
            I care about clean, maintainable code and interfaces that feel fast and intuitive.
            I'm always learning new tools and improving my workflow to deliver better results.
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .about-text {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .about-text p {
          margin-bottom: 20px;
          font-size: 1.1rem;
        }

        .section-title {
          text-align: center;
          margin-bottom: 30px;
        }
      `}</style>
    </section>
  );
};

export default About;
