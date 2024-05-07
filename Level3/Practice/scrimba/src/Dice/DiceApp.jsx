import React from "react"
import Dicebox from "./Componets/Dicebox"
import "./DiceApp.css"

export default function App(){
    const [numbers, setNumbers] = React.useState([1, 2, 5, 6, 3])

    function roll(){
        const rolling = Math.floor(Math.random() * 6 + 1);
        setNumbers(rolling
        )
        console.log(numbers)
    }
    return (
        <div>
            
            <Dicebox  />
           
        </div>
    )
}