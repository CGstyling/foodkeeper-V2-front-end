import React, {useEffect, useState} from "react";
import "./Recipe.css"
import soep from "../../Assets/soep.jpg"
import CommentBox from "../../Compotents/CommentBox/CommentBox";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import DownloadFile from "../../Compotents/DownloadFile/DownloadFile";

function Recipe() {

    const {recipeId} = useParams();

    const[recipeData, setRecipeData] = useState({});


    useEffect(() => {
        async function fetchRecipeData() {
            const token = localStorage.getItem("token");
            try{
                const result = await axios.get(`http://localhost:8080/foodkeeper/recipes/${recipeId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(result)
                setRecipeData(result.data);
            }catch (e) {
                console.error(e)
            }
        }
        fetchRecipeData();
    },[])

    return (
        <div className="recipe-container">

            <div className="recipe">

                <button>back</button>

                {Object.keys(recipeData).length > 0 &&
                <section>
                <div className="recipe-picture">
                    <DownloadFile uri={recipeData.recipeFile} classname="recipe-picture" nameImage="food"/>
                </div>

                <hr className="hr-line"/>

                <h1>{recipeData.recipeName}</h1>

                <div className="recipe-ingredient-list">
                    <h1>Ingredients:</h1>
                    <ul>
                        <li>
                            {recipeData.recipeIngredient}
                        </li>
                    </ul>
                </div>

                <h1>Steps:</h1>
                <div className="recipe-description">
                    <p>
                        {recipeData.recipeDescription}
                    </p>
                </div>
                </section>
                }

                <hr className="hr-line"/>

            </div>
            <h1>Comments:</h1>

            <CommentBox recipeId={recipeId}/>

        </div>

    );
}

export default Recipe;