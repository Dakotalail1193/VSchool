import React, {useContext} from "react";
import { Context } from "../ThemeContext";

function Footer(){
    const {theme} = useContext(Context)

    return(
        <div className={`footer-${theme}`}>
            <h3>The Footer</h3>
        </div>
    )
}
export default Footer