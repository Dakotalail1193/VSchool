import React from "react"

export default function MemeList(props) {

    const [isEditing, setIsEditing] = React.useState(false)

    const [editedMeme, setEditedmeme] = React.useState({
        // topText: props.topText,
        // bottomText: props.bottomText,
        ...props.meme
        
    })

    
    function handleChange(event){
        const {name, value} = event.target
        setEditedmeme(prevState => {
            return {
                ...prevState,
                [name]: value     
                    
            }  
        })
    }

    function handleSubmit(event){
        event.preventDefault() 
        setEditedmeme(prevState => {
          return  {
            topText: editedMeme.topText}
        })
        editMemes(props._id)
        toggleEdit()
        // props.topText = editedMeme.topText,
        // props.bottomText = editedMeme.bottomText
    }

    const toggleEdit = () => {
        setIsEditing(prev=>!prev)
    }
    
    console.log(isEditing)
    console.log(props)
    

        const{handleDelete} = props 
        const{editMemes} = props 

    return (
    <div>
        <div className ="list-container">
            <img src = {props.randomImage} className="list-item-img"/>

         {isEditing ?
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editedMeme.topText}
                    name="topText"
                    onChange={handleChange}
                />
                <input
                    value={editedMeme.bottomText}
                    name="bottomText"
                    onChange={handleChange}/>
                <button>Save</button>
            </form>
        :   <h2 className="list-top">{props.topText}</h2> &&
            <h2 className="list-bot">{props.bottomText}</h2>
        } 

            <h2 className="list-top">{editedMeme.topText}</h2>
            <h2 className="list-bot">{editedMeme.bottomText}</h2>
        </div>
        <button onClick={() => handleDelete(props._id)}>Delete</button>
        <button onClick={toggleEdit}> {isEditing ? "Close" : "Edit"}</button>
    </div>

    )
}