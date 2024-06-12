import React, {useState} from "react"

const Context = React.createContext()

function ContextProvider(props){
    const [theme, setTheme] = useState("light")
    
    function toggleTheme(){
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <Context.Provider value = {{
            theme: theme,
            toggleTheme: toggleTheme
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}
