import React from "react";

export default function Dicebox(){

   const [numbers, setNumbers] = React.useState([1, 2, 5, 6, 3])

function roll(){
    const rolling = Math.floor(Math.random() * 6 + 1);
    setNumbers( rolling)
    console.log(numbers)
}
    return(
        <div>
            <button className="dice-roll" onClick={roll}>Roll Dice</button>
            <h1 className="dice">{numbers}</h1>
        </div>
    )
}