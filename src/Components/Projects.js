import React, { useState, useEffect } from 'react';
import ProjectBox from '../Helpers/ProjectBox';
import ProjectDetail from '../Helpers/ProjectDetail';
import '../Styles/projects.css';

const projects = [
  { id: 1, name: "NetflixGPT – AI-Powered Movie Discovery Platform", skills: ["React", "Tailwind","Firebase","OpenAI", "REST API"], description: "Description for Project 1",
  points: [
    `Successfully deployed a Netflix-inspired web application utilizing React, Tailwind CSS, and Firebase, resulting in
    secure user authentication and enhanced account security, aligning with best practices for web security`,
    `Integrated TMDB API and OpenAI API, delivering multilingual search functionality and personalized movie
recommendations, which increased user engagement by 15%`,
    `Optimized application performance through efficient state management using Redux, custom hooks, and
memorization, reducing page load times by 20% and improving user experience (UX) and data flow`
  ],
  images: [
    "Proj1-1.png",
    "Proj1-2.png" // Replace with actual image URLs
    // "image2.jpg",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/Gowtham-369/netflix-gpt" },
    //{ label: "Demo", url: "https://example.com/demo" },
  ]},

  { id: 2, name: "Pomodoro Productivity Timer Chrome Extension", skills: ["HTML","CSS","JavaScript", "Chrome Extension"], description: "Description for Project 2" ,
  points: [
    `Designed and developed a Pomodoro Timer Chrome extension using HTML, CSS, and JavaScript`,
    `Applied Chrome extension APIs and best practices for extension development to create interactive elements such
as a progress ring, volume controls, and theme switching for enhanced user experience`,
    `Managed the project independently of initial design through final deployment, including thorough user testing`
  ],
  images: [
    "Proj2-1.png", 
    "Proj2-2.png"// Replace with actual image URLs
    // "image2.jpg",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/Gowtham-369/pomodoro-timer-chrome-extension" },
    //{ label: "Demo", url: "https://example.com/demo" },
  ]},
  { id: 3, name: "Login Authentication Web App with Docker and AWS", skills: ["AWS","Streamlit", "Docker"], description: "Description for Project 2" , points: [
    `Engineered a robust full stack authenticated login application using Streamlit library in Python, ensuring seamless
user experience while prioritizing data security`,
    `Leveraged AWS services such as ECS, ECR, Fargate and Relational Database Service (RDS) for scalable
deployment, secured storage and efficient data management`,
    `Utilized Docker for effective containerization and streamlined code pipeline using Git for image management.
Employed an Application Load Balancer for optimal load distribution in the cloud`
    
  ],
  images: [
    "Proj3-1.png",
    "Proj3-2.png", 
    "Proj3-3.png",
    "Proj3-4.png",
    "Proj3-5.png"// Replace with actual image URLs
    // "image2.jpg",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/Gowtham-369/Streamlit-app-Docker-Image" },
    //{ label: "Demo", url: "https://example.com/demo" },
  ]},
  { id: 4, name: "Indian Currency Notes Detection", skills: ["Python", "YOLO-v5", "Object Detection", "HTML", "CSS", "JS", "jQuery", "REST API", "Flask"], description: "Description for Project 2", 
    points: [
      `Developed a web application for real-time detection of Indian currency notes, enabling users to upload an image
      and receive audio output along with the detected image, assisting visually impaired users in avoiding fraud`,
      `Enhanced user experiences using HTML, CSS, jQuery and implemented seamless communication with the backend
      Flask server via Ajax REST API calls`,
      `Trained YOLO-v5 algorithm on a custom dataset of 5,600 images, achieving 91% accuracy in detecting 7 distinct
      Indian currency denominations`
  ],
  images: [
    "Proj4-1.png", 
    "Proj4-2.png",
    "Proj4-3.png",
    "Proj4-4.png"// Replace with actual image URLs
    // "image2.jpg",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/Gowtham-369/IndianCurrencyNotesDetection" },
    
  ] },
  { id: 5, name: "Air Styles Pen", skills: ["Python","OpenCV", "Wireless Drawing", ], description: "Description for Project 2" , points: [
    `Created a Desktop application enabling wireless and touchless freehand drawing`,

    `Developed a beginner-friendly user interface using OpenCV Library in python`,

    `Integrated a file in Jupyter Notebooks to read and detect over three pen color values with 90% precision during writing activities`,
    
    `Implemented over five features, storing saved files locally in the same directory for easy access and processing`,
    
    `Established a simple user interface using OpenCV to facilitate user interactions and improve the workflow`,
    
  ],
  images: [
    "Proj5-1.png", // Replace with actual image URLs
    // "image2.jpg",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/Gowtham-369/Air_Stylus_Pen" },
    
  ]}
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTop) {
        
        document.querySelectorAll('.project-box').forEach((box,index) => {
          box.style.animationName = 'slideIn';
          box.style.animationDelay = `${index * 150}ms`; 
        });
      } else {
        
        document.querySelectorAll('.project-box').forEach((box,index) => {
          box.style.animationName = 'slideOut';
          box.style.animationDelay = `${index * 150}ms`; 
        });
      }

      setLastScrollTop(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
  };
  const handleCloseProjectDetail = () => {
    setSelectedProject(null);
  };
  const handleHoverProject = (project) => {
    setSelectedProject(project);
  };
  const handleCloseDetail = () => {
    setSelectedProject(null);
  };



  return (
    <div className="project-page">
      <div className="project-header">
        <div className="rectangle"></div>
        <h1>Projects</h1>
      </div>
      <div className="project-content">
        <div className="project-list">
          {projects.map(project => (
            <ProjectBox 
              key={project.id} 
              project={project} 
              

              onSelect={() => handleSelectProject(project)}
              onHover={() => handleHoverProject(project)}
            />
          ))}
        </div>
       <div className="project-detail" >
       {selectedProject && (
          <ProjectDetail project={selectedProject} onClose={handleCloseProjectDetail} />
        )}
        </div> 
      </div>
    </div>
  );
};

export default Projects;
