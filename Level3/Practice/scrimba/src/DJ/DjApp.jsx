import React from "react"
import Squares from './componets/Squares'
import Box from './componets/Box'
import './DjApp.css'

export default function App(){

    const [boxes, setBoxes] = React.useState(["white", "white", "white", "white"])

    const boxElements = boxes.map (box => (
        <Box key={box.id} dark={box.dark} />
    ))

    return (
        <div>
           {boxElements}
            <button>DJ Small</button>
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