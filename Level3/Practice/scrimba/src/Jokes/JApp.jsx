import React from 'react'
import Jokes from './Jokes-Componets/Jokes.jsx'
import jokesData from './jokesData.jsx'
import './JApp.css'

export default function App(){
    const jokeElements = jokesData.map(joke => {
        return(
            <Jokes
                key={joke.id}
                setup={joke.setup}
                punchline={joke.punchline}
                />
            )
    })
    return (
        <div>
           {jokeElements}
        </div>
    )
}
        
// ADD THIS TO MAIN.JSX
//import App from '../src/Jokes/JApp.jsx'