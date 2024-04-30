import React from "react";

export default function Card (props){

    let badgeText
    if (props.card.price <= 500){
        badgeText = "$"
    } else if(1000 >= props.card.price){
        badgeText = "$$"
    } else if(1001 <= props.card.price){
        badgeText = "$$$"
    }

    
    return (
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <div>
                <h1>{props.card.place}</h1> 
                <h2> ${props.card.price} </h2>
                <h3>{props.card.timeToGo} </h3>
           </div> 
        </div>
    )
}