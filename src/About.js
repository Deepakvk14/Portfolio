import React from 'react';
import "./About.css"


function About() {
    return (<>
        <div className="about">
        <h4>About Myself :- </h4>
        <p className="para">My name is Deepak kumar verma and I completed my BE to 
        <span> Lakshmi Narain College of Technology (Bhopal).</span> I want to be a Front End Developer having a good understanding of design and layouts. I try to keep myself updated with the latest
         trends in the web world. I code meaningful markups and web applications.</p>
        
        <hr/>
        <h4>Projects:-</h4>
        <p className="para1">
        <ol>
            <li>Instagram-clone</li>
            <ul>
                <li>Created a full fledged Instagrom website using React Js for front-end,firebase cloud for backend</li>
                <li>Created components to perform varius functionality and state management was done via react context API.</li>
                <li>Use React-Router so that the page doesn't refresh as user navigates</li>
            </ul>
            <li>Covid-19-Tracker</li>
            <ul>
                <li>Created a full fledged Covid-19-Tracker website using React Js for front-end.</li>
                <li>Created components to perform varius functionality and state management was done via react context API.</li>
                <li>Use material UI so that the page looks good</li>
            </ul>
            <li>My PortFolio</li>
            <ul>
                <li>My PortFolio website are created using React Js for front-end,</li>
                <li>Created components to perform varius functionality and state management was done via react context API.</li>
                <li>Use React-Router so that the page doesn't refresh as user navigates</li>
                <li>You can see my projects here, my Github, My Resume</li>
            </ul>
            <li>Amazon-clone</li>
            <ul>
                <li>Created a full fledged Amazon Clone website using React Js for front-end,firebase cloud for backend</li>
                <li>Created components to perform varius functionality and state management was done via react context API.</li>
                <li>You can Loged In, Sign Up </li>
                <li>Use React-Router so that the page doesn't refresh as user navigates</li>
               <li> Items Add in your cart and Buy them </li>
            </ul>

        </ol>
        </p>
        <hr/>
        <h4>Certifications:-</h4>
        <p className="para1">
        <ul>
           <li>Front-End Development || full Stack Web Development By Coding Ninja.</li>            
           <li>Web Portal Design Application UI Design by (CRISP)</li> 
            </ul>
        </p>
        <hr/>
        <h4> Hobbies :- </h4>
        <p className="para1">
         <ul>
            <li>Playing Cricket</li>
            <li>watching Cricket</li>
            <li>Cooking</li>
        </ul>

        </p>

        </div>
        </>
    )
}

export default About
