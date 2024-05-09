import React from "react"
import boxes from "./componets/boxes"
import "./BoxApp.css"

export default function App(props){
    const [box, setBox] = React.useState(boxes)
    const styles ={
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }
    const boxElements = box.map(box => (
        <div style={styles} className="box" key={box.id}></div>
    ))

    return (
        <main>
            {boxElements}
        </main>
    )
}