import React from "react";
import { useNavigate } from "react-router-dom";

function Dwarf(){

    const navigate= useNavigate()

    return(
        <>
        <div className="dwarf">
            <div className="vl"></div>
            <div className="hl"/>
            <div className="bio">
                <h1>
                    In ages past the dwarves cared only for riches taken from the earth's depths. Then records surfaced of a god-like race said to have given the dwarves life...and an enchanted birthright. 
                   <br/><br/>
                    Driven to learn more, the Dwarves devoted themselves to the pursuitof lost artifacts and ancient knowledge. 
                    Today Dwarven archaeologists are scatterd throughout the globe.
                </h1>
            </div>
            <div className="class-list">
                <p>Playable Classes</p>
                <ul>
                    <li>Warrior</li>
                    <li>Paladin</li>
                    <li>Hunter</li>
                    <li>Rogue</li>
                    <li>Priest</li>
                </ul>
            </div>
            <button onClick={()=> navigate("/")}className="alliance-return">Return to Main Page</button>
        </div>
        
        </>
    )
}

export default Dwarf