import React, {useEffect, useState} from "react";
import "./Comment.css"
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import axios from "axios";

function CommentBox({recipeId}) {
    const [comments, setComments] = useState([]);
    const [showComments, setShowComments] = useState();

    useEffect(() => {

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
        showAllComments();

    }, []);

    return(
        <div className="comment-box">
            <h2>Dit you liked the ricipe?</h2>
            {/*dit is de form waar de Post comment in staat*/}
            <CommentForm recipeId={recipeId}/>

            <button id="comment-reveal" onClick={comments}>
                {/*{buttonText}*/} show all comments
            </button>

            <h3>Comments</h3>
            <h4 className="comment-count">
                {comments.length}
            </h4>

            <div className="comment-list">
            <Comment comment={comments}/>
            {/*{commentNodes}*/}
            </div>
        </div>
    );
}

export default CommentBox;