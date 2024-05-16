import React from "react";
import './NameApp.css'

export default function App() {
    const [firstName, setFirstName] = React.useState("")
    const [allName, setAllName] = React.useState([])


    
    function handleSubmit(event) {
        event.preventDefault();
        setAllName(
            prevNames =>
                [...prevNames, firstName]
        );
        setFirstName("") 
    }

    const nameList = allName.map((entry) => <li key={entry}>{entry}</li>)
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    className="input"
                    onChange={event => setFirstName(event.target.value)}
                    name="firstName"
                    value={firstName}
                />
                <button>Submit</button>
            </form>

            <h1 className="name">{firstName}</h1>
            <ol className="list">{nameList}</ol>
        </div>
    )
}