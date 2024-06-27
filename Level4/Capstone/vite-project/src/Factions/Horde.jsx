import React from "react";
import Orc from "../Character-Race/Orc";
import Undead from "../Character-Race/Undead";
import Troll from "../Character-Race/Troll";
import Tauren from "../Character-Race/Tauren";
import { useNavigate } from "react-router-dom";

function Horde(){

    const navigate = useNavigate()

    
    return (
        <>

        <button onClick={()=> navigate("/")}>Return to Main Page</button>
        </>
    )
}

export default Horde