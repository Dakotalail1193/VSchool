import React from "react";

export default function Badge(props){
    
    return (
        <div className="badge-container">
            <header className="badge-header">Badge:</header>
            <div className="badge-item" >Name: {props.firstName} {props.lastName}</div>
            <div className="badge-item" >Email: {props.email}</div>
            <div className="badge-item" >Phone: {props.phone}</div>
            <div className="badge-item" >Place of Birth: {props.placeOfBirth}</div>
            <div className="badge-item" >Favorite Food: {props.favoriteFood}</div>
            <div className="badge-comment">Additional Comments: {props.commentSection} </div>
        </div>
    )
}