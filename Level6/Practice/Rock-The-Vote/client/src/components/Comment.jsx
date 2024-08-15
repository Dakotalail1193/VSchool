import React, { useContext} from "react";
import { UserContext } from "../context/UserProvider";

function Comment(props){

const {username, comment, userId, _id} = props
const {user} = useContext

    return(
        <>
            <div>
            <h4>{comment.user.username}</h4>
            <p>{comment.comment}</p>

            </div>
        </>
    )
}

export default Comment