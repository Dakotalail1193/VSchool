import React, {useContext} from 'react'
import { Context } from '../ThemeContext'

function Button(props){
    const {theme, toggleTheme} = useContext(Context)
    return (
        <button onClick={toggleTheme} className={`button-${theme}`}>Change Theme</button>
    )
}

export default Button