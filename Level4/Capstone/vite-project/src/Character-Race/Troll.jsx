import React from "react";
import { useNavigate } from "react-router-dom";

function Troll(){

    const navigate = useNavigate()

    return(
        <>
        <div className="troll">
        <div className="vl"/>
        <div className="hl"/>
            <div className="bio">
                <h1>
                    Once at home in the jungles of Strangletorn Vale, the firece trolls of the Darkspear tribe were pushed out by warring factions.
                    <br/>                  
                    Eventually the trolls befriended the Orcish Horde, and Thrall, the young Orc Warchief, convinced the Trolls to travel with him to Kalimdor.
                    <br/>
                    Though they cling to thier shadowy heritage, the Darkspear Trolls hold a place of honor in the Horde.
                </h1>
            </div>
            <div className="class-list">
                <p>Playable Classes</p>
                <ul>
                    <li>Warrior</li>
                    <li>Hunter</li>
                    <li>Rogue</li>
                    <li>Priest</li>
                    <li>Shaman</li>
                    <li>Mage</li>
                </ul>
            </div>
            <button onClick={() => navigate ("/")} className="horde-return">Return to Main Page</button>

        </div>
        
        </>
    )
}

export default Troll