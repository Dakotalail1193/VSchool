import React from "react";
import friends from "../friendsData";

export default function Pets(props){

    return (
        <div className="pets">
            <h3>Pet Name: {props.name}</h3>
            <h3>Breed: {props.breed}</h3>
        </div>
    )
}