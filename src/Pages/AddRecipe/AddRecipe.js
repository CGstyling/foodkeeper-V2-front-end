import React, {useState} from "react";
import "./AddRecipe.css"
import {useForm} from "react-hook-form";
import axios from "axios";
import {useHistory} from "react-router-dom";

function AddRecipe() {
    const history = useHistory();
    const {register, handleSubmit, formState: {errors}} = useForm();

    const [uri, setUri] = useState("");

    async function onFormSubmit(data) {
        const userId = localStorage.getItem("userId")
        const token = localStorage.getItem("token");

        try {
            const result = await axios.post("http://localhost:8080/foodkeeper/recipes",{
              recipeName: data.name,
              recipeFile: uri,
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
        history.push("/")
    }

    async function uploadFile(e) {

        const formData = new FormData();
        formData.append("file", e.target.files[0])
        console.log(e)
        const token = localStorage.getItem("token");

        try {
            const result = await axios.post("http://localhost:8080/foodkeeper/uploadFile",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                });

            console.log(result)
            setUri(result.data.fileDownloadUri);
        } catch (e) {
            console.error(e);
        }
    }

    return(
        <div className="add-recipe-container">
            <h1>Upload your recipe now!</h1>

            <form className="add-recipe-form" onSubmit={handleSubmit(onFormSubmit)}>

                <label htmlFor="name">
                    <p>Name your recipe:</p>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your amazing dish name.."
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Please name your delicious dish..."
                            },
                        })}
                    />
                    {errors.name && <p className="errors">{errors.name.message}</p>}
                </label>

                <label htmlFor="file">
                    <p>Upload your most delicious picture of your recipe!</p>
                    <input
                        type="file"
                        id="file"
                        required={true}
                        {...register("file", {onChange:(e) => uploadFile(e)})}
                    />
                    {errors.file && <p className="errors">Please select a food picture for your dish...</p>}
                </label>

                <label htmlFor="ingredients">
                    <p>Your special ingredients:</p>
                    <textarea
                        {...register("ingredients",  {
                            required: {
                                value: true,
                                message: "Please let us know what the ingredients are.."
                            },
                        })}
                        id="ingredients"
                        cols="80"
                        rows="10"
                        placeholder="Your ingredients... and yes we know, your love is the most important"
                    >
                    </textarea>
                    {errors.ingredients && <p className="errors">{errors.ingredients.message}</p>}
                </label>

                <label htmlFor="method">
                    <p>Write here what needs to be done to make this recipe perfect:</p>
                    <textarea
                        {...register("method", {
                            required: {
                                value: true,
                                message: "Please let us know wich steps needs to be done for this dish...",
                            },
                        })}
                        id="method"
                        cols="80"
                        rows="10"
                        placeholder="Write what the journey will be..."
                    >
                    </textarea>
                    {errors.method && <p className="errors">{errors.method.message}</p>}
                </label>
                <br/>
                <label htmlFor="recipe-private">
                    <input
                        type="checkbox"
                        {...register("private")}
                    />
                    Pretty please, keep me secret!?
                </label>
                <br/>
                <br/>

                <button
                    type="submit"
                >
                    Save recipe!
                </button>
            </form>
        </div>
    );
}

export default AddRecipe;