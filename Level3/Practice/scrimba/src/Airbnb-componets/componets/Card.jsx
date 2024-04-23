import React from 'react'

export default function Card (props){
    
    let badgeText
    if (props.card.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online"){
        badgeText = " ONLINE"
    } 
    return (
        <div className='card'>
            {badgeText && <div className='card--badge'>{badgeText}</div>}

            <img src={props.card.img}className='card--img'/>
            <div className='card--stats'>
                <img src='../src/Airbnb-componets/img/star.png' className='card--star'/>
                <span>{props.card.stats.rating} </span>
                <span className='gray'>({props.card.stats.reviewCount})•</span>
                <span className='gray'>{props.card.location}</span>
            </div>
            <p>{props.card.title}</p>
            <p><b>From ${props.card.price}</b>/ person</p>
            

        </div>       

    )
}