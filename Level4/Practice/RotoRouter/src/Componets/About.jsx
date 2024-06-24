import React from "react";
import { useNavigate } from "react-router-dom";

function About(){
    const navigate = useNavigate()
    return(
        <>
        <nav className="nav">
            <button onClick={() => navigate ("/Home")}>Home</button>
            <button onClick={() => navigate ("/Services")}>Services</button>
        </nav>

        <body className="about">
            <h1>This is the About page for Roto Router</h1>
            <p>Roto Router has been in business for over 20 years and the number one choice for plumbing needs!</p>
        </body>
        </>
    )
}

export default About