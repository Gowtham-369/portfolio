
import '../Styles/intro.css';
import React, { useEffect, useState }from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";


const Intro = () => {

    const languages = ["Hello", "Namaste","Bonjour", "Hola", "Hallo", "Ciao"]; // Add more languages as needed
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  
  
    useEffect(() => {
      // Create a timer to change the displayed language every 2 seconds (2000 milliseconds)
      const timer = setInterval(() => {
        setCurrentLanguageIndex((prevIndex) =>
          (prevIndex + 1) % languages.length
        );
      }, 2000);
  
      // Clean up the timer when the component unmounts
      return () => {
        clearInterval(timer);
      };
    }, []);
    
    return (
      <div className="intro">
        <video className="background-video" autoPlay loop muted>
                <source src="/IntroVideo.mp4" type="video/mp4" />
                {/* Add additional source elements for other video formats if needed */}
                Your browser does not support the video tag.
            </video>
   
     
        <div className="content-overlay">
        <div className="about">
          <h1 className="greetings">{languages[currentLanguageIndex]}</h1>
          <div className="name-container">
            <h3>I'm   </h3>
            <h2>
            { "Gowtham".split("").map((letter, index) => (
              <span key={index} style={{ '--letter-index': index }}>{letter}</span>
            ))}

            </h2>
          </div>

          <div className="icons">
          <a href="https://www.linkedin.com/in/gowthamreddyuppunuri/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
            <a href="https://github.com/Gowtham-369" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
            <a href="https://docs.google.com/document/d/1dt8RZxIzc6LRPPWhd0Runlj05Lh4c-1fYihpBSgO8w0/edit" target="_blank" rel="noopener noreferrer" download="Your_CV_Name.pdf">
              <FontAwesomeIcon icon={faFileDownload} className="icon" />
            </a>
          </div>
          <div>
          <Link to="about-container" className="learn-more-button" smooth={true} duration={1000}>Read More</Link>

          </div>
          
          {/* <div className="prompt">
            <p>
A software engineer,driven by a passion for continuous learning and innovation. Eager to expand my skills in cutting-edge technologies and contribute to impactful projects.</p>
            
          </div> */}
        </div>

        </div>
        
        <div className="skills">
          {/* Add content for the right section as needed */}
        </div>
      </div>
        
       

        
    );
  }
  
  export default Intro;
  