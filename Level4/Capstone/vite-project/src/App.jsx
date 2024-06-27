import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Horde from './Factions/Horde'
import Alliance from './Factions/Alliance'
import './App.css'

function App() {
  

  return (
    <>
    <Routes>        
        <Route path="/Horde" element ={<Horde/>}/>
        <Route path="/Alliance" element= {<Alliance/>}/>        
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
