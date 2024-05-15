import React from "react"; 
import './NameApp.css'

export default function App(){
    const [entry, setEntry] = React.useState(["Bob Jones", "John Doe"])

    
    function handleChange(event){
        const {name, value} = event.target
        setEntry ((prevEntry) => {
            return {
                ...prevEntry,
                [name]: value,
            };
        });
    };

    function handleSubmit(event){
        event.preventDefault();
        setEntry((prevEntry) =>{
            return [...prevEntry, name.value]
        })
    }
     
    const nameList = entry.map(entry => <li key={entry}>{entry}</li>)
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                type ="text"
                placeholder="Name"
                className="input"
                
                name="name"
                />
                <button>Submit</button>
            </form>

            <h1 className="name"></h1>
            <ol className="list">{nameList}</ol>
        </div>
    )
}