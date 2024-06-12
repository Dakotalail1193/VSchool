import React, {useContext} from "react";
import { Context } from "../ThemeContext";

function Header(){
    const {theme} = useContext(Context)

    return(
        <div className={`header-${theme}`}>
            <ul className="header-container">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Header