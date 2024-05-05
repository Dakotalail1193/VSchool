import React from "react"; 
import Header from "./componets/Header";
import Meme from "./componets/Meme";
import './MemeApp.css'


export default function App(){
    return(
        <div>
            <Header />
            <Meme />
        </div>
    )
}