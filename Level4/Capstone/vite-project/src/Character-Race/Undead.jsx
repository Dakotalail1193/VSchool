import React from "react";
import { useNavigate } from "react-router-dom";

function Undead(){

    const navigate = useNavigate()

    return(
        <>
        <div className="undead">
        <div className="vl"/>
        <div className="hl"/>
            <div className="bio">
                <h1>
                    Free of the Lich King's grasp, the Forsaken seek to overthrow his rule. Led by Lady Sylvanas, they hunger for vengeance against the Scourge.
                    <br/><br/> 
                    Humans, too have bcome the enemy, relentless in their driveto purge all Undead from the land.
                    <br/><br/> 
                    The Forsaken care little, even for their allies; to them, the Horde is merely a tool that may further their dark schemes.

                </h1>
            </div>
            <div className="class-list">
            <p>Playable Classes</p>
                <ul>
                    <li>Warrior</li>
                    <li>Rogue</li>
                    <li>Priest</li>
                    <li>Mage</li>
                    <li> Warlock</li>
                </ul>
            </div>
            <button onClick={() => navigate ("/")} className="horde-return">Return to Main Page</button>

        </div>
        </>
    )
}

export default Undead