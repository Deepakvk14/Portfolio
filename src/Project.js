import React from 'react';
import ProjectCard from "./ProjectCard"
import "./Project.css";
import ProjectData from "./ProjectData";

function Project() {
   
    return (
        <div className="Project_card1">
        {
            ProjectData.map((e)=>{
                return (
            <ProjectCard
                image={e.image}
                name= {e.Name}
                url={e.url}
            />
                ) 
            }) 
        }
       
        
        </div>
    )
}

export default Project
