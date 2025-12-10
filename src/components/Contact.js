import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      "service_yzn1aai",
      "template_46gfor5",
      {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      "JniaYll44itfit0DZ"
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((error) => {
      console.error("Email send failed:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Try again.");
    });
  };

  const contactInfo = [
    { title: "Email", value: "contehaliya8@gmail.com", link: "mailto:contehaliya8@gmail.com" },
    { title: "Phone", value: "+23277474645", link: "tel:+23277474645" },
    { title: "Location", value: "Makeni Freetown, Sierra Leone", link: null },
    { title: "Freelance", value: "Available", link: null }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm currently open to new opportunities, whether it's a full-time position, 
              contract work, or a freelance project. Feel free to reach out if you want 
              to collaborate!
            </p>

            <div className="contact-details">
              {contactInfo.map(info => (
                <div key={info.title} className="contact-detail">
                  <h4>{info.title}</h4>
                  {info.link ? <a href={info.link}>{info.value}</a> : <p>{info.value}</p>}
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="success-message">
                <FaCheckCircle className="success-icon" />
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for your message. I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : (
                    <>
                      Send Message <FaPaperPlane className="btn-icon" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .contact {
          padding: 60px 20px;
          background-color: #f8f9fa;
          transition: background-color 0.3s ease;
        }
        
        /* Dark mode styles */
        .dark-mode .contact {
          background-color: #1a1a1a;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 50px;
          color: #333;
        }
        
        .dark-mode .section-title {
          color: #f8f9fa;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #222;
        }
        
        .dark-mode .contact-info h3 {
          color: #f8f9fa;
        }

        .contact-info p {
          font-size: 1rem;
          margin-bottom: 30px;
          line-height: 1.6;
          color: #555;
        }
        
        .dark-mode .contact-info p {
          color: #ccc;
        }

        .contact-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .contact-detail h4 {
          font-size: 1rem;
          margin-bottom: 5px;
          color: #3a86ff;
        }
        
        .dark-mode .contact-detail h4 {
          color: #3a86ff;
        }

        .contact-detail a, .contact-detail p {
          color: #555;
          text-decoration: none;
          font-size: 0.95rem;
        }
        
        .dark-mode .contact-detail a,
        .dark-mode .contact-detail p {
          color: #ccc;
        }

        .contact-detail a:hover {
          color: #0056b3;
        }
        
        .dark-mode .contact-detail a:hover {
          color: #3a86ff;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background-color: white;
          color: #333;
        }
        
        .dark-mode .form-group input,
        .dark-mode .form-group textarea {
          background-color: #2d2d2d;
          border-color: #444;
          color: #f8f9fa;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #3a86ff;
          outline: none;
          box-shadow: 0 0 5px rgba(58, 134, 255, 0.2);
        }
        
        .dark-mode .form-group input:focus,
        .dark-mode .form-group textarea:focus {
          border-color: #3a86ff;
          box-shadow: 0 0 5px rgba(58, 134, 255, 0.4);
        }

        .submit-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 25px;
          background-color: #3a86ff;
          color: #fff;
          font-size: 1rem;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #2a76ef;
        }
        
        .submit-btn:disabled {
          background-color: #aaa;
          cursor: not-allowed;
        }

        .success-message {
          text-align: center;
          padding: 30px 20px;
          background-color: #d4edda;
          border: 1px solid #c3e6cb;
          border-radius: 8px;
          color: #155724;
        }
        
        .dark-mode .success-message {
          background-color: #1e3a28;
          border-color: #2d4a36;
          color: #a3d9b1;
        }

        .success-icon {
          font-size: 3rem;
          margin-bottom: 15px;
        }
        
        .dark-mode .success-icon {
          color: #38b000;
        }

        @media (max-width: 992px) {
          .contact-content {
            grid-template-columns: 1fr;
          }

          .contact-details {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;