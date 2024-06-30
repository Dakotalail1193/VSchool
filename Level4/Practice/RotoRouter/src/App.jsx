import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'

export default function App() {
 

  return (
    <>
    <nav className='nav'>
        <Link to="/Home" className="nav">
        Home
        </Link>
        <Link to="/About" className="nav">
        About
        </Link>
        <Link to="/Services" className="nav">
        Services
        </Link>
      </nav>

      

      </>
  )
}

 




{/* <div className='main'>   
    
      

    <div>

      <div className='selection'>
        <Link to="/Horde" className="nav">
            <button className='horde-button'>
              <img src="/src/Assets/Horde_Crest.png" className='crest'/>
            </button>
            <p>Horde</p>  
        </Link>  
        <img src="/src/Assets/main-background.png"/>        
        <Link to="/Alliance" className="nav">
            <button className='alliance-button'>
              <img src="/src/Assets/Alliance_Crest.png" className='crest'/>                
            </button> 
            <p>Alliance</p> 
        </Link>
      </div>

    </div> 

  </div> */}