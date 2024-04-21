import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import './AbnbApp.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
      img='../src/Airbnb-componets/img/kz.png'
      rating="5.0"
      reviewCount={6}
      country='USA'
      title="Life lessons with Katie Zaferes"
      price={136}
      />
    </div> 
  )
}


// ADD THIS TO MAIN.JSX
//import App from './Airbnb-componets/AbnbApp.jsx'