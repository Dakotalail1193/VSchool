import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import Home from './Componets/Home.jsx'
import About from './Componets/About.jsx'
import Services from './Componets/Services.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>      
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Services" element={<Services />}/>
      </Routes>   
	</BrowserRouter>
);
