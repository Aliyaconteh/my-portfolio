import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-text">
          <p>
            I'm a passionate JavaScript developer building modern web applications.
            My journey started with vanilla JavaScript and evolved into specializing in React and the
            broader JavaScript ecosystem.
          </p>
          <p>
            I believe in writing clean, maintainable code and building products that not only 
            work smoothly but also feel great to use. I’m always exploring new technologies and 
            improving my skill set to stay updated in the fast-moving tech world.
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
