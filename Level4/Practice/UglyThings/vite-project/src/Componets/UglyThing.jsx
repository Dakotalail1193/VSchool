import React, {useContext} from "react";
import { UglyContext } from "./ContextProvider";


function Thing(props){
    const {handleDelete,  handleEditChange, editedThings, saveEdit, beginEdit} = useContext(UglyContext)

    function apiDelete(event){
        event.preventDefault()        
        handleDelete(props._id)
    }    

    
if(props.isEditing){
    console.log(props.isEditing, 'line 35 return')
    return (
        <>
            <div className="thing-container">
               
                <form>
                    <input value={editedThings.title}
                    onChange={handleEditChange}
                    name = "title"
                    placeholder="Title"
                    className="edited-thing" 
                    />
                

              
                    <input value={editedThings.imgUrl}
                    onChange={handleEditChange}
                    name = "imgUrl"
                    placeholder="Image Url"
                    className="edited-thing" 
                    /> 
                
              
                    <input value={editedThings.description}
                    onChange={handleEditChange}
                    name = "description"
                    placeholder="Description"
                    className="edited-thing" 
                    />

                    </form> 
                

                <button className="button" onClick={apiDelete}>Delete</button>                
                <button className="button" onClick={() => saveEdit(props._id)}>Save</button> 
            </div>
        </>
    )}

else {
    
    return (  <div className="thing-container">
       
        <form>
            <h1 className="title">
            Title: {props.title}
            </h1>     

             <img className="img"
            src = {props.imgUrl}
            />        
      
             <h1 className="description">
            Description: {props.description}
            </h1>

            </form>         

        <button className="button" onClick={apiDelete}>Delete</button>
        <button className="button" onClick = { () => beginEdit(props._id)}>Edit</button>

    </div>
    )}

} export default Thing