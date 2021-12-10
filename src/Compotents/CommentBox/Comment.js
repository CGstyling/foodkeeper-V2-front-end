import React from "react";

function Comment({comment}) {
    //comment die gepost word
    console.log(comment)
    return(
        <div className="comment">
            <p className="comment-header">{comment.user.username}</p>
            <p className="comment-body">{comment.comment}</p>
        </div>
    );
}
export default Comment;