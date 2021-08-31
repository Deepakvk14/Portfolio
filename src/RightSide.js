import React from 'react';
import Navbar from "./Navbar";
import {Switch,Route } from "react-router-dom"; 
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import "./RightSide.css";



function RightSide() {
    return (<>
    <Navbar/>
        <div className="right_side">
       
       
            <Switch>
        <Route exact path="/"
           component={About}>
           </Route>
           <Route path="/Project"
           component={Project}>
           </Route>
           <Route path="/Skills"
           component={Skills}>
           </Route>
           </Switch>
            
       
        </div>
        </>
    )
}

export default RightSide
