import React from "react";
import { useNavigate } from "react-router-dom";

function Tauren(){

    const navigate = useNavigate()

    return(
        <>
        <div className="tauren">
            <div className="vl"/>
            <div className="hl"/>
            <div className="bio">
                <h1>
                    Always the Tauren strive to preserve the balance of nature and heed the willd of their Goddess, the Earth Mother.
                    <br/><br/>
                    Recently attacked by murderours Centaur, the Tauren would have been wiped, save for achance encounter with the Orcs, who helped defeat the interlopers.
                    <br/><br/>
                    To honor this blood-debt, the Tauren joined the Horde, solidifying the two races' friendship.
                </h1>
            </div>
            <div className="class-list">
            <p>Playable Classes</p>
            
                <ul>
                    <li>Warrior</li>
                    <li>Hunter</li>
                    <li>Shaman</li>
                    <li>Druid</li>
                </ul>
            </div>
            <button onClick={() => navigate ("/")} className="horde-return">Return to Main Page</button>

        </div>

        
        </>
    )
}

export default Tauren