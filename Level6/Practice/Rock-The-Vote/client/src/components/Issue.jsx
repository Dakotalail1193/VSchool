import { useContext } from "react"
import { UserContext } from "../context/UserProvider"


function Issue(props){

    const {title, description, imgUrl, userId, username, _id, upvotes, downvotes} = props
    const {user, handleUpvotes, handleDownvotes, deleteIssue, editIssue} = useContext(UserContext)

    console.log("userId:", userId)
    console.log("user._id:", user._id)

    let isUser = userId === user._id
    return(
        <>
        <div>
            <h1>{username}</h1>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <img src={imgUrl}/>
            <button onClick={() => handleUpvotes(_id)}>Upvote</button>
            <p>{upvotes.length}</p>
            <button onClick={()=> handleDownvotes(_id)}>Downvote</button>
            <p>{downvotes.length}</p>
        </div>

        { isUser && (
            <>    
                <button>Edit</button>
                <button>Delete</button>
            </>
        )}
        

        </>
    )
}

export default Issue