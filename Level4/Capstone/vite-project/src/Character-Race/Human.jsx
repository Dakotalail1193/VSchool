import React from "react";

function Human(){

    return(
        <>
        <div className="human">
            <div className="bio">
                <h1>
                    Humans are a young race, and thus highly versatile, mastering the arts of combat, craftsmanship, and magic with stunning efficiency. 
                    The humans' valor and optimism have led them to build some of the world's greatest kingdoms. 
                    In this troubled era, after generations of conflict, humanity seeks to rekindle its former glory and forge a shining new future.
                </h1>
            </div>
            <div className="class-list">
                <ul>
                    <li>Warrior</li>
                    <li>Paladin</li>
                    <li>Rogue</li>
                    <li>Priest</li>
                    <li>Mage</li>
                    <li>Warlock</li>
                </ul>
            </div>    
        </div>
        </>
    )
}

export default Human