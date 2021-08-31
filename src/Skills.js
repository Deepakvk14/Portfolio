import React from 'react';
import "./Skills.css";
import TechSkills from "./TechSkills";
import SoftSkills from "./SoftSkills"


function Skills() {
    const data=[{
        name:"Html5",
        level:"90"
 },
 {
    name:"Css3",
    level:"90"
},
{
    name:"JavaScript",
    level:"80"
},
{
    name:"React.js",
    level:"82"
},
{
    name:"Firebase",
    level:"70"
},

{
    name:"Material UI",
    level:"70"
},
{
    name:"Git",
    level:"65"
},
{
    name:"Github",
    level:"75"
},
{
    name:"MongoDB",
    level:"65"
},
{
    name:"Node",
    level:"45"
},
]
const data1 = [
    {
        name:"Communication",
        level:"80"
    },
    {
        name:"Teamwork",
        level:"85"
    },
    {
        name:"Adaptability",
        level:"90"
    },
    {
        name:"Problem-Solving",
        level:"80"
    },
    {
        name:"Time Management",
        level:"75"
    }
]
    return (
        <div className="skills">
         
            <div className="tech_skills">
            <h2> Technical Skills</h2>
            {
                data.map((e)=>{
                    return (
                    <TechSkills
                   value={e}
                    />
                    )
                })
            }
                
            </div>
            <div className="soft_skills">
            <h2> Soft Skills</h2>
            {
                data1.map((e)=>{
                    return (
                        <SoftSkills
                        value={e}
                />
                    )
                })
            }
            
            </div>
        </div>
    )
}

export default Skills
