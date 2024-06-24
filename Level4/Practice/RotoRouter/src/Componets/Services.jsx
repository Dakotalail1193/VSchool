import React from "react";
import { useNavigate } from "react-router-dom";

function Services(){
    const navigate = useNavigate()
    return(
        <>
        <nav className="nav">     
            <button onClick={() => navigate ("/Home")}>Home</button>
            <button onClick={() => navigate ("/About")}>About</button>
        </nav>

        <body className="services">
            <h1>This is the Services page for Roto Router</h1>
            <h2>Services include the following</h2>
            <ul>
                <li>Cleaning</li>
                <li>Installation</li>
                <li>Remodel</li>
            </ul>
        </body>
        </>
    )
}

export default Services