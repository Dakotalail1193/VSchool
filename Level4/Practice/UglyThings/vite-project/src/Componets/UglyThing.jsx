import React, {useContext} from "react";
import { UglyContext } from "./ContextProvider";

function Thing(props){
    const {handleDelete, handleEditChange, editedThings, setEditedThings, saveEdit, isEditing, setIsEditing} = useContext(UglyContext)

    function editThing(props){
        setIsEditing(isEditing === props._id ? -1 : props._id)
        setEditedThings({
            title: props.title,
            imgUrl: props.imgUrl,
            description: props.description
        })
    }

    retuen (
        <>
            <div className="thing-container">
                {isEditing === props._id ? 
                    <input   value={editedThings.title}
                    onChange={handleEditChange}
                    name = "title"
                    placeholder="Title"
                    className="edited-thing" 
                    /> : <h1 className="title">
                    Title: {props.title}
                    </h1>
                }

                {isEditing === props._id ? 
                    <input   value={editedThings.imgUrl}
                    onChange={handleEditChange}
                    name = "imgUrl"
                    placeholder="Image Url"
                    className="edited-thing" 
                    /> : <img className="img"
                    src = {props.imgUrl}
                    />
                }
                {isEditing === props._id ? 
                    <input   value={editedThings.description}
                    onChange={handleEditChange}
                    name = "description"
                    placeholder="Description"
                    className="edited-thing" 
                    /> : <h1 className="description">
                    Description: {props.description}
                    </h1>
                }

                <button className="button" onClick={handleDelete}>Delete</button>

                {isEditing === props._id ?
                    <button className="button" onClick={saveEdit}>Save</button> :<button className="button" onClick = {editThing}>Edit</button>}
            </div>
        </>
    )

} export default Thing