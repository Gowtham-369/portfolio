import React, { useState } from "react";
import { Link } from "react-scroll";
import "../Styles/navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="intro" smooth={true} duration={1000} className="navbar-title">
          Gowtham Reddy Uppunuri
        </Link>
      </div>
      <div className="navbar-right">
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link
            to="about-container"
            smooth={true}
            duration={100}
            className="navbar-button"
            onClick={handleMobileMenuToggle}
          >
            About
          </Link>
          <Link
            to="project-page"
            smooth={true}
            duration={100}
            className="navbar-button"
            onClick={handleMobileMenuToggle}
          >
            Projects
          </Link>
          <Link
            to="experience-container"
            smooth={true}
            duration={100}
            className="navbar-button"
            onClick={handleMobileMenuToggle}
          >
            Experience
          </Link>
          <Link
            to="contact-container"
            smooth={true}
            duration={100}
            className="navbar-button"
            onClick={handleMobileMenuToggle}
          >
            Contact
          </Link>
        </div>
        <div className="hamburger" onClick={handleMobileMenuToggle}>
          &#9776;
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
