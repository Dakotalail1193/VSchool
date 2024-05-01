import React from "react";


export default function Pets(props){

    return (
        <div className="pets">
            <p><b>Pet Name:</b> {props.name}</p>
            <p><b>Breed:</b> {props.breed}</p>
        </div>
    )
}