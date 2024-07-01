import React, { useContext } from "react";
import {Context} from "../ContextProvider/Context"

function Horde(){

    const {hordeRace, navigate} = useContext(Context)
    
    return (
        <>
        <body className="horde">
            <div className="horde-content">
                <div className="horde-bio">
                    <h1>Four Races Comprise the Horde. The brutal Orcs, the shadowy Undead, the spiritual Tauren, and the quick-witted Trolls.</h1>
                    <br/>
                    <h1>Beset by enemies on all sides, these outcasts have forged a union they hope will ensure their mutual survival</h1>
                </div>
                <div className="horde-races">                    
                    {hordeRace}
                </div>
                <button onClick={()=> navigate("/")} className="horde-return">Return to Main Page</button>
                
            </div>
        
        </body>
        </>
    )
}

export default Horde