import React from 'react';
import { FaArrowUp, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Social media links array
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/aliyaconteh', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/aliya-conteh', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/AliyaConteh', label: 'Twitter' },
    { icon: <FaEnvelope />, href: 'mailto:contehaliya8@gmail.com', label: 'Email' }
  ];
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo section */}
          <div className="footer-logo">
            {/* Social media icons */}
            <div className="social-icons">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="social-icon"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <button 
            className="scroll-top" 
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
      
      <style jsx="true">{`
        .footer {
          background-color: #343a40; /* Fixed dark color for light mode */
          color: #f8f9fa; /* Fixed light text for light mode */
          padding: 60px 0 30px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        /* Dark mode styles */
        .dark-mode .footer {
          background-color: #1a1a1a; /* Even darker for dark mode */
          color: #f8f9fa; /* Same light text */
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-bottom: 50px;
        }
        
        .footer-logo .logo-text {
          font-size: 1.8rem;
          font-weight: 700;
          color: #3a86ff; /* Fixed primary color */
        }
        
        .footer-logo p {
          margin-top: 15px;
          margin-bottom: 20px;
          opacity: 0.8;
        }
        
        /* Social icons styling */
        .social-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-top: 20px;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          color: #f8f9fa; /* Fixed light color */
          border-radius: 50%;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        /* Dark mode social icons */
        .dark-mode .social-icon {
          background-color: rgba(255, 255, 255, 0.15);
          color: #f8f9fa;
        }
        
        .social-icon:hover {
          background-color: #3a86ff; /* Fixed primary color */
          color: white;
          transform: translateY(-3px);
        }
        
        .footer-links h4,
        .footer-tech h4 {
          font-size: 1.3rem;
          margin-bottom: 20px;
          color: #3a86ff; /* Fixed primary color */
        }
        
        .footer-links ul,
        .footer-tech ul {
          list-style: none;
        }
        
        .footer-links li,
        .footer-tech li {
          margin-bottom: 10px;
        }
        
        .footer-links a {
          color: #f8f9fa; /* Fixed light color */
          text-decoration: none;
          transition: all 0.3s ease;
          opacity: 0.8;
        }
        
        .dark-mode .footer-links a {
          color: #f8f9fa; /* Same light color for dark mode */
        }
        
        .footer-links a:hover {
          opacity: 1;
          color: #3a86ff; /* Fixed primary color */
        }
        
        .footer-tech li {
          opacity: 0.8;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Dark mode footer border */
        .dark-mode .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        
        .footer-bottom p {
          display: flex;
          align-items: center;
          gap: 5px;
          opacity: 0.8;
        }
        
        .heart-icon {
          color: #ff006e; /* Fixed accent color */
          animation: heartbeat 1.5s infinite;
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .scroll-top {
          width: 50px;
          height: 50px;
          background-color: #3a86ff; /* Fixed primary color */
          color: white;
          border: none;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .scroll-top:hover {
          background-color: #8338ec; /* Fixed secondary color */
          transform: translateY(-5px);
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;