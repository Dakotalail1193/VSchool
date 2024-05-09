import React from "react"
import Squares from './componets/Squares'
import './DjApp.css'

export default function App(props){
    const [box, setBox] = React.useState(["white", "white", "white", "white"])

    const styles = {
        backgroundColor:props.dark ? "black" : "white"
    }

    const boxElements = box.map (box => (
        <div style={styles} className="box" key={box.id}></div>
    ))

    return (
        <div className="container">
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