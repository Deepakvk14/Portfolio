import React from 'react';
import "./LeftSide.css";
import profile from "./frofile.jpg";
import Resume from "./images/Resume.pdf"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import GitHubIcon from '@material-ui/icons/GitHub'

function LeftSide() {
    return (
        <div className="left_box">
        <div className="profile">
         <img className="profile_image" alt="profile_image " src={profile}/>
            <h3>Deepak verma</h3>
            <h2 className="devloper">React Devloper</h2>
         <a   href={Resume} download className="download">
                Resume <CloudDownloadIcon/>
            </a>
            <div className="icons">
            <a href="https://www.linkedin.com/in/deepak-verma-49b287177"> <LinkedInIcon/> <i class="fab fa-github"></i>
            </a> 
            <a href="https://www.instagram.com/i_m_dkv/"> <InstagramIcon/> </a> 
             <a href="https://www.github.com/Deepakvk14"> <GitHubIcon/> </a> 
             <a href="https://www.facebook.com/deepak.krverma.9"> <FacebookIcon/></a>
             <a href="https://twitter.com/deepakk56882394?fbclid=IwAR1o4jkj9M3wZQqojGkXmGL6Py-oGWCQg5MdP2xQhAP5WjH7eJylzUat_RM"> <TwitterIcon/> </a>
            </div>
            <div className="contacts">
            <p>Phone No: 8319853914</p>
                <p>What's App No: 7706095448</p>
                <p>Address: SLR-PG, BTM Layout stage 1st,Bangalore</p>
                <p>Email: iamdkv19@gmail.com</p>
                
            </div>
            <div className="mail">
            Send Mail
            <a  href = "mailto:iamdkv19@gmail.com">
    
                
                 </a>
                 </div>
            </div>
           
        </div>
    )
}

export default LeftSide
