import React from "react"

export default function MemeList(props) {

        const{handleDelete} = props
        const{handleEdit} = props

console.log(props)
    return (
        <div>
        <div className ="list-container">
            <img src = {props.randomImage} className="list-item-img"/>
            <h2 className="list-top">{props.topText}</h2>
            <h2 className="list-bot">{props.bottomText}</h2>
        </div>
        <button onClick={() => handleDelete(props._id)}>Delete</button>
        <button onClick={() => handleEdit(props._id)}>Edit</button>
        </div>

    )
}