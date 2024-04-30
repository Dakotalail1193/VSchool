import React from "react";
import Card from "./componets/Card"
import VacationData from "./VacationData"
import "./VacationApp.css"

export default function App (){
    const vacationSpots = VacationData.map(card => {
        return (
            <Card 
                key={card.id}
                card={card}
            />
        )
    })
    return (
        <div>
            <section className="cards-list">
            {vacationSpots}
            </section>
            

        </div>
    )
}