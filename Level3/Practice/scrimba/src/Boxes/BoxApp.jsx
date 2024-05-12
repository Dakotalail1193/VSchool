import React from "react"
import boxes from "./componets/boxes"
import Box from "./componets/Box"
import "./BoxApp.css"

export default function App(){
    const [box, setBox] = React.useState(boxes)

    function toggle(id){
     setBox(prevBox => {
        return prevBox.map((box) => {
           return box.id === id ? {...box, on: !box} : box
        })

        })
    }
    
    const boxElements = box.map(box => (
        <Box
         key={box.id}
         id={box.id}
         on={box.on}
         toggle={toggle} 
          />
    ))

    return (
        <main>
            {boxElements}
        </main>
    )
}