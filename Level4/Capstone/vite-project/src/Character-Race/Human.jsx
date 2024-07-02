import React from "react";
import { useNavigate } from "react-router-dom";

function Human(){

    const navigate= useNavigate()

    return(
        <>
        <div className="human">
        <div className="vl"></div>
        <div className="hl"/>
            <div className="bio">
                <h1>
                    Humans are a young race, and thus highly versatile, mastering the arts of combat, craftsmanship, and magic with stunning efficiency. 
                    <br/>
                    The humans' valor and optimism have led them to build some of the world's greatest kingdoms. 
                    <br/>
                    In this troubled era, after generations of conflict, humanity seeks to rekindle its former glory and forge a shining new future.
                </h1>
            </div>
            <div className="class-list">
            <p>Playable Classes</p>
                <ul>
                    <li>Warrior</li>
                    <li>Paladin</li>
                    <li>Rogue</li>
                    <li>Priest</li>
                    <li>Mage</li>
                    <li>Warlock</li>
                </ul>
            </div>  
            <button onClick={()=> navigate("/")}className="alliance-return">Return to Main Page</button>  
        </div>
        </>
    )
}

export default Human