import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../Styles/contact.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  const [isVisible, setIsVisible] = useState([false, false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const contactPosition = document.getElementById("contact").offsetTop;
      if (position > contactPosition + 100) {
        setIsVisible([true, false, false, false]);
        setTimeout(() => setIsVisible([true, true, false, false]), 200);
        setTimeout(() => setIsVisible([true, true, true, false]), 400);
        setTimeout(() => setIsVisible([true, true, true, true]), 600);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="contact" className="contact-container">
      <div className="contact-header">
        <div className="rectangle"></div>
        <h1>Contact</h1>
      </div>
      <div className={`contact-box left ${isVisible[0] ? "visible" : ""}`}>
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <p>Email: gowthamreddyu@gmail.com</p>
      </div>
      <div className={`contact-box right ${isVisible[1] ? "visible" : ""}`}>
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <p>Phone: +1 513-353-8063</p>
        
      </div>
      <div className={`contact-box left ${isVisible[2] ? "visible" : ""}`}>
        <FontAwesomeIcon icon={faGithub} className="icon" />
        <p>GitHub: <a href="https://github.com/Gowtham-369">Gowtham-369</a></p>
        
      </div>
      <div className={`contact-box right ${isVisible[3] ? "visible" : ""}`}>
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
        <p>LinkedIn: <a href="https://www.linkedin.com/in/gowthamreddyuppunuri/">Gowtham Reddy Uppunuri</a></p>
      </div>
    </div>
  );
}

export default Contact;
