import React, {useState} from "react";
import "./Comment.css"
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import axios from "axios";

function CommentBox({recipeId}) {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState(false);

        async function showAllComments() {
            const token = localStorage.getItem("token");

            try {
                const result = await axios.get(`http://localhost:8080/foodkeeper/recipes/${recipeId}/comments`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(result);
                console.log(result.data);
                setComments(result.data);
            } catch (e) {
                console.error(e);
            }
        }

    function handleClick() {
        setShowComments(!showComments)
    }

    return(
        <div className="comment-box">
            <h2>Dit you liked the ricipe?</h2>

            <CommentForm recipeId={recipeId} showAllComments={showAllComments}/>

            <button id="comment-reveal" onClick={handleClick}>
                {showComments ? "hide comments" : "show comments"}
            </button>

            <h3>Comments</h3>
            <h4 className="comment-count">
                {comments <= 0 ? "no comments yet!" : comments.length}
            </h4>

            {showComments &&

            <div className="comment-list">

                {Object.keys(comments).length > 0 &&
                <>
                    {comments && comments.map((comment) => {
                        return <Comment key={comment.commentId} comment={comment}/>
                    })}
                </>
                }
            </div>
            }
        </div>
    );
}

export default CommentBox;