import React, {useState} from 'react'
import axios from "axios"
const Context = React.createContext()
import { useNavigate } from "react-router-dom";

function ContextProvider(props){

    const [raceList, setRaceList] = useState([])
    const navigate = useNavigate() 
    
    React.useEffect( () => {
        getData()        
    }, [])

    console.log(raceList)  

    const hordeRace = raceList.map((race) =>{
     
        if(race.name === "Orc" || race.name === "Troll" || race.name === "Tauren" || race.name === "Undead"){
           return (
            <>
            <div className='race-container'>
                <h1 className='race-name'>{race.name} </h1>
                <p onClick={()=> navigate(`/${race.name}`)} className='horde-race-link'>Learn More</p>
            </div>
            </>
           )
        }
        
    })

    const allianceRace = raceList.map((race) =>{
     
        if(race.name === "Human" || race.name === "Night Elf" || race.name === "Dwarf" || race.name === "Gnome"){
           return (
            <>
            <div className='race-container'>
                <h1 className='race-name'>{race.name} </h1>
                <h2 onClick={()=> navigate(`/${race.name}`)} className='alliance-race-link'>Learn More</h2>
            </div>
            </>
           )
        }
        
    })
    
   
    
       async function getData(){
        axios.get(`https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-classic-us&locale=en_US&access_token=USz1wiiJQJ2unddtIgiDRxQ6AksmpqFQe3`)
            .then(res => res.data)
            .then(data=> setRaceList(data.races) )            
        }  



        return(
            <>
            <Context.Provider value = {{
                hordeRace,
                allianceRace,
                navigate
            }}>                
                {props.children}
            </Context.Provider>
            </>
        )
}
export  {Context, ContextProvider }
