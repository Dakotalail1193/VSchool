import React from "react";

import './ColorApp.css'
import axios from "axios"

export default function App(){
    const [color, setColor] = React.useState("")
    const [count, setCount] = React.useState(0)
    

    React.useEffect( () =>{
        
    axios.get("https://random-color.onrender.com/colors/random")
        .then(response => setColor(response.data.name))
        .catch(error => console.log(error))
        

        
    
     }, [count])

    const style = {backgroundColor: color}


    return (
        <div className="color" style= {style}>
        <button onClick={() => setCount(prevCount => prevCount +1)}>Click Me</button>
        </div>
    )
}