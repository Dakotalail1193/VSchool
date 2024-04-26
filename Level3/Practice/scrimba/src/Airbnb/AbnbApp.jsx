import React from 'react'
import Navbar from './componets/Navbar'
import Hero from './componets/Hero'
import Card from './componets/Card'
import AbnbData from './AbnbData'
import './AbnbApp.css'

export default function App() {
  const cards = AbnbData.map(card => {    
    return (
     <Card 
            key={card.id}
            card={card}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
    </div> 
  )
}


// ADD THIS TO MAIN.JSX
//import App from './Airbnb/AbnbApp.jsx'