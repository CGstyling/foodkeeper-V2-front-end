import React from "react";
import "./AddRecipe.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {Link} from "react-router-dom";

function AddRecipe() {
    const {register, handleSubmit} = useForm();

    async function onFormSubmit(data) {
        const userId = localStorage.getItem("userId")
        const token = localStorage.getItem("token");

        try {
            const result = await axios.post("http://localhost:8080/foodkeeper/recipes",{
              recipeName: data.name,
              //recipeFile:
              recipeIngredient: data.ingredients,
              recipeDescription: data.method,
              recipeIsPrivate: data.private,
              user: {
                  userId: userId
              },
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log(result);
        }catch (e) {
            console.error(e)
        }
        // console.log(data)
    }

    return(
        <div className="add-recipe-container">
            <h1>Upload here a recipe</h1>

            <form className="add-recipe-form" onSubmit={handleSubmit(onFormSubmit)}>

                <label htmlFor="name">
                    <p>Name your recipe:</p>
                    <input
                        type="text"
                        id="name"
                        {...register("name")}
                    />
                </label>

                <label htmlFor="img-upload">
                    <p>Upload here your food picture!</p>
                    <input
                        type="file"
                        id="img-upload"
                        {...register("image")}
                    />
                </label>

                <label htmlFor="ingredients">
                    <p>Your special ingredients:</p>
                    <textarea
                        {...register("ingredients")}
                        id="ingredients"
                        cols="80"
                        rows="10"
                        placeholder="Your ingredients.."
                    >
                    </textarea>
                </label>

                <label htmlFor="method">
                    <p>Write here what needs to be done to make this recipe perfect:</p>
                    <textarea
                        {...register("method")}
                        id="method"
                        cols="80"
                        rows="10"
                        placeholder="Your method: step 1:... step2..."
                    >
                    </textarea>
                </label>
                <br/>
                <label htmlFor="recipe-private">
                    <input
                        type="checkbox"
                        {...register("private")}
                    />
                    Do you want to be your recipe private?
                </label>
                <br/>
                <br/>

                <Link to="/">
                <button
                    type="submit"
                >
                    Save recipe!
                </button>
                </Link>

            </form>
        </div>
    );
}

export default AddRecipe;