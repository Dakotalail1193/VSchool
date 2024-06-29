import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import axios from "axios"
import { useNavigate } from "react-router-dom";

function Horde(){

    const [raceList, setRaceList] = React.useState([])
    
    React.useEffect( () => {
        getData()
        
    }, [])

    console.log(raceList)  
    
   
    const displayedRace = raceList.map((race) =>{
     
        if(race.name === "Orc" || race.name === "Troll" || race.name === "Tauren" || race.name === "Undead"){
           return (
            <>
            <div>
                <h1>{race.name} </h1>
                <h2 onClick={()=> navigate(`/${race.name}`)}>Horde</h2>
            </div>
            </>
           )
        }
        
    })
       async function getData(){
        axios.get(`https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-classic-us&locale=en_US&access_token=USGFspIUR4Z8ZcSJZH9b5knodZTxsJ6URt`)
            .then(res => res.data)
            .then(data=> setRaceList(data.races) )            
        }   

    const navigate = useNavigate()

    
    return (
        <>
        <div className="horde-bio">
            <h1>Four Races Comprise the Horde. The brutal Orcs, the shadowy Undead, the spiritual Tauren, and the quick-witted Trolls.</h1>
            <h1>Beset by enemies on all sides, these outcasts have forged a union they hope will ensure their mutual survival</h1>
        </div>

        <button onClick={()=> navigate("/")}>Return to Main Page</button>
        {displayedRace}
        </>
    )
}

export default Horde