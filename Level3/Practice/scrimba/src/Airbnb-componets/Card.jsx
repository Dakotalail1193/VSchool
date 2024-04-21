import React from 'react'

export default function Card (props){
    return (
        <div className='card'>
            <img src={props.img}className='card--img'/>
            <div className='card--stats'>
                <img src='../src/Airbnb-componets/img/star.png' className='card--star'/>
                <span>{props.rating} </span>
                <span className='gray'>({props.reviewCount})•</span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>From ${props.price}</b>/ person</p>
            

        </div>       

    )
}