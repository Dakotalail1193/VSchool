import React from "react"
import Squares from './componets/Squares'
import './DjApp.css'

export default function App(){

    const [colors, setColors] = React.useState(["white", "white", "white", "white"])
       

    function smallClick(){
        const newColors = colors.map(colors => (colors === "white" ? "black" : "white"));
        setColors(newColors);
    }

    const boxElements = Squares.map (box => (
        <div style={{colors}} key={box.id} className="box" />
    ))

    

    return (
        <div className="container">
           {boxElements}
            <button onClick={smallClick} >DJ Small</button>
            <button>Party Dj</button>
            <button>Left Blue</button>
            <button>Right Blue</button>
            <button>Big DJ one</button>
            <button>Big DJ two</button>
            <button>Big DJ three</button>
            <button>Big DJ four</button>
        </div>
    )
}