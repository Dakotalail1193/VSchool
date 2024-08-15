import Comment from "./Comment"

function CommentList (props){

    const {comment} = props

    const commentElements = comment.map(comment => {
        return (
            <Comment {...comment} key = {comment._id}/>
        )
    })

    return (
        <>
        {commentElements}
        </>
    )
}

export default CommentList