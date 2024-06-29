import React from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Alliance(){
    const [raceList, setRaceList] = React.useState([])
    
    React.useEffect( () => {
        getData()
        
    }, [])

    console.log(raceList)  
    
   
    const displayedRace = raceList.map((race) =>{
     
        if(race.name === "Human" || race.name === "Night Elf" || race.name === "Dwarf" || race.name === "Gnome"){
           return (
            <>
            <div>
                <h1>{race.name} </h1>
                <h2 onClick={()=> navigate(`/${race.name}`)}>Alliance</h2>
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

    return(
        <>
        <div className="alliance-bio">
            <h1>The Alliance consists of four races. The noble Humans, the adventurous Dwarves, the enigmatic Night Elves, and the ingenious Gnomes.</h1>
            <h1>Bound by aloathing for all things demonic, they ight to restore order in this war-torn world.</h1>
        </div>

        <button onClick={()=> navigate("/")}>Return to Main Page</button>
        {displayedRace}
        
        </>
    )
}

export default Alliance