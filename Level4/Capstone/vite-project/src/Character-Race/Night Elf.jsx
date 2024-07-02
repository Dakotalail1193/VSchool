import React from "react";
import { useNavigate } from "react-router-dom";

function NightElf(){

    const navigate = useNavigate()

    return(
        <>
        <div className="nelf">
        <div className="vl"></div>
        <div className="hl"/>
            <div className="bio">
                <h1>
                    Ten thousand years ago, the Night Elves founded a fast empire, but their reckless use of primal magic brought them to ruin.
                    <br/>
                    In grief, they withdrew to the forest and remained isolated there until the return of their ancient enemy, the Burning Legion. 
                    <br/>
                    With no other choice, the Night Elves emerged at last from their seclusion to fight for their place in the new world.
                </h1>
            </div>
            <div className="class-list">
            <p>Playable Classes</p>
                <ul>
                    <li>Warrior</li>
                    <li>Hunter</li>
                    <li>Rogue</li>
                    <li>Priest</li>
                    <li>Druid</li>
                </ul>
            </div>
            <button onClick={() => navigate ("/")} className="alliance-return">Return to Main Page</button>
        </div>
        
        </>
    )
}

export default NightElf