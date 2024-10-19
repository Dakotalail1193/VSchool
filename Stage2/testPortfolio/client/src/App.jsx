import React from 'react'
import Home from './Home'
import Projects from './Projects'
import { Routes, Route, Navigate} from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
    <div id="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Projects" element={<Projects/>}/>
      </Routes>
    </div>
      
    </>
  )
}

export default App
