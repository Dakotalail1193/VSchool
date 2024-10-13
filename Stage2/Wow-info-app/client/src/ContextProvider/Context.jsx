import React, {useState} from 'react'
import axios from "axios"
const Context = React.createContext()
import { useNavigate } from "react-router-dom";

function ContextProvider(props){

    const [hordeRaceList, setHordeRaceList] = useState([])
    const [allianceRaceList, setAllianceRaceList] = useState([])
    const navigate = useNavigate() 
    
    React.useEffect( () => {
        getHordeData()      
        getAllianceData()  
    }, [])   

    const hordeRace = hordeRaceList.map((data) =>{     
        if(data.race === "Orc" || data.race === "Troll" || data.race === "Tauren" || data.race === "Undead"){
           return (
            <>
            <div className='race-container'>
                <h1 className='race-name'>{data.race} </h1>
                <p onClick={()=> navigate(`/${data.race}`)} className='horde-race-link'>Learn More</p>
            </div>
            </>
           )
        }
        
    })

    // const allianceRace = allianceRaceList.map((race) =>{     
    //     if(race.name === "Human" || race.name === "Night Elf" || race.name === "Dwarf" || race.name === "Gnome"){
    //        return (
    //         <>
    //         <div className='race-container'>
    //             <h1 className='race-name'>{race.name} </h1>
    //             <h2 onClick={()=> navigate(`/${race.name}`)} className='alliance-race-link'>Learn More</h2>
    //         </div>
    //         </>
    //        )
    //     }
        
    // })
       function getHordeData(){
        axios.get(`/api/horde`)
            .then(res => res.data.race)
            .then(data=> setHordeRaceList(data) )            
        }  
        console.log(hordeRaceList)
        console.log(hordeRace)

       function getAllianceData(){
        axios.get('/alliance')
            .then(res => res.data)
            .then(data => setAllianceRaceList(data))
       }



        return(
            <>
            <Context.Provider value = {{
                 hordeRace,
                 
                 race,
                // allianceRace,
                navigate
            }}>                
                {props.children}
            </Context.Provider>
            </>
        )
}
export  {Context, ContextProvider }
