import React from 'react';
import "./TechSkills.css";

function TechSkills({value:{name,level}}) {
   const percentage = `${level}%`
    return (<>
        
        <div className="techSkills">
       
            <div className="inner_div" style={{
                'width':percentage
            }}> <p>{name}</p>  </div>
        </div>
        </>
    )
}

export default TechSkills
