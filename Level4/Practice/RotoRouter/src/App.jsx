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

 
