import React, { useContext } from "react";
import Button from "./Button";
import { Context} from "../ThemeContext";

function Main(props){
    const {theme} = useContext(Context)
    return (
        <div className={`main-${theme}`}>
            <div className="main-container">
                <h2>You are currently using {theme} mode</h2>
                <Button/>
            </div>
        </div>
    )
}

export default Main