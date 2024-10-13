import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'


function Home() {
    return (
        <>
        <div className='selection'>
          <Link to="/Horde" className="nav">
              <button className='horde-button'>
                <img src="/src/Assets/Horde_Crest.png" className='crest'/>
              </button>
              <p className="horde-select">Horde</p>  
          </Link>
          <Link to="/">
            <button >
          <img className='main-button' src="/src/Assets/main-background.png"/>
          </button>
          </Link>        
          <Link to="/Alliance" className="nav">
              <button className='alliance-button'>
                <img src="/src/Assets/Alliance_Crest.png" className='crest'/>                
              </button> 
              <p className="alliance-select">Alliance</p> 
          </Link>
        </div>
        <div className="intro">
            <h1>Welcome to my World of Warcraft information App! Select Horde or Alliance to learn more!</h1>
        </div>

        <footer className="main-footer">
            <p>Created by Dakota Lail for a VSchool Project using Blizzard Developer API</p>
        </footer>
        </>

    
    )
}

export default Home