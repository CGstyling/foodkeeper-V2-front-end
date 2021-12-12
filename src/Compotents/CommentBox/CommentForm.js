import React from "react";
import axios from "axios";
import {useForm} from "react-hook-form";


function CommentForm({recipeId, showAllComments}) {

    const { register, handleSubmit} = useForm();

    async function postComment(data) {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        console.log(data)
        try{
            const result = await axios.post("http://localhost:8080/foodkeeper/comments", {
                comment: data.comment,
                user: {
                    userId: userId,
                },
                recipes:{
                    recipeId: recipeId,
                }
            }, {
                headers: {
                    "Content-Type": "application/json",
                     Authorization: `Bearer ${token}`,
                },
            });
            console.log(result);
        } catch (e) {
            console.error(e)
        }
        showAllComments(data.comment)
    }

    return(
        <>
        <form className="comment-form" onSubmit={handleSubmit(postComment)}>
            <div className="comment-form-fields">
                <br/>
                <textarea
                    placeholder="Your thoughts about this recipe"
                    rows="4"
                    {...register("comment")}
                />
            </div>

            <div className="comment-form-actions">
                <button type="submit">Post Comment</button>
            </div>
        </form>

        </>
    );
}

export default CommentForm;