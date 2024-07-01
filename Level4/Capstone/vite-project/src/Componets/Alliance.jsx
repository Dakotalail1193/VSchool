import React, {useContext} from "react";
import {Context} from "../ContextProvider/Context"

function Alliance(){
   
    const {allianceRace, navigate} = useContext(Context)    

    return(
        <>
        <body className="alliance">
            <div className="alliance-content">
                <div className="alliance-bio">
                    <h1>The Alliance consists of four races. The noble Humans, the adventurous Dwarves, the enigmatic Night Elves, and the ingenious Gnomes.</h1>
                    <br/>
                    <h1>Bound by aloathing for all things demonic, they ight to restore order in this war-torn world.</h1>
                </div>
            <div className="alliance-races">
                {allianceRace}
            </div>
            <button onClick={()=> navigate("/")}className="alliance-return">Return to Main Page</button>
            

        </div>
        </body>
        </>
    )
}

export default Alliance