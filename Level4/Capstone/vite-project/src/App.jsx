import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Horde from './Factions/Horde'
import Orc from "./Character-Race/Orc";
import Undead from "./Character-Race/Undead";
import Troll from "./Character-Race/Troll";
import Tauren from "./Character-Race/Tauren";
import Human from "./Character-Race/Human";
import Gnome from "./Character-Race/Gnome";
import NightElf from "./Character-Race/Night Elf";
import Dwarf from "./Character-Race/Dwarf";
import Alliance from './Factions/Alliance'
import './App.css'

function App() {
  

  return (
    <>
    <Routes>        
        <Route path="/Horde" element ={<Horde/>}/>
        <Route path="/Alliance" element= {<Alliance/>}/>    
        <Route path="/Orc" element ={<Orc/>}/>
        <Route path="/Troll" element ={<Troll/>}/> 
        <Route path="/Tauren" element ={<Tauren/>}/> 
        <Route path="/Undead" element ={<Undead/>}/>
        <Route path="/Human" element ={<Human/>}/> 
        <Route path="/Night Elf" element ={<NightElf/>}/> 
        <Route path="/Gnome" element ={<Gnome/>}/> 
        <Route path="/Dwarf" element ={<Dwarf/>}/>      
    </Routes>

    <Link to="/Horde" className="nav">
        <button>Horde</button>  
    </Link>
    
    <Link to="/Alliance" className="nav">
        <button>Alliance</button>  
    </Link>
      
    </>
  )
}

export default App
