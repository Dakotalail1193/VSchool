import React from "react";
import { useNavigate } from "react-router-dom";

function Orc(){

    const navigate = useNavigate()

    return(
        <>
        <div className="orc">
            <div className="vl"/>
            <div className="hl"/>
            <div className="bio">
                <h1>
                    The Orc race originated on the planet Draenor. A peaceful people wit shamanic beliefs, they were enslaved bythe Burning Legion and forced into war with the humans of Azeroth.
                    <br/><br/>
                    Althought it took them many years, the Orcs finally escaped the Demons' corruption and won thier freedom.
                    <br/>
                    To this day they fight for honor in a alien world that hates and reviles them. 
                </h1>
            </div>
            <div className="class-list">
            <p>Playable Classes</p>
                <ul>
                    <li>Warrior</li>
                    <li>Hunter</li>
                    <li>Rogue</li>
                    <li>Shaman</li>
                    <li>Warlock</li>
                </ul>
            </div>
            <button onClick={() => navigate ("/")} className="horde-return">Return to Main Page</button>

        </div>
        </>
    )
}

export default Orc