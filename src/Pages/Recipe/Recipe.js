import React, {useContext, useEffect, useState} from "react";
import "./Recipe.css"
import CommentBox from "../../Compotents/CommentBox/CommentBox";
import {useParams} from "react-router-dom";
import axios from "axios";
import DownloadFile from "../../Compotents/DownloadFile/DownloadFile";
import BlockRecipeButton from "../../Compotents/BlockRecipeButton/BlockRecipeButton";
import {AuthContext} from "../../Context/AuthContext";

function Recipe() {

    const {recipeId} = useParams();
    const {user} = useContext(AuthContext);

    const[recipeData, setRecipeData] = useState({});
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        setUserRole(user.roleName)

        async function fetchRecipeData() {
            const token = localStorage.getItem("token");
            try{
                const result = await axios.get(`http://localhost:8080/foodkeeper/recipes/${recipeId}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
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

                {userRole === 'ROLE_ADMIN' &&
                <BlockRecipeButton recipeId={recipeData.recipeId}/>
                }

                {Object.keys(recipeData).length > 0 &&
                <section>
                <div className="recipe-picture">
                    <DownloadFile uri={recipeData.recipeFile} classname="recipe-picture" nameImage="food"/>
                </div>

                <hr className="hr-line"/>

                <h1 className="recipe-recipeName">{recipeData.recipeName}</h1>

                <h2>Ingredients:</h2>
                <div className="recipe-ingredient-list">

                    <p>
                        {recipeData.recipeIngredient}
                    </p>
                </div>

                <h2>Steps:</h2>
                <div className="recipe-description">
                    <p>
                        {recipeData.recipeDescription}
                    </p>
                </div>
                </section>
                }

                <hr className="hr-line"/>

            </div>
            <h2>Comments:</h2>

            <CommentBox recipeId={recipeId}/>

        </div>

    );
}

export default Recipe;