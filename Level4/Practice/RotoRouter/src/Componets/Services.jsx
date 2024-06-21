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
        </body>
        </>
    )
}

export default Services