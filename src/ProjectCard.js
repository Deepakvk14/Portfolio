import React from 'react';
import "./ProjectCard.css"

function ProjectCard({image,name,url}) {
    
    return (
        <div className="project">
        <div className="project_card">
        <a href={url}>
            <img className="project_image" src={image} alt="images" />
            <p>{name}</p>
            </a>
        </div>
       
        </div>
    )
}

export default ProjectCard
