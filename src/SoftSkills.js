import React from 'react';
import "./SoftSkills.css";

function SoftSkills({value:{name,level}}) {
    const percentage = `${level}%`
     return (<div className="Softtt">
         
         <div className="softSkills">
             <div className="inner_div" style={{
                 'width':percentage
             }}> <p>{name}</p>  </div>
         </div>
         </div>
     )
 }
 

export default SoftSkills
