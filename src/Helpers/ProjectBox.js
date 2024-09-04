import React, { useState } from 'react';

const ProjectBox = ({ project, onSelect,onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="project-box" onMouseEnter={onHover}  onClick={onSelect}>
      <h3>{project.name}</h3>
      <div className="project-skills-container">
        {project.skills.map(skill => (
          <span className="project-skill" key={skill}>{skill}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectBox;
