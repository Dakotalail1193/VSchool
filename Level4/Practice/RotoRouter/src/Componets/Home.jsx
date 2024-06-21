import React from "react";
import { useNavigate } from "react-router-dom";

function Home(){
 const navigate = useNavigate()

    return(
        <>
        <nav className="nav">
            <button onClick={() => navigate ("/About")}>About</button>
            <button onClick={() => navigate ("/Services")}>Services</button>
        </nav>

        <body className="home">
            <h1>This is the Home page for Roto Router</h1>
        </body>
        </>
    )
}

export default Home