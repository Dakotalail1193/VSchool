import React from 'react'
import Jokes from './Jokes.jsx'
import jokesData from './jokesData.jsx'
import './JApp.css'

export default function App(){
    const jokeElements = jokesData.map(joke => {
        return <Jokes setup={joke.setup} punchline={joke.punchline}/>
    })
    return (
        <div>
           {jokeElements}
        </div>
    )
}
        
// ADD THIS TO MAIN.JSX
//../src/Jokes-componets/JApp.jsx