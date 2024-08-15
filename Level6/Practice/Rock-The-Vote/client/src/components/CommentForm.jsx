import React, { useState} from "react";
import { UserContext } from "../context/UserProvider";

function CommentForm(){

    const initState = {
        username: '',
        comment: ''
    }

    const [formData, setFormData] = useState(initState)

    function handleChange(e){
        const {name, value} = e.target
            setFormData(prevData => {
                return {
                    ...prevData,
                    [name]: value
                }
            })
    }

    return(
        <>
        <form>
            <input name="username"
            value = {formData.username}
            onChange={handleChange} />
            <input name="comment"
            value = {formData.comment}
            onChange={handleChange}  />

            <button>Submit</button>
        </form>
        </>
    )
}

export default CommentForm