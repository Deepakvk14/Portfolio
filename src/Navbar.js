import React from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return (<>
        <div className="navbar">
           <Link to="/"> About </Link>
           <Link to="/Project">Project</Link>
           <Link to="/Skills">Skills</Link>
        </div>
           
        </>
    )
}

export default Navbar
