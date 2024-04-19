import React from 'react'

export default function Card (){
    return (
        <div className='card'>
            <img src='../src/Airbnb-componets/img/kz.png' className='card--img'/>
            <div className='card--stats'>
                <img src='../src/Airbnb-componets/img/star.png' className='card--star'/>
                <span>5.0 </span>
                <span className='gray'>(6) •</span>
                <span className='gray'>USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><b>From $136</b>/ person</p>
            

        </div>       

    )
}