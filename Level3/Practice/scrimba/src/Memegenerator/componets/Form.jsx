import React from "react";
import memeData from "../memeData";

export default function Form(){
    function getMemeImage(){
        const memesArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
    }
    return (
        <main>
            <div className="form">
                <input
                 type="text"className="form-input"
                  placeholder="Top Text"
                  />
                <input
                 type="text"className="form-input"
                 placeholder="Bottom Text"
                  />
                <button
                className="form-button" 
                onClick={getMemeImage}
                >
                    Get a new meme image
                    </button>
            </div>
        </main>
    )
}