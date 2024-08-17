import { useContext } from "react"
import { UserContext } from "../context/UserProvider"



function CommentList (props){
    const {issueId, user} = props
    const {comments} = useContext(UserContext)
    const filteredComments = comments.filter(comment => comment.issueId === issueId)

    const commentElements = filteredComments.map(comments => {
        return (
                <div key={comments._id}>
                    <h3>{comments.username}</h3>
                    <p>{comments.comment}</p>
                    {comments.userId === user._id 
                        // <button onClick={() => deleteComment(comment._id)}>Delete</button>
    }
                    </div>
    //         <Comment {...comments} key = {comments._id}/>
        )
    })
    
    

    return (
        <>
        {commentElements}
        </>
    )
}

export default CommentList