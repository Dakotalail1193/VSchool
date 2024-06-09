import React from "react";

export default function Selection({value, name, handleform}){
    return(
        <div className="gradient-input">
            <label for={name}>{name}</label>
            <label form={name}>{value}</label>
            <input 
            onChange={handleform}
            type="color"
            name={name}
            id={name}
            value={value}
            />
        </div>
    )
}