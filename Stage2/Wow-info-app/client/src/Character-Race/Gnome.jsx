import React from "react";
import { useNavigate } from "react-router-dom";

function Gnome(){

    const navigate = useNavigate()

    return(
        <>
        <div className="gnome">
        <div className="vl"></div>
        <div className="hl"/>
            <div className="bio">
                <h1>
                    Though small in stature, the gnomes of Khaz Modan have used their great intellect to secure a place in history.
                    <br/><br/>
                    Indeed, their subterranean kingdom, Gnomeragn was once a marvel of steam-driven technology. Even so, due to a massive Trogg invasion, the city was lost.
                    <br/><br/>
                    Now its builders are vagabonds in the Dwarven lnds, aiding their allies as best they can.
                </h1>
            </div>
            <div className="class-list">
            <p>Playable Classes</p>
                <ul>
                    <li>Warrior</li>
                    <li>Rogue</li>
                    <li>Mage</li>
                    <li>Warlock</li>
                </ul>
            </div>
            <button onClick={() => navigate ("/")} className="alliance-return">Return to Main Page</button>
        </div>
        
        </>
    )
}

export default Gnome