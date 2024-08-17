import React, { useState, useContext} from "react";
import { UserContext } from "../context/UserProvider";

function CommentForm(props){

    const initState = {
        comment: '',
       
    }

    const [formData, setFormData] = useState(initState)
    const { addComment} = useContext(UserContext)
    const {issueId} = props

    function handleChange(e){
        const {name, value} = e.target
            setFormData(prevData => {
                return {
                    ...prevData,
                    [name]: value
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addComment(issueId, formData)
        setFormData({
            comment: ""

        })

    }


    return(
        <>
        <form onSubmit={handleSubmit}>
           {/* <h4>{username}</h4> */}
            
            <textarea name="comment"
            value = {formData.comment}
            onChange={handleChange}  />

            <button>Submit</button>
        </form>
        </>
    )
}

export default CommentForm