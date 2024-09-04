import React from 'react';

const ProjectDetail = ({ project, onClose }) => {
    return (
      <div className="detail-box">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        {/* Add other details such as images, paragraphs, etc. */}
        <h3>Points:</h3>
        <ul>
          {project.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <h3>Images:</h3>
        <div className="image-container">
          {project.images.map((image, index) => (
            <img key={index} src={require(`../assets/${image}`)} alt={`Image ${index + 1}`} style={{ width: '150px', height: '150px', margin: '10px' }} />
          ))}
        </div>
        <h3>Links:</h3>
        <ul>
          {project.links.map((link, index) => (
            <li key={index}><a href={link.url}>{link.label}</a></li>
          ))}
        </ul>
      </div>
    );
  };

export default ProjectDetail;
