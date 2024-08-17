import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"
import IssueForm from "./IssueForm"



function Issue(props){

    const {title, description, imgUrl, userId, username, _id, upvotes, downvotes} = props
    const {user, handleUpvotes, handleDownvotes, deleteIssue, editIssue} = useContext(UserContext)

    const [editToggle, setEditToggle] = useState(false)

    // console.log("userId:", userId)
    // console.log("user._id:", user._id)
    

    let isUser = userId === user._id
    return(
        <>
        <div>
            {!editToggle ?
            <>            
            <h1>{username}</h1>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <img src={imgUrl}/>
            <button onClick={() => handleUpvotes(_id)}>Upvote</button>
            <p>{upvotes.length}</p>
            <button onClick={()=> handleDownvotes(_id)}>Downvote</button>
            <p>{downvotes.length}</p>
            <CommentForm issueId={_id} />
            <CommentList issueId = {_id} user={user}/>
            
         
            { isUser && (
                <>    
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit</button>
                    <button onClick={()=> deleteIssue(_id)}>Delete</button>
                </>
            )}
            </>
            :
            <>
            <IssueForm
            title = {title}
            description = {description}
            imgUrl = {imgUrl}
            btnText ="Submit Edit"
            submit={editIssue}
            />
            <button
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
            </>
            }
        </div>
        </>
    )
}

export default Issue