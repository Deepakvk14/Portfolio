import React from 'react';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";


import './Portfolio.css';


function Portfolio() {
    return (
        <div className="App_header">
        <div className="left_header">
            <LeftSide/>
            </div>
            
            <div className="right_header">
            <RightSide/>
            
            
            </div>
        </div>
    )
}

export default Portfolio
