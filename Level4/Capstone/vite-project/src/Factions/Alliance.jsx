import React from "react";
import Human from "../Character-Race/Human";
import Gnome from "../Character-Race/Gnome";
import NightElf from "../Character-Race/Night-Elf";
import Dwarf from "../Character-Race/Dwarf";
import { useNavigate } from "react-router-dom";

function Alliance(){

    const navigate = useNavigate()

    return(
        <>
        
        <button onClick={()=> navigate("/")}>Return to Main Page</button>
        </>
    )
}

export default Alliance